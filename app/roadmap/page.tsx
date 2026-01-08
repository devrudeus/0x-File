'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Rocket,
  Link2,
  Ticket,
  Shield,
  Database,
  Code2,
  MapPin,
  ChevronRight,
  Check,
  Calendar,
  Target,
  Zap,
  Users,
  Globe
} from 'lucide-react'

export default function RoadmapPage() {
  const [binaryColumns, setBinaryColumns] = useState<string[][]>([])
  const [mounted, setMounted] = useState(false)

  // Mount effect
  useEffect(() => {
    setMounted(true)
    // Generate binary columns once on client
    const columns = Array(6).fill(0).map(() =>
      Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0')
    )
    setBinaryColumns(columns)
  }, [])

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

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="border-b border-purple-primary/30 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-purple-light hover:text-purple-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm">Back to Home</span>
            </Link>
          </div>
        </div>

        {/* Roadmap Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 fade-in">
              <div className="inline-flex items-center justify-center gap-3 mb-6 glass-card px-6 py-3 rounded-full">
                <Target className="w-5 h-5 text-purple-primary" />
                <span className="text-purple-light font-mono text-sm tracking-wider">DEVELOPMENT ROADMAP</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Building the Future</span>
              </h1>
              <p className="text-gray-light text-xl mb-6 max-w-3xl mx-auto leading-relaxed">
                Building the <span className="text-purple-light font-bold">0x Privacy Ecosystem</span>
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="glass-card p-6 rounded-xl border border-purple-primary/30">
                  <p className="text-purple-light text-lg italic leading-relaxed">
                    "Øxfile is building the missing privacy layer for the internet.<br />
                    Not storage. Not surveillance. <span className="text-white font-bold">Delivery without memory.</span>"
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Connector */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-primary via-purple-primary/50 to-purple-primary/20 hidden md:block" />

              {/* Roadmap Timeline */}
              <div className="space-y-12">
                {/* Phase 0 - Current */}
                <div className="relative pl-0 md:pl-20 slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-8 w-5 h-5 bg-purple-primary rounded-full border-4 border-black animate-pulse shadow-lg shadow-purple-primary/50 hidden md:block" />

                  <div className="glass-card rounded-2xl overflow-hidden border-2 border-purple-primary bg-gradient-to-br from-purple-primary/10 via-black to-black hover:border-purple-primary transition-all group">
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-primary to-purple-dark flex items-center justify-center flex-shrink-0 shadow-xl">
                            <Rocket className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h2 className="text-3xl font-bold text-white">Phase 0</h2>
                              <div className="px-3 py-1 bg-purple-primary/20 border border-purple-primary rounded-full">
                                <span className="text-purple-primary font-bold text-xs uppercase tracking-wider">Current</span>
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold text-purple-light mb-1">0xFile</h3>
                            <p className="text-gray-light font-mono text-sm">Core Infrastructure</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 glass-card px-5 py-3 rounded-lg border border-purple-primary/50">
                          <Check className="w-5 h-5 text-purple-primary" />
                          <span className="text-purple-primary font-bold text-sm">LIVE / MVP</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-purple-primary" />
                            Overview
                          </h4>
                          <p className="text-gray-light text-lg leading-relaxed">
                            The foundation of the Øx ecosystem: a <span className="text-white font-semibold">zero-knowledge, client-side encrypted delivery layer</span>. 0xFile establishes the core infrastructure that all future products will build upon, providing military-grade encryption without any server-side knowledge of your data.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-primary" />
                            Key Features
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { title: 'Client-side encryption (AES-256-GCM)', desc: 'Files are encrypted in your browser before upload. Servers only see encrypted data.' },
                              { title: 'One-time & expiring access links', desc: 'Links automatically expire after first access or set time limit.' },
                              { title: 'Auto-destruct after access or expiry', desc: 'Files are permanently deleted once accessed or expired - no recovery possible.' },
                              { title: 'Zero logs & no metadata storage', desc: 'We don\'t track who uploads, downloads, or when. Complete anonymity.' },
                              { title: 'In-memory only data handling', desc: 'Data exists only in RAM, never written to disk. Disappears on server restart.' },
                              { title: 'Open-source and auditable core', desc: 'Full transparency. Anyone can verify our security claims.' }
                            ].map((feature, idx) => (
                              <div key={idx} className="glass-card p-4 rounded-lg hover:border-purple-primary/50 transition-all">
                                <div className="flex items-start gap-3 mb-2">
                                  <Check className="w-5 h-5 text-purple-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-white font-semibold text-sm">{feature.title}</span>
                                </div>
                                <p className="text-gray-light text-xs ml-8">{feature.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-primary" />
                            Use Cases
                          </h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            {['Share sensitive documents securely', 'Send API keys & credentials', 'Deliver confidential business files', 'Share private photos/videos', 'Transfer medical records', 'Exchange legal documents'].map((useCase, idx) => (
                              <div key={idx} className="glass-card p-3 rounded-lg text-sm text-gray-light hover:text-purple-light transition-colors">
                                • {useCase}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 1 - 0xTicket */}
                <div className="relative pl-0 md:pl-20 slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-8 w-5 h-5 bg-black border-2 border-purple-primary/70 rounded-full shadow-lg hidden md:block" />

                  <div className="glass-card rounded-2xl overflow-hidden border border-purple-primary/30 hover:border-purple-primary/60 transition-all group">
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-xl border-2 border-purple-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-primary/10 transition-all">
                            <Ticket className="w-8 h-8 text-purple-light" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Phase 1</h2>
                            <h3 className="text-2xl font-bold text-purple-light mb-1">0xTicket</h3>
                            <p className="text-gray-light font-mono text-sm">Blockchain Ticketing</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 glass-card px-5 py-3 rounded-lg">
                          <Calendar className="w-5 h-5 text-gray-light" />
                          <span className="text-gray-light font-bold text-sm">Q1 2026</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-purple-primary" />
                            Overview
                          </h4>
                          <p className="text-gray-light text-lg leading-relaxed">
                            A <span className="text-white font-semibold">blockchain-based ticketing system</span> built on Solana, powered by Øxfile's encrypted delivery. 0xTicket revolutionizes event ticketing by making tickets non-transferable, unforgeable, and truly one-time use through cryptographic verification and on-chain minting.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-primary" />
                            Key Features
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { title: 'On-chain ticket minting', desc: 'Each ticket is a unique NFT minted on Solana blockchain with verifiable authenticity.' },
                              { title: 'Encrypted ticket payloads', desc: 'QR codes contain encrypted data that can only be decrypted once during entry verification.' },
                              { title: 'One-entry verification', desc: 'Tickets automatically burn after scanning. No duplicate entries, no reselling used tickets.' },
                              { title: 'Anti-screenshot & anti-resale logic', desc: 'Dynamic QR codes that refresh every few seconds, making screenshots useless.' }
                            ].map((feature, idx) => (
                              <div key={idx} className="glass-card p-4 rounded-lg hover:border-purple-primary/50 transition-all">
                                <div className="flex items-start gap-3 mb-2">
                                  <ChevronRight className="w-5 h-5 text-purple-primary/70 mt-0.5 flex-shrink-0" />
                                  <span className="text-white font-semibold text-sm">{feature.title}</span>
                                </div>
                                <p className="text-gray-light text-xs ml-8">{feature.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-primary" />
                            Use Cases
                          </h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            {['Concert & music festivals', 'Sports events & tournaments', 'Corporate conferences', 'Private VIP events', 'Theater & cinema shows', 'Flight & transportation tickets'].map((useCase, idx) => (
                              <div key={idx} className="glass-card p-3 rounded-lg text-sm text-gray-light hover:text-purple-light transition-colors">
                                • {useCase}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-purple-primary" />
                            Impact
                          </h4>
                          <div className="glass-card p-4 rounded-lg border border-purple-primary/20">
                            <p className="text-gray-light text-sm leading-relaxed">
                              Eliminates ticket fraud, scalping, and counterfeiting. Event organizers regain control over their events while attendees get guaranteed authentic tickets. The blockchain ensures transparency and immutability.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 - 0xLink */}
                <div className="relative pl-0 md:pl-20 slide-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-8 w-5 h-5 bg-black border-2 border-purple-primary/70 rounded-full shadow-lg hidden md:block" />

                  <div className="glass-card rounded-2xl overflow-hidden border border-purple-primary/30 hover:border-purple-primary/60 transition-all group">
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-xl border-2 border-purple-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-primary/10 transition-all">
                            <Link2 className="w-8 h-8 text-purple-light" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Phase 2</h2>
                            <h3 className="text-2xl font-bold text-purple-light mb-1">0xLink</h3>
                            <p className="text-gray-light font-mono text-sm">Secure Delivery Protocol</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 glass-card px-5 py-3 rounded-lg">
                          <Calendar className="w-5 h-5 text-gray-light" />
                          <span className="text-gray-light font-bold text-sm">Q2 2026</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-purple-primary" />
                            Overview
                          </h4>
                          <p className="text-gray-light text-lg leading-relaxed">
                            A <span className="text-white font-semibold">universal, encrypted, one-time delivery system</span> for digital assets. 0xLink evolves Øxfile from a file-sharing tool into a comprehensive secure delivery protocol with advanced lifecycle management, API access, and integration capabilities.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-primary" />
                            Key Features
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { title: 'One-time access links (burn after open)', desc: 'Links self-destruct immediately after being accessed once. Perfect for sensitive data.' },
                              { title: 'Time-based & rule-based expiry', desc: 'Set expiration by time, access count, or custom rules. Maximum flexibility.' },
                              { title: 'Delivery state lifecycle management', desc: 'Track delivery status: CREATED → SENT → OPENED → DESTROYED with full audit trail.' },
                              { title: 'Lightweight API & SDK', desc: 'Easy integration into apps, websites, and workflows. RESTful API with comprehensive SDKs.' }
                            ].map((feature, idx) => (
                              <div key={idx} className="glass-card p-4 rounded-lg hover:border-purple-primary/50 transition-all">
                                <div className="flex items-start gap-3 mb-2">
                                  <ChevronRight className="w-5 h-5 text-purple-primary/70 mt-0.5 flex-shrink-0" />
                                  <span className="text-white font-semibold text-sm">{feature.title}</span>
                                </div>
                                <p className="text-gray-light text-xs ml-8">{feature.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-primary" />
                            Use Cases
                          </h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            {['Password reset tokens', 'Secure downloads', 'API key distribution', 'Contract signing links', 'Time-sensitive offers', 'Invitation-only content'].map((useCase, idx) => (
                              <div key={idx} className="glass-card p-3 rounded-lg text-sm text-gray-light hover:text-purple-light transition-colors">
                                • {useCase}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-purple-primary" />
                            Impact
                          </h4>
                          <div className="glass-card p-4 rounded-lg border border-purple-primary/20">
                            <p className="text-gray-light text-sm leading-relaxed">
                              Transforms how businesses and developers handle secure content delivery. Makes it trivial to add military-grade security to any application. Reduces risk of data breaches from leaked links.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 - 0xAccess */}
                <div className="relative pl-0 md:pl-20 slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-8 w-5 h-5 bg-black border-2 border-purple-primary/70 rounded-full shadow-lg hidden md:block" />

                  <div className="glass-card rounded-2xl overflow-hidden border border-purple-primary/30 hover:border-purple-primary/60 transition-all group">
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-xl border-2 border-purple-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-primary/10 transition-all">
                            <Shield className="w-8 h-8 text-purple-light" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Phase 3</h2>
                            <h3 className="text-2xl font-bold text-purple-light mb-1">0xAccess</h3>
                            <p className="text-gray-light font-mono text-sm">Identity-Gated Sharing</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 glass-card px-5 py-3 rounded-lg">
                          <Calendar className="w-5 h-5 text-gray-light" />
                          <span className="text-gray-light font-bold text-sm">Q3 2026</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-purple-primary" />
                            Overview
                          </h4>
                          <p className="text-gray-light text-lg leading-relaxed">
                            <span className="text-white font-semibold">Controlled access without exposing personal identity</span>. 0xAccess introduces Web3-native identity verification, allowing you to gate content based on wallet ownership, token holdings, or DIDs while maintaining complete privacy.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-primary" />
                            Key Features
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { title: 'Wallet signature–based access', desc: 'Prove ownership without revealing personal data. Sign with your wallet to access.' },
                              { title: 'DID-compatible identity gating', desc: 'Support for Decentralized Identifiers. Future-proof identity verification.' },
                              { title: 'Anti-replay & anti-bot protection', desc: 'Cryptographic challenges prevent automated attacks and signature reuse.' },
                              { title: 'Optional on-chain proof of access', desc: 'Record access events on-chain for audit trails (hash only, no content).' }
                            ].map((feature, idx) => (
                              <div key={idx} className="glass-card p-4 rounded-lg hover:border-purple-primary/50 transition-all">
                                <div className="flex items-start gap-3 mb-2">
                                  <ChevronRight className="w-5 h-5 text-purple-primary/70 mt-0.5 flex-shrink-0" />
                                  <span className="text-white font-semibold text-sm">{feature.title}</span>
                                </div>
                                <p className="text-gray-light text-xs ml-8">{feature.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-primary" />
                            Use Cases
                          </h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            {['NFT holder exclusives', 'Token-gated communities', 'DAO member content', 'Whitelist-only drops', 'Verified user access', 'Web3 authentication'].map((useCase, idx) => (
                              <div key={idx} className="glass-card p-3 rounded-lg text-sm text-gray-light hover:text-purple-light transition-colors">
                                • {useCase}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-purple-primary" />
                            Impact
                          </h4>
                          <div className="glass-card p-4 rounded-lg border border-purple-primary/20">
                            <p className="text-gray-light text-sm leading-relaxed">
                              Enables true Web3-native access control. Communities can gate content without collecting personal information. Combines the security of blockchain with the privacy of zero-knowledge systems.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 4 - 0xVault */}
                <div className="relative pl-0 md:pl-20 slide-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-8 w-5 h-5 bg-black border-2 border-purple-primary/70 rounded-full shadow-lg hidden md:block" />

                  <div className="glass-card rounded-2xl overflow-hidden border border-purple-primary/30 hover:border-purple-primary/60 transition-all group">
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-xl border-2 border-purple-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-primary/10 transition-all">
                            <Database className="w-8 h-8 text-purple-light" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Phase 4</h2>
                            <h3 className="text-2xl font-bold text-purple-light mb-1">0xVault</h3>
                            <p className="text-gray-light font-mono text-sm">Ephemeral Storage Layer</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 glass-card px-5 py-3 rounded-lg">
                          <Calendar className="w-5 h-5 text-gray-light" />
                          <span className="text-gray-light font-bold text-sm">Q4 2026</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-purple-primary" />
                            Overview
                          </h4>
                          <p className="text-gray-light text-lg leading-relaxed">
                            A secure, <span className="text-white font-semibold">encrypted storage layer designed for temporary data</span>, not permanent hoarding. 0xVault is built on the principle that not all data should live forever. It provides distributed, ephemeral storage with built-in expiration.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-primary" />
                            Key Features
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { title: 'Encrypted blob storage', desc: 'Store any type of encrypted data with automatic key management and rotation.' },
                              { title: 'Expiry-based persistence', desc: 'Data automatically deleted after expiration. No manual cleanup needed.' },
                              { title: 'Multi-node ephemeral architecture', desc: 'Distributed across multiple nodes for redundancy while maintaining ephemerality.' },
                              { title: 'Optional decentralized backends', desc: 'Support for IPFS, Arweave, and other decentralized storage for increased resilience.' }
                            ].map((feature, idx) => (
                              <div key={idx} className="glass-card p-4 rounded-lg hover:border-purple-primary/50 transition-all">
                                <div className="flex items-start gap-3 mb-2">
                                  <ChevronRight className="w-5 h-5 text-purple-primary/70 mt-0.5 flex-shrink-0" />
                                  <span className="text-white font-semibold text-sm">{feature.title}</span>
                                </div>
                                <p className="text-gray-light text-xs ml-8">{feature.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-primary" />
                            Use Cases
                          </h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            {['Session data storage', 'Temporary file hosting', 'Cache with expiration', 'Short-term backups', 'Collaborative work files', 'Staging environments'].map((useCase, idx) => (
                              <div key={idx} className="glass-card p-3 rounded-lg text-sm text-gray-light hover:text-purple-light transition-colors">
                                • {useCase}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-purple-primary" />
                            Impact
                          </h4>
                          <div className="glass-card p-4 rounded-lg border border-purple-primary/20">
                            <p className="text-gray-light text-sm leading-relaxed">
                              Reduces data hoarding and minimizes attack surface. Compliance-friendly storage that automatically enforces data retention policies. Perfect for GDPR and data minimization requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 5 - 0xSDK */}
                <div className="relative pl-0 md:pl-20 slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-8 w-5 h-5 bg-black border-2 border-purple-primary/70 rounded-full shadow-lg hidden md:block" />

                  <div className="glass-card rounded-2xl overflow-hidden border border-purple-primary/30 hover:border-purple-primary/60 transition-all group">
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-xl border-2 border-purple-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-primary/10 transition-all">
                            <Code2 className="w-8 h-8 text-purple-light" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Phase 5</h2>
                            <h3 className="text-2xl font-bold text-purple-light mb-1">0xSDK</h3>
                            <p className="text-gray-light font-mono text-sm">Builder Ecosystem</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 glass-card px-5 py-3 rounded-lg border border-purple-light/30">
                          <div className="w-2 h-2 bg-purple-light rounded-full animate-pulse" />
                          <span className="text-purple-light font-bold text-sm">ONGOING</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-purple-primary" />
                            Overview
                          </h4>
                          <p className="text-gray-light text-lg leading-relaxed">
                            A <span className="text-white font-semibold">unified toolkit for developers</span> to build privacy-first apps. 0xSDK packages all Øx products into easy-to-use libraries, frameworks, and tools. Comprehensive documentation, examples, and community support make integration seamless.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-primary" />
                            Key Features
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { title: 'Unified SDK for all 0x products', desc: 'One SDK to rule them all. Single import for File, Link, Ticket, Access, and Vault.' },
                              { title: 'Webhooks & event callbacks', desc: 'Real-time notifications for file access, link clicks, ticket scans, and more.' },
                              { title: 'Example templates & plugins', desc: 'Ready-to-use templates for React, Vue, Next.js, WordPress, and more.' },
                              { title: 'Open integration support', desc: 'Well-documented APIs, extensive guides, and active developer community.' }
                            ].map((feature, idx) => (
                              <div key={idx} className="glass-card p-4 rounded-lg hover:border-purple-primary/50 transition-all">
                                <div className="flex items-start gap-3 mb-2">
                                  <ChevronRight className="w-5 h-5 text-purple-primary/70 mt-0.5 flex-shrink-0" />
                                  <span className="text-white font-semibold text-sm">{feature.title}</span>
                                </div>
                                <p className="text-gray-light text-xs ml-8">{feature.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-primary" />
                            Target Developers
                          </h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            {['Web3 dApp builders', 'SaaS platforms', 'Enterprise systems', 'Event organizers', 'Content creators', 'Privacy-focused apps'].map((target, idx) => (
                              <div key={idx} className="glass-card p-3 rounded-lg text-sm text-gray-light hover:text-purple-light transition-colors">
                                • {target}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-purple-primary" />
                            Impact
                          </h4>
                          <div className="glass-card p-4 rounded-lg border border-purple-primary/20">
                            <p className="text-gray-light text-sm leading-relaxed">
                              Democratizes access to enterprise-grade privacy infrastructure. Enables millions of developers to build privacy-first applications without deep cryptography knowledge. Creates a thriving ecosystem of privacy-respecting products.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ecosystem Vision */}
            <div className="mt-24 fade-in" style={{ animationDelay: '0.7s', opacity: 0 }}>
              <div className="glass-card rounded-2xl overflow-hidden border border-purple-primary/50">
                <div className="bg-gradient-to-br from-purple-primary/20 via-purple-dark/10 to-black p-10 md:p-12">
                  <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 gradient-text">Øx Ecosystem Vision</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                      <p className="text-gray-light text-lg leading-relaxed">
                        All Øx products follow the same core principles:
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3 text-lg">
                        <span className="glass-card px-4 py-2 rounded-lg border border-purple-primary/30">
                          <span className="text-purple-light font-bold">Encrypt first</span>
                        </span>
                        <span className="text-purple-primary">•</span>
                        <span className="glass-card px-4 py-2 rounded-lg border border-purple-primary/30">
                          <span className="text-purple-light font-bold">Access once</span>
                        </span>
                        <span className="text-purple-primary">•</span>
                        <span className="glass-card px-4 py-2 rounded-lg border border-purple-primary/30">
                          <span className="text-purple-light font-bold">Store nothing</span>
                        </span>
                        <span className="text-purple-primary">•</span>
                        <span className="glass-card px-4 py-2 rounded-lg border border-purple-primary/30">
                          <span className="text-purple-light font-bold">Trust minimized</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                      { icon: Rocket, name: '0xFile', desc: 'Core Layer', color: 'text-purple-primary' },
                      { icon: Ticket, name: '0xTicket', desc: 'Ticketing', color: 'text-purple-light' },
                      { icon: Link2, name: '0xLink', desc: 'Delivery', color: 'text-purple-light' },
                      { icon: Shield, name: '0xAccess', desc: 'Identity', color: 'text-purple-light' },
                      { icon: Database, name: '0xVault', desc: 'Storage', color: 'text-purple-light' },
                      { icon: Code2, name: '0xSDK', desc: 'Tools', color: 'text-purple-light' }
                    ].map((product, idx) => {
                      const Icon = product.icon
                      return (
                        <div key={idx} className="glass-card p-6 text-center rounded-xl hover:border-purple-primary/50 hover:bg-purple-primary/5 transition-all group">
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-lg border border-purple-primary/30 flex items-center justify-center group-hover:bg-purple-primary/10 transition-all`}>
                            <Icon className={`w-6 h-6 ${product.color}`} />
                          </div>
                          <p className="text-sm font-mono font-bold text-white mb-1">{product.name}</p>
                          <p className="text-xs text-gray-light">{product.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="mt-16 text-center fade-in" style={{ animationDelay: '0.8s', opacity: 0 }}>
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-10 py-4 glass-card text-purple-light font-mono border border-purple-primary/30 hover:border-purple-primary hover:bg-purple-primary/5 transition-all duration-300 rounded-xl group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold">Back to Home</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
