<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b',
      isScrolled ? 'shadow-sm py-4' : 'border-transparent py-6'
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center space-x-3 group">
          <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <img 
              src="/src/assets/logo.jpg" 
              alt="Abu Clean Logo" 
              class="w-full h-full object-cover"
            />
          </div>
          <span class="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
            Abu Clean
          </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a 
            v-for="item in menuItems" 
            :key="item.key"
            :href="item.href" 
            class="text-sm xl:text-base font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            {{ $t(item.key) }}
          </a>
        </div>

        <!-- Phone & CTA -->
        <div class="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          <a 
            href="tel:+998972021996" 
            class="flex items-center space-x-2 text-sm xl:text-base font-semibold text-primary-600 transition-colors duration-300"
          >
            <svg class="w-4 h-4 xl:w-5 xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+998 97 202 19 96</span>
          </a>
          <button @click="$emit('open-modal')" class="px-6 xl:px-8 py-3 xl:py-4 bg-primary-600 text-white text-sm xl:text-base font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300">
            {{ $t('nav.getQuote') }}
          </button>
        </div>

        <!-- Mobile: Language Switcher & Menu Button -->
        <div class="flex lg:hidden items-center space-x-3">
          <LanguageSwitcher />
          <button 
            @click="$emit('toggle-menu')"
            class="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-xl">
          <a 
            v-for="item in menuItems" 
            :key="item.key"
            :href="item.href" 
            class="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
          >
            {{ $t(item.key) }}
          </a>
          <div class="px-6 py-3 space-y-3 mt-2">
            <a href="tel:+998972021996" class="flex items-center space-x-2 text-primary-600 font-semibold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+998 97 202 19 96</span>
            </a>
            <button @click="$emit('open-modal')" class="btn-primary w-full">
              {{ $t('nav.getQuote') }}
            </button>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue'

defineProps({
  isScrolled: Boolean,
  isMobileMenuOpen: Boolean
})

defineEmits(['toggle-menu', 'open-modal'])

const menuItems = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.process', href: '#process' },
  { key: 'nav.contact', href: '#contact' }
]
</script>
