// Quick Reference Script for Updating Components with i18n
// This file serves as a reference for manual updates

const componentUpdates = {
  'Features.vue': {
    replacements: [
      { find: 'Nega Bizni Tanlash Kerak?', replace: "{{ $t('features.title') }}" },
      { find: 'Sizning Ishonchli', replace: "{{ $t('features.subtitle') }}" },
      { find: 'Tozalash Hamkoringiz', replace: '' },
      { find: 'Biz Bilan Bog\'laning', replace: "{{ $t('common.contactUs') }}" }
    ],
    dataUpdates: `
// Update features array to use translation keys:
const features = [
  {
    title: computed(() => t('features.items.professional.title')),
    description: computed(() => t('features.items.professional.description')),
    ...
  }
]
// Or in template: {{ $t('features.items.professional.title') }}
    `
  },
  
  'Services.vue': {
    note: 'Replace all service titles and descriptions with $t() calls',
    example: "{{ $t('services.items.carpet.title') }}"
  },
  
  'Process.vue': {
    note: 'Update step titles and descriptions',
    example: "{{ $t('process.steps.contact.title') }}"
  },
  
  'Gallery.vue': {
    replacements: [
      { find: 'Ishlarimiz Galereyasi', replace: "{{ $t('gallery.title') }}" },
      { find: 'Oldin', replace: "{{ $t('gallery.before') }}" },
      { find: 'Keyin', replace: "{{ $t('gallery.after') }}" }
    ]
  },
  
  'FAQ.vue': {
    note: 'Update all questions and answers',
    example: "{{ $t('faq.items.q1.question') }}"
  },
  
  'Contact.vue': {
    note: 'Update form labels and placeholders',
    example: ":placeholder=\"$t('contact.form.name')\""
  }
}

console.log('Component Update Reference Generated')
console.log('Use this as a guide for manual updates')
