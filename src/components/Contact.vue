<template>
  <section id="contact" class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slide-up">
        <span class="inline-block px-4 py-2 bg-white text-primary-600 rounded-full text-sm font-semibold mb-4 shadow-md">
          {{ $t('nav.contact') }}
        </span>
        <h2 class="section-title">
          {{ $t('contact.title') }}
        </h2>
        <p class="section-subtitle mt-4">
          {{ $t('contact.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Form -->
        <div class="animate-slide-up">
          <div class="card p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-6">{{ $t('contact.form.send') }}</h3>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.name') }}
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300"
                  :placeholder="$t('contact.form.name')"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.phone') }}
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300"
                  :placeholder="$t('contact.form.phone')"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.service') }}
                </label>
                <select
                  v-model="form.service"
                  required
                  class="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300"
                >
                  <option value="">{{ $t('contact.form.service') }}</option>
                  <option value="carpet">{{ $t('services.items.carpet.title') }}</option>
                  <option value="furniture">{{ $t('services.items.furniture.title') }}</option>
                  <option value="curtain">{{ $t('services.items.curtain.title') }}</option>
                  <option value="blanket">{{ $t('services.items.mattress.title') }}</option>
                  <option value="house">{{ $t('services.items.home.title') }}</option>
                  <option value="paving">{{ $t('services.items.floor.title') }}</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.message') }}
                </label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  class="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 resize-none"
                  :placeholder="$t('contact.form.message')"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm md:text-base font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span class="flex items-center justify-center space-x-2">
                  <span>{{ $t('contact.form.send') }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6 animate-slide-up" style="animation-delay: 0.2s;">
          <!-- Contact Cards -->
          <div 
            v-for="(contact, index) in contacts" 
            :key="index"
            class="card p-4 md:p-6 group cursor-pointer"
          >
            <div class="flex items-start space-x-4">
              <div 
                :class="[
                  'flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300',
                  contact.color
                ]"
              >
                <div v-html="contact.icon" class="w-7 h-7 text-white"></div>
              </div>
              <div class="flex-1">
                <h4 class="text-base md:text-lg font-bold text-gray-900 mb-2">{{ $t(contact.titleKey) }}</h4>
                <p class="text-sm md:text-base text-gray-600 mb-2">{{ $t(contact.descKey) }}</p>
                <a 
                  :href="contact.link" 
                  class="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center space-x-1"
                >
                  <span>{{ contact.value }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Map Card -->
            <div class="card p-4 md:p-6">
              <h4 class="text-base md:text-lg font-bold text-gray-900 mb-4">{{ $t('footer.address') }}</h4>
              
              <div class="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-4">
                <!-- Yandex Map iframe -->
                <iframe 
                  src="https://yandex.uz/map-widget/v1/?ll=69.2775%2C41.3113&z=13&source=constructor" 
                  width="100%" 
                  height="100%" 
                  frameborder="0" 
                  allowfullscreen 
                  class="rounded-xl"
                ></iframe>
              </div>

              <p class="text-sm md:text-base text-gray-600">
                Toshkent, Yunusobod tumani
              </p>
            </div>



          <!-- Social Media -->
          <div class="card p-4 md:p-6">
            <h4 class="text-base md:text-lg font-bold text-gray-900 mb-4">{{ $t('footer.contactInfo') }}</h4>
            <div class="flex space-x-4">
              <a 
                v-for="(social, index) in socials" 
                :key="index"
                :href="social.link"
                :class="[
                  'w-12 h-12 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300',
                  social.color
                ]"
              >
                <div v-html="social.icon" class="w-6 h-6 text-white"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  service: '',
  message: ''
})

const handleSubmit = () => {
  alert('Xabaringiz yuborildi! Tez orada siz bilan bog\'lanamiz.')
  // Reset form
  form.name = ''
  form.phone = ''
  form.service = ''
  form.message = ''
}

const contacts = [
  {
    titleKey: 'footer.phone',
    descKey: 'contact.info.workingHours',
    value: '+998 90 076 19 96',
    link: 'tel:+998900761996',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
    color: 'bg-gradient-to-br from-blue-500 to-blue-700'
  },
  {
    titleKey: 'footer.instagram',
    descKey: 'contact.subtitle',
    value: '@abu_chiska.uz',
    link: 'https://www.instagram.com/abuchiska.uz',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    color: 'bg-gradient-to-br from-purple-500 to-purple-700'
  },
  {
    titleKey: 'footer.telegram',
    descKey: 'contact.subtitle',
    value: '@abu_chiska',
    link: 'https://t.me/+998900761996',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>',
    color: 'bg-gradient-to-br from-cyan-500 to-cyan-700'
  }
]

const socials = [
  {
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    link: 'https://www.instagram.com/abuchiska.uz',
    color: 'bg-gradient-to-br from-blue-600 to-blue-800'
  },
  {
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    link: 'https://www.instagram.com/abuchiska.uz',
    color: 'bg-gradient-to-br from-pink-600 to-purple-700'
  },
  {
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>',
    link: 'https://t.me/+998900761996',
    color: 'bg-gradient-to-br from-cyan-500 to-blue-600'
  },
  {
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>',
    link: '#',
    color: 'bg-gradient-to-br from-gray-800 to-gray-900'
  }
]
</script>
