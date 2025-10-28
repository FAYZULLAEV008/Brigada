# BRIGADA Restoran Sayti

BRIGADA - O'zbekistonning an'anaviy oshxonasini taqdim etuvchi zamonaviy restoran sayti.

## Loyiha haqida

Bu vanilla HTML, CSS va JavaScript yordamida qurilgan zamonaviy restoran veb-sayti. Sayt to'liq responsive bo'lib, barcha qurilmalarda yaxshi ishlaydi.

## Texnologiyalar

- **HTML5**: Semantic HTML markup
- **CSS3**: Modern styling, animations, transitions
- **JavaScript (Vanilla)**: Interactive functionality, no frameworks

## Loyiha Strukturasi

```
├── index.html       # Asosiy HTML fayl (barcha kontentni o'z ichiga oladi)
├── styles.css       # Barcha stillar va animatsiyalar
└── script.js        # JavaScript funksiyalari va interaktivlik
```

## Xususiyatlar

### 1. Hero Section (Asosiy sahifa)
- To'liq ekranli kirish sahifasi
- Fon rasmi bilan
- Animatsiyali gradient overlay
- CTA (Call-to-Action) tugmasi

### 2. Menu Section (Menyu)
- Grid layoutda taomlar ro'yxati (responsive)
- Har bir taom uchun:
  - Rasm
  - Nom va tavsif
  - Narx
  - Buyurtma tugmasi
- Hover effektlari
- Image zoom on hover

### 3. About Section (Biz haqimizda)
- Restoran tarixi va missiyasi
- Professional oshpazlar, tez xizmat, sifat kafolati haqida
- SVG ikonkalar bilan vizual taqdimot
- Features cards

### 4. Contact Section (Aloqa)
- Manzil
- Telefon raqamlar
- Ish vaqti
- Stol band qilish tugmasi
- SVG ikonkalar

### 5. Responsive Design
- Desktop (1024px+): 3 ustunli grid
- Tablet (768px - 1024px): 2 ustunli grid
- Mobile (< 768px): 1 ustunli grid
- Hamburger menyu mobil qurilmalar uchun

### 6. Animatsiyalar va Interaktivlik
- Smooth scroll navigatsiya
- Gradient background animation (15s loop)
- Fade-in animatsiyalar (Intersection Observer API)
- Hover effektlari
- Scale transformatsiyalar
- Mobile menu toggle
- Header scroll effect

## Dizayn Tizimi

### Ranglar
- **Asosiy ranglar**: Qizil tonlari
  - `#dc2626` (red-600) - Asosiy qizil
  - `#ef4444` (red-500) - Ochroq qizil
  - `#b91c1c` (red-700) - To'q qizil
- **Fon ranglari**: Qora tonlar
  - `#000000` - Qora
  - `#09090b` (zinc-950) - Juda to'q kulrang
  - `#18181b` (zinc-900) - To'q kulrang
- **Matn ranglari**:
  - `#ffffff` - Oq
  - `#f3f4f6` (gray-100) - Och kulrang
  - `#d1d5db` (gray-300) - O'rtacha kulrang
  - `#9ca3af` (gray-400) - To'q kulrang

### Tipografiya
- **Sarlavhalar**: Bold, katta o'lchamlar (2.5rem, 3rem, 4.5rem)
- **Matnlar**: Regular, o'qish uchun qulay o'lchamlar (1.125rem)
- **Font**: System font stack (optimallashtirilgan)

### Animatsiyalar
- **Gradient Background**: 15 soniyali aylanma animatsiya
- **Fade In**: 1 soniyali fade-in effekti
- **Hover Transitions**: 0.3 soniyali smooth transitions
- **Image Zoom**: 0.3 soniyali scale(1.1)

## JavaScript Funksiyalari

### Mobile Menu
- Toggle functionality
- Hamburger animation
- Auto-close on link click

### Smooth Scroll
- Barcha navigatsiya linklar uchun
- `scrollToSection()` function
- Browser-native smooth scrolling

### Header Effects
- Scroll-based styling
- 50px dan keyin "scrolled" class qo'shiladi
- Background va shadow o'zgaradi

### Intersection Observer
- Lazy fade-in animations
- Menu items, feature cards, contact cards uchun
- Performance-optimized

### Alert Messages
- Order button: Buyurtma funksiyasi haqida xabar
- Reservation button: Stol band qilish haqida xabar

## Asset Management

Loyihada barcha rasmlar Youware CDN orqali yuklangan:
- Hero fon rasmi: `https://public.youware.com/.../0abb87d06f754803b3a8412cd01297f0.jpg`
- Taom rasmlari: `https://public.youware.com/.../8049410c7b1d456a9fc3560791cddc17.jpg`
- About rasmi: `https://public.youware.com/.../0d72588df31e4530a6a27839ab3ebdfc.jpg`

**Eslatma**: SVG ikonkalar inline HTML da, external dependencies yo'q.

## O'zbekcha Kontent

Saytdagi barcha matnlar o'zbek tilida:
- Navigatsiya menyusi
- Taom nomlari va tavsiflari
- Bo'limlar sarlavhalari
- Aloqa ma'lumotlari

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid support kerak
- Intersection Observer API support kerak
- ES6 JavaScript support kerak

## Performance

- No external dependencies
- Minimal HTTP requests
- Optimized images via CDN
- CSS animations (GPU-accelerated)
- Lazy loading animations

## Kelajakdagi Yaxshilanishlar

Quyidagi funksiyalarni qo'shish mumkin:
- Backend integration (buyurtma tizimi)
- Form validation
- Stol bron qilish funksiyasi
- Mijozlar sharhlari
- Galereya bo'limi
- Blog yoki yangiliklar
- Ko'p tillilik (Rus, Ingliz tillari)
- LocalStorage preferences

## Ishga tushirish

Saytni ishga tushirish uchun:
1. `index.html` faylini brauzerda oching
2. Yoki local server ishga tushiring:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server
   ```

**Eslatma**: CDN rasmlari uchun internet ulanishi kerak.

---

**Yaratilgan**: 2024
**Loyiha turi**: Restoran veb-sayti
**Texnologiya**: Vanilla HTML + CSS + JavaScript
