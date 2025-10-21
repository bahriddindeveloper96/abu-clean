# Tezkor Yangilash Qo'llanmasi

## ✅ To'liq Yangilangan Komponentlar
1. ✅ **Navbar.vue** - Til almashtirgich bilan
2. ✅ **Footer.vue** - Barcha matnlar
3. ✅ **Hero.vue** - Asosiy bo'lim
4. ✅ **Features.vue** - Xususiyatlar bo'limi

## 📝 Qolgan Komponentlar Uchun Tezkor Yangilash

### Services.vue
```vue
<!-- O'zgartirish kerak bo'lgan qatorlar: -->

<!-- 10-qator -->
{{ $t('services.title') }}

<!-- 12-17-qatorlar -->
<h2 class="section-title">
  {{ $t('services.title') }}
</h2>

<!-- 18-20-qatorlar -->
<p class="section-subtitle mt-4">
  {{ $t('services.subtitle') }}
</p>

<!-- 48-qator -->
{{ $t(service.titleKey) }}

<!-- 51-qator -->
{{ $t(service.descKey) }}

<!-- 76-qator -->
<span>{{ $t('common.bookNow') }}</span>

<!-- Script qismida services array ni yangilash: -->
const services = [
  {
    titleKey: 'services.items.carpet.title',
    descKey: 'services.items.carpet.description',
    // ... qolgan qismlar
  }
]
```

### Process.vue
```vue
<!-- Yangilash kerak: -->
{{ $t('process.title') }}
{{ $t('process.subtitle') }}
{{ $t(step.titleKey) }}
{{ $t(step.descKey) }}

<!-- Script: -->
const steps = [
  {
    titleKey: 'process.steps.contact.title',
    descKey: 'process.steps.contact.description',
    // ...
  }
]
```

### Gallery.vue
```vue
<!-- Yangilash kerak: -->
{{ $t('gallery.title') }}
{{ $t('gallery.subtitle') }}
{{ $t('gallery.before') }}
{{ $t('gallery.after') }}
```

### FAQ.vue
```vue
<!-- Yangilash kerak: -->
{{ $t('faq.title') }}
{{ $t('faq.subtitle') }}
{{ $t(faq.questionKey) }}
{{ $t(faq.answerKey) }}

<!-- Script: -->
const faqs = [
  {
    questionKey: 'faq.items.q1.question',
    answerKey: 'faq.items.q1.answer',
    // ...
  }
]
```

### Contact.vue
```vue
<!-- Yangilash kerak: -->
{{ $t('contact.title') }}
{{ $t('contact.subtitle') }}
:placeholder="$t('contact.form.name')"
:placeholder="$t('contact.form.phone')"
:placeholder="$t('contact.form.message')"
{{ $t('contact.form.send') }}
{{ $t('contact.info.phone') }}
{{ $t('contact.info.email') }}
{{ $t('contact.info.address') }}
```

## 🚀 Umumiy Pattern

### 1. Oddiy matn
```vue
<!-- Eski -->
<h1>Sarlavha</h1>

<!-- Yangi -->
<h1>{{ $t('key.path') }}</h1>
```

### 2. Placeholder
```vue
<!-- Eski -->
<input placeholder="Ismingiz">

<!-- Yangi -->
<input :placeholder="$t('form.name')">
```

### 3. Array ichidagi matnlar
```vue
<!-- Eski -->
const items = [
  { title: 'Sarlavha', desc: 'Tavsif' }
]

<!-- Yangi -->
const items = [
  { titleKey: 'key.title', descKey: 'key.desc' }
]

<!-- Template -->
<h3>{{ $t(item.titleKey) }}</h3>
<p>{{ $t(item.descKey) }}</p>
```

## ⚡ Tezkor Amallar

1. Faylni oching
2. Ctrl+F bilan qidiring: hardcoded o'zbek matnlarni
3. `{{ $t('...') }}` bilan almashtiring
4. Script qismida key larni yangilang
5. Saqlang va tekshiring

## 🎯 Barcha Tarjimalar Tayyor!

Barcha tarjimalar allaqachon JSON faylda mavjud:
- `src/i18n/locales/uz.json`
- `src/i18n/locales/en.json`
- `src/i18n/locales/ru.json`

Faqat komponentlarda `$t()` dan foydalanish kerak!
