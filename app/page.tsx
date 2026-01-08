'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Trash2,
  Lock,
  Timer,
  Github,
  Blocks,
  Download,
  ChevronRight,
  FileText,
  Send,
  MapPin
} from 'lucide-react'

export default function ØxfileLanding() {
  const [activeTab, setActiveTab] = useState<'øxfile' | 'encryption'>('øxfile')
  const [typedText, setTypedText] = useState('')
  const [binaryColumns, setBinaryColumns] = useState<string[][]>([])
  const [mounted, setMounted] = useState(false)
  const fullText = 'Secure, encrypted, and self-destructing file sharing.'

  // Mount effect
  useEffect(() => {
    setMounted(true)
    // Generate binary columns once on client
    const columns = Array(6).fill(0).map(() =>
      Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0')
    )
    setBinaryColumns(columns)
  }, [])

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const codeContent = {
    øxfile: `1  import { encrypt } from './crypto'
2
3  interface FileConfig {
4    encryption: 'AES-256',
5    access: 'ONE_TIME_ONLY',
6    logging: 'DISABLED',
7    expiry: number
8  }
9
10 export async function shareFile(file: File) {
11   const encrypted = await encrypt(file)
12   const link = generateLink(encrypted)
13
14   // Auto-destruct after first download
15   return { link, status: 'READY' }
16 }`,
    encryption: `1  import { webcrypto } from 'crypto'
2
3  const algorithm = {
4    name: 'AES-GCM',
5    length: 256
6  }
7
8  export async function encrypt(data: File) {
9    const key = await webcrypto.subtle.generateKey(
10     algorithm,
11     true,
12     ['encrypt', 'decrypt']
13   )
14
15   const iv = webcrypto.getRandomValues(new Uint8Array(12))
16   const encrypted = await webcrypto.subtle.encrypt(
17     { name: 'AES-GCM', iv },
18     key,
19     await data.arrayBuffer()
20   )
21
22   return { encrypted, key, iv }
23 }`
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dotted Grid Background */}
      <div className="fixed inset-0 dotted-grid pointer-events-none" />

      {/* Animated Background Lines */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal Lines */}
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-primary/8 to-transparent top-[20%] animate-scan-horizontal" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-primary/5 to-transparent top-[60%] animate-scan-horizontal-slow" />

        {/* Vertical Lines */}
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-primary/8 to-transparent left-[30%] animate-scan-vertical" />
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-primary/5 to-transparent left-[70%] animate-scan-vertical-slow" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-primary/12 rounded-full animate-float-particle"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        <div className="absolute w-96 h-96 bg-purple-primary/8 rounded-full blur-3xl top-[10%] left-[10%] animate-orb-1" />
        <div className="absolute w-80 h-80 bg-purple-light/8 rounded-full blur-3xl bottom-[20%] right-[15%] animate-orb-2" />
        <div className="absolute w-72 h-72 bg-purple-dark/8 rounded-full blur-3xl top-[60%] left-[60%] animate-orb-3" />
      </div>

      {/* Binary Rain Effect */}
      {mounted && binaryColumns.length > 0 && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-8">
          {binaryColumns.map((column, i) => (
            <div
              key={i}
              className="absolute font-mono text-xs text-purple-primary/30 whitespace-nowrap animate-binary-rain"
              style={{
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 2}s`,
              }}
            >
              {column.map((bit, j) => (
                <div key={j} className="mb-2">
                  {bit}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12 w-full scale-in relative">
            <div className="relative w-full max-w-2xl px-4">
              <Image
                src="/logo.svg"
                alt="Øxfile"
                width={800}
                height={400}
                className="w-full h-auto brightness-0 invert drop-shadow-[0_0_10px_rgba(139,92,246,0.15)]"
                style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(139,92,246,0.15))' }}
                priority
              />
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-8 fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="glass-card px-6 py-2 rounded-full">
              <span className="gradient-text text-sm font-bold tracking-wider">🔒 ZERO-KNOWLEDGE ENCRYPTION</span>
            </div>
          </div>

          {/* Description with Typing Animation */}
          <div className="text-center text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed min-h-[4rem] flex items-center justify-center">
            <p className="text-white font-semibold font-mono">
              {typedText}
              <span className="inline-block w-0.5 h-6 bg-purple-primary ml-1 animate-pulse"></span>
            </p>
          </div>
          <p className="text-center text-purple-light mb-12 fade-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
            Client-side encryption. Zero logs. Total privacy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4 fade-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <a
              href="https://zeroxfile-encrypt.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 bg-purple-primary text-white font-mono border border-purple-primary hover:bg-purple-dark transition-all duration-300 inline-block"
            >
              <span className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Start Encrypting
              </span>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1RdjaPPydyYmhj-oN4vgwW4fH83iIClZ-?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 glass-card text-purple-light font-mono border border-purple-primary/30 hover:border-purple-primary transition-all duration-300 inline-block"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Extension
              </span>
            </a>
          </div>

          {/* Roadmap Button */}
          <div className="flex justify-center mb-16 fade-in" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <a
              href="/roadmap"
              className="group relative px-6 py-2 glass-card text-purple-light font-mono border border-purple-primary/20 hover:border-purple-primary/50 transition-all duration-300 inline-block text-sm"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                View Roadmap
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mock Code Editor */}
          <div className="max-w-4xl mx-auto border border-purple-primary/30 rounded overflow-hidden fade-in" style={{ animationDelay: '0.7s', opacity: 0 }}>
            {/* Editor Header */}
            <div className="border-b border-purple-primary/30 bg-black px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full border border-purple-primary/50" />
                <div className="w-2 h-2 rounded-full border border-purple-primary/50" />
                <div className="w-2 h-2 rounded-full border border-purple-primary/50" />
              </div>
              <span className="text-xs text-purple-light font-mono">encryption-suite.ts</span>
            </div>

            {/* Tabs */}
            <div className="border-b border-purple-primary/30 flex bg-black">
              <button
                onClick={() => setActiveTab('øxfile')}
                className={`px-4 py-2 border-r border-purple-primary/30 font-mono text-sm transition-all relative ${
                  activeTab === 'øxfile'
                    ? 'text-purple-light bg-purple-primary/10'
                    : 'text-gray-light hover:text-purple-light'
                }`}
              >
                {activeTab === 'øxfile' && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-purple-primary" />
                )}
                øxfile.ts
              </button>
              <button
                onClick={() => setActiveTab('encryption')}
                className={`px-4 py-2 font-mono text-sm transition-all relative ${
                  activeTab === 'encryption'
                    ? 'text-purple-light bg-purple-primary/10'
                    : 'text-gray-light hover:text-purple-light'
                }`}
              >
                {activeTab === 'encryption' && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-purple-primary" />
                )}
                encryption.ts
              </button>
            </div>

            {/* Code Content */}
            <div className="bg-black p-6 font-mono text-xs md:text-sm overflow-x-auto">
              <pre className="text-gray-light">
                <code key={activeTab} className="tab-content block leading-relaxed">
                  {codeContent[activeTab]}
                </code>
              </pre>
            </div>

            {/* Status Bar */}
            <div className="border-t border-purple-primary/30 bg-black px-4 py-1.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <span className="text-purple-light font-mono">ENCRYPTED</span>
                <span className="text-gray-light font-mono">TS</span>
              </div>
              <span className="text-purple-light font-mono">AES-256</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">[ FEATURES ]</h2>
            <p className="text-gray-light text-sm font-mono">Privacy-first architecture</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="border border-purple-primary/30 p-6 group hover:border-purple-primary/50 transition-all slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 border border-purple-primary/50 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-purple-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white font-mono">CLIENT-SIDE ENCRYPTION</h3>
              <p className="text-gray-light text-sm leading-relaxed">
                Files encrypted in browser. Keys never touch servers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border border-purple-primary/30 p-6 group hover:border-purple-primary/50 transition-all slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 border border-purple-primary/50 flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-purple-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white font-mono">ONE-TIME ACCESS</h3>
              <p className="text-gray-light text-sm leading-relaxed">
                Links self-destruct after download. No second chances.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border border-purple-primary/30 p-6 group hover:border-purple-primary/50 transition-all slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 border border-purple-primary/50 flex items-center justify-center mb-4">
                <Trash2 className="w-6 h-6 text-purple-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white font-mono">ZERO LOGS</h3>
              <p className="text-gray-light text-sm leading-relaxed">
                No metadata, no records. Privacy by default.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border border-purple-primary/30 p-6 group hover:border-purple-primary/50 transition-all slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 border border-purple-primary/50 flex items-center justify-center mb-4">
                <Timer className="w-6 h-6 text-purple-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white font-mono">AUTO-DESTRUCT</h3>
              <p className="text-gray-light text-sm leading-relaxed">
                Configurable expiry. Files vanish without trace.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="border border-purple-primary/30 p-6 group hover:border-purple-primary/50 transition-all slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 border border-purple-primary/50 flex items-center justify-center mb-4">
                <Github className="w-6 h-6 text-purple-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white font-mono">OPEN SOURCE</h3>
              <p className="text-gray-light text-sm leading-relaxed">
                Fully auditable. No backdoors. Trust through transparency.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="border border-purple-primary/30 p-6 group hover:border-purple-primary/50 transition-all slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 border border-purple-primary/50 flex items-center justify-center mb-4">
                <Blocks className="w-6 h-6 text-purple-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white font-mono">WEB3 READY</h3>
              <p className="text-gray-light text-sm leading-relaxed">
                Decentralized architecture. Your files, your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Encryption Visual Demo */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">[ ENCRYPTION FLOW ]</h2>
            <p className="text-gray-light text-sm font-mono">End-to-end process</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Plain Text */}
            <div className="border border-purple-primary/30 p-4 slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-gray-light" />
                <h3 className="font-bold text-white text-sm font-mono">ORIGINAL</h3>
              </div>
              <div className="border border-purple-primary/20 p-3 bg-black font-mono text-xs">
                <p className="text-white mb-1">secret_document.pdf</p>
                <p className="text-gray-light">Plain text, readable</p>
              </div>
            </div>

            {/* Encrypted */}
            <div className="border border-purple-primary/30 p-4 slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-4 h-4 text-purple-primary" />
                <h3 className="font-bold text-white text-sm font-mono">ENCRYPTED</h3>
              </div>
              <div className="border border-purple-primary p-3 bg-purple-primary/5 font-mono text-xs">
                <p className="text-purple-light mb-1 break-all">8a9f7e3d2c1b5a4f...</p>
                <p className="text-purple-light/70">AES-256-GCM</p>
              </div>
            </div>
          </div>

          {/* Encryption Flow */}
          <div className="mt-6 border border-purple-primary/30 p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-purple-primary/30 flex items-center justify-center">
                  <span className="text-purple-primary font-mono text-xs">1</span>
                </div>
                <div>
                  <p className="text-white text-xs font-mono">GEN KEY</p>
                  <p className="text-xs text-gray-light font-mono">256-bit</p>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-purple-primary/50" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-purple-primary/30 flex items-center justify-center">
                  <span className="text-purple-primary font-mono text-xs">2</span>
                </div>
                <div>
                  <p className="text-white text-xs font-mono">ENCRYPT</p>
                  <p className="text-xs text-gray-light font-mono">AES-GCM</p>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-purple-primary/50" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-purple-primary/30 flex items-center justify-center">
                  <span className="text-purple-primary font-mono text-xs">3</span>
                </div>
                <div>
                  <p className="text-white text-xs font-mono">UPLOAD</p>
                  <p className="text-xs text-gray-light font-mono">Encrypted</p>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-purple-primary/50" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-purple-primary/30 flex items-center justify-center">
                  <span className="text-purple-primary font-mono text-xs">4</span>
                </div>
                <div>
                  <p className="text-white text-xs font-mono">SHARE</p>
                  <p className="text-xs text-gray-light font-mono">Link+Key</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">How It Works</span>
            </h2>
            <p className="text-gray-light text-lg">Understanding our zero-knowledge architecture</p>
          </div>

          <div className="space-y-8">
            {/* How It Works */}
            <div className="glass-card rounded-2xl p-8 md:p-12 neon-border group slide-up hover:scale-[1.02] transition-all duration-300" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <a href="/how-it-works" className="block">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-primary to-purple-dark flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-purple-light transition-colors">End-to-End Encryption</h3>
                    <p className="text-purple-light text-sm">Click to see the detailed flow →</p>
                  </div>
                </div>
                <div className="ml-10 space-y-4 text-gray-light leading-relaxed">
                  <p>
                    Every note is assigned a randomly generated 256-bit ID and a 256-bit encryption key.
                    The ID is used solely for storing and retrieving the note, while the content is encrypted on the client side using AES-GCM with the generated key.
                  </p>
                  <p>
                    Only the encrypted data is sent to the server, which stores it entirely in memory without writing anything to disk.
                    Because the server never receives the encryption key, it is technically unable to decrypt any note contents—even if attempted.
                  </p>
                </div>
              </a>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6 slide-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-primary/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-purple-primary" />
                  </div>
                  <h4 className="text-lg font-bold">Client-Side Encryption</h4>
                </div>
                <p className="text-gray-light text-sm">Server cannot read note contents</p>
              </div>

              <div className="glass-card rounded-xl p-6 slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-light/20 flex items-center justify-center">
                    <Timer className="w-5 h-5 text-purple-light" />
                  </div>
                  <h4 className="text-lg font-bold">Expiration Timers</h4>
                </div>
                <p className="text-gray-light text-sm">Optional view limits and time-based expiry</p>
              </div>

              <div className="glass-card rounded-xl p-6 slide-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-glow/20 flex items-center justify-center">
                    <Trash2 className="w-5 h-5 text-purple-glow" />
                  </div>
                  <h4 className="text-lg font-bold">Memory Storage</h4>
                </div>
                <p className="text-gray-light text-sm">In-memory only, no disk persistence</p>
              </div>

              <div className="glass-card rounded-xl p-6 slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-dark/20 flex items-center justify-center">
                    <Github className="w-5 h-5 text-purple-dark" />
                  </div>
                  <h4 className="text-lg font-bold">Open Source</h4>
                </div>
                <p className="text-gray-light text-sm">Fully auditable and transparent code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-purple-primary/30 py-16 px-4 mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Øxfile</h3>
              <p className="text-gray-light text-sm leading-relaxed">
                Zero-knowledge, client-side encrypted file sharing platform.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <nav className="space-y-2">
                <a href="#" className="block text-gray-light hover:text-purple-light transition-colors text-sm">Home</a>
                <a href="#features" className="block text-gray-light hover:text-purple-light transition-colors text-sm">Features</a>
                <a href="#about" className="block text-gray-light hover:text-purple-light transition-colors text-sm">About</a>
                <a href="/roadmap" className="block text-gray-light hover:text-purple-light transition-colors text-sm">Roadmap</a>
                <a href="/how-it-works" className="block text-gray-light hover:text-purple-light transition-colors text-sm">How It Works</a>
              </nav>
            </div>

            {/* Status */}
            <div>
              <h4 className="text-white font-bold mb-4">Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-primary animate-pulse"></div>
                <span className="text-purple-light text-sm">Secure & Encrypted</span>
              </div>
              <p className="text-gray-light text-xs mt-4">
                Your privacy is our priority.
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center gap-8 pt-8 border-t border-purple-primary/30">
            <div className="flex items-center justify-center gap-6">
              {/* pump.fun */}
              <a
                href="https://pump.fun/coin/Tv8BY5PAn1bLXKov3ycwaBZSjn4qYDhdt86eWv2pump"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-primary/20 transition-all">
                  <Image
                    src="/pumpfun-logo.png"
                    alt="pump.fun"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-primary/20 transition-all">
                  <Image
                    src="/x-logo.png"
                    alt="X"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/zer0xfile"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-primary/20 transition-all">
                  <Send className="w-6 h-6 text-purple-light" />
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ardtys/0x-File-Backend"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-primary/20 transition-all">
                  <Github className="w-6 h-6 text-purple-light" />
                </div>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-light mb-2">
                © 2026 Øxfile. All rights reserved.
              </p>
              <p className="text-xs text-purple-light">
                Encrypted • Ephemeral • Open Source
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
