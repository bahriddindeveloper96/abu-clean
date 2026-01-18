<template>
  <section id="contact" class="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slide-up">
        <span class="inline-block px-4 py-2 bg-white text-primary-600 rounded-full text-sm font-semibold mb-4 shadow-md">
          {{ $t('nav.contact') }}
        </span>
        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <p class="section-subtitle mt-4">{{ $t('contact.subtitle') }}</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Form -->
        <div class="animate-slide-up">
          <div class="card p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-6">{{ $t('contact.form.send') }}</h3>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('contact.form.name') }}</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300"
                  :placeholder="$t('contact.form.name')"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('contact.form.phone') }}</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300"
                  :placeholder="$t('contact.form.phone')"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('contact.form.service') }}</label>
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
                <label class="block text-sm font-semibold text-gray-700 mb-2">{{ $t('contact.form.message') }}</label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  class="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 resize-none"
                  :placeholder="$t('contact.form.message')"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm md:text-base font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span class="flex items-center justify-center space-x-2">
                  <span>{{ isSubmitting ? 'Yuborilmoqda...' : $t('contact.form.send') }}</span>
                  <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              </button>

              <!-- Success & Error -->
              <div v-if="showSuccess" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                So‘rov muvaffaqiyatli yuborildi!
              </div>
              <div v-if="showError" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Xatolik yuz berdi, iltimos qayta urinib ko‘ring.
              </div>
            </form>
          </div>
        </div>

        <!-- Contact Info & Map -->
        <div class="space-y-6 animate-slide-up" style="animation-delay: 0.2s;">
          <div v-for="(contact, index) in contacts" :key="index" class="card p-4 md:p-6 group cursor-pointer">
            <div class="flex items-start space-x-4">
              <div :class="['flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300', contact.color]">
                <div v-html="contact.icon" class="w-7 h-7 text-white"></div>
              </div>
              <div class="flex-1">
                <h4 class="text-base md:text-lg font-bold text-gray-900 mb-2">{{ $t(contact.titleKey) }}</h4>
                <p class="text-sm md:text-base text-gray-600 mb-2">{{ $t(contact.descKey) }}</p>
                <a :href="contact.link" class="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center space-x-1">
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
              <iframe 
                src="https://yandex.uz/map-widget/v1/?ll=69.2775%2C41.3113&z=13&source=constructor" 
                width="100%" height="100%" frameborder="0" allowfullscreen class="rounded-xl">
              </iframe>
            </div>
            <p class="text-sm md:text-base text-gray-600">Toshkent, Yunusobod tumani</p>
          </div>

          <!-- Social Media -->
          <div class="card p-4 md:p-6">
            <h4 class="text-base md:text-lg font-bold text-gray-900 mb-4">{{ $t('footer.contactInfo') }}</h4>
            <div class="flex space-x-4">
              <a v-for="(social, index) in socials" :key="index" :href="social.link" :class="['w-12 h-12 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300', social.color]">
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
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const handleSubmit = async () => {
  if (!form.name || !form.phone || !form.service) return
  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false

  try {
    const response = await fetch('https://abuchiska.uz/api/send-telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        service: form.service,
        message: form.message
      })
    })
    const result = await response.json()
    if (response.ok && result.message === 'Sent successfully') {
      showSuccess.value = true
      // reset form
      form.name = ''
      form.phone = ''
      form.service = ''
      form.message = ''
    } else {
      showError.value = true
      console.error(result)
    }
  } catch (error) {
    showError.value = true
    console.error(error)
  } finally {
    isSubmitting.value = false
  }
}

const contacts = [
  { titleKey: 'footer.phone', descKey: 'contact.info.workingHours', value: '+998 90 076 19 96', link: 'tel:+998900761996', icon: '<svg ...></svg>', color: 'bg-gradient-to-br from-blue-500 to-blue-700' },
  { titleKey: 'footer.instagram', descKey: 'contact.subtitle', value: '@abu_chiska.uz', link: 'https://www.instagram.com/abuchiska.uz', icon: '<svg ...></svg>', color: 'bg-gradient-to-br from-purple-500 to-purple-700' },
  { titleKey: 'footer.telegram', descKey: 'contact.subtitle', value: '@abu_chiska', link: 'https://t.me/+998900761996', icon: '<svg ...></svg>', color: 'bg-gradient-to-br from-cyan-500 to-cyan-700' }
]

const socials = [
  { icon: '<svg ...></svg>', link: 'https://www.instagram.com/abuchiska.uz', color: 'bg-gradient-to-br from-blue-600 to-blue-800' },
  { icon: '<svg ...></svg>', link: 'https://t.me/+998900761996', color: 'bg-gradient-to-br from-cyan-500 to-blue-600' }
]
</script>
