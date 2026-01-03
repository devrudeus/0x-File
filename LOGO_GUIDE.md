# Øxfile - Logo Implementation Guide

## 📍 Current Logo Location

Logo sudah ditambahkan di **Navigation Bar** (fixed top, file: `app/page.tsx` line 26-33)

---

## 🎨 Current Logo Design

**Komponen:**
- Logo: SVG file (Logo.svg) dengan filter invert
- Text: "ØXFILE"
- Style: Monochrome, putih di background hitam

**Kode saat ini:**
```tsx
<div className="relative w-full max-w-2xl px-4 float">
  <Image
    src="/logo.svg"
    alt="Øxfile"
    width={800}
    height={400}
    className="w-full h-auto brightness-0 invert"
    style={{ filter: 'brightness(0) invert(1)' }}
    priority
  />
</div>
```

---

## 🔧 Cara Mengganti Logo

### Opsi 1: Ganti dengan Logo Image (SVG/PNG)

1. **Simpan file logo** di folder `public/`:
   ```
   public/
   └── logo.svg  (atau logo.png)
   ```

2. **Update kode di `app/page.tsx`** (line 99-111):
   ```tsx
   import Image from 'next/image'

   // Ganti bagian logo dengan:
   <div className="relative w-full max-w-2xl px-4 float">
     <Image
       src="/logo.svg"
       alt="Øxfile"
       width={800}
       height={400}
       className="w-full h-auto brightness-0 invert"
       style={{ filter: 'brightness(0) invert(1)' }}
       priority
     />
   </div>
   ```

### Opsi 2: Ganti Text Logo Only

Hanya text:
```tsx
<div className="flex items-center gap-3 cursor-pointer">
  <span className="font-black text-2xl tracking-wider border border-white px-3 py-2">
    [ØX]
  </span>
  <span className="font-bold text-xl tracking-wider">
    ØXFILE
  </span>
</div>
```

### Opsi 3: Logo ASCII Art (Terminal Style)

```tsx
<pre className="font-mono text-xs leading-tight">
{`Ø█▀▄▀█
█▄█ ▀ █`}
</pre>
<span className="ml-2 font-bold">ØXFILE</span>
```

---

## 📐 Customize Logo Position

### Pindah ke Center (Hero Section)

Logo sudah di center pada hero section saat ini (line 99-111):

```tsx
{/* Hero Section */}
<section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
  <div className="max-w-7xl w-full mx-auto">

    {/* Logo di Center */}
    <div className="flex justify-center mb-16 w-full scale-in">
      <div className="relative w-full max-w-2xl px-4 float">
        <Image
          src="/logo.svg"
          alt="Øxfile"
          width={800}
          height={400}
          className="w-full h-auto brightness-0 invert"
          style={{ filter: 'brightness(0) invert(1)' }}
          priority
        />
      </div>
    </div>
      ...
```

### Tambahkan di Footer

Edit bagian footer, tambahkan logo:

```tsx
<footer className="relative border-t border-white py-12 px-4">
  {/* Logo di Footer */}
  <div className="text-center mb-6">
    <Image
      src="/logo.svg"
      alt="Øxfile"
      width={200}
      height={100}
      className="mx-auto mb-2 brightness-0 invert"
    />
    <p className="font-bold">ØXFILE</p>
  </div>

  <div className="max-w-7xl mx-auto">
    ...
```

---

## 🎯 Quick Links

- Logo saat ini: `app/page.tsx` line 99-111
- Hero section: `app/page.tsx` line 96+
- Footer: `app/page.tsx` line 326+

---

## 💡 Tips

1. **Untuk logo SVG**: Gunakan `className="invert"` agar logo hitam jadi putih
2. **Untuk logo PNG**: Pastikan background transparent, warna putih
3. **Ukuran optimal**: 40x40px untuk navbar, 60x60px untuk hero
4. **Format terbaik**: SVG (scalable, tetap tajam di semua ukuran)

---

## 📱 Test Responsiveness

Setelah ganti logo, test di:
- Desktop (1920px+)
- Tablet (768px)
- Mobile (375px)

Logo otomatis responsive karena menggunakan Tailwind CSS.
