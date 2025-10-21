# Multilingual Implementation Guide

## ✅ Completed Components

1. **Navbar.vue** - Fully translated with language switcher
2. **Footer.vue** - All text translated
3. **Hero.vue** - Main hero section translated

## 📋 Components to Update

### Features.vue
Replace hardcoded text with:
- `$t('features.title')`
- `$t('features.subtitle')`
- `$t('features.items.professional.title')` etc.

### Services.vue
Replace hardcoded text with:
- `$t('services.title')`
- `$t('services.subtitle')`
- `$t('services.items.carpet.title')` etc.

### Process.vue
Replace hardcoded text with:
- `$t('process.title')`
- `$t('process.subtitle')`
- `$t('process.steps.contact.title')` etc.

### Gallery.vue
Replace hardcoded text with:
- `$t('gallery.title')`
- `$t('gallery.subtitle')`
- `$t('gallery.before')`
- `$t('gallery.after')`

### FAQ.vue
Replace hardcoded text with:
- `$t('faq.title')`
- `$t('faq.subtitle')`
- `$t('faq.items.q1.question')` etc.

### Contact.vue
Replace hardcoded text with:
- `$t('contact.title')`
- `$t('contact.subtitle')`
- `$t('contact.form.name')` etc.

## 🔧 How to Use Translations

### In Template:
```vue
<h1>{{ $t('hero.title') }}</h1>
```

### In Script (Composition API):
```javascript
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const title = t('hero.title')
```

## 🌐 Language Switcher

The `LanguageSwitcher.vue` component is already created and integrated into the Navbar.
It supports:
- 🇺🇿 Uzbek (uz)
- 🇬🇧 English (en)
- 🇷🇺 Russian (ru)

Language preference is saved in localStorage and persists across sessions.

## 📁 Translation Files Location

All translations are in: `src/i18n/locales/`
- `uz.json` - Uzbek translations
- `en.json` - English translations
- `ru.json` - Russian translations

## 🎯 Quick Update Pattern

For any component, follow this pattern:

1. Find hardcoded text
2. Replace with `$t('key.path')`
3. Ensure the key exists in all three translation files

Example:
```vue
<!-- Before -->
<h1>Bizning Xizmatlarimiz</h1>

<!-- After -->
<h1>{{ $t('services.title') }}</h1>
```
