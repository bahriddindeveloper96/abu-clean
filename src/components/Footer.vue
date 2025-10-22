<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main Footer -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Company Info -->
        <div class="space-y-6">
          <div class="flex items-center space-x-2">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
              <img 
                src="/src/assets/logo.jpg" 
                alt="Abu Clean Logo" 
                class="w-full h-full object-cover"
              />
            </div>
            <span class="text-xl md:text-2xl font-bold">Abu Clean</span>
          </div>
          <p class="text-sm md:text-base text-gray-400 leading-relaxed">
            {{ $t('footer.description') }}
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="(social, index) in socials" 
              :key="index"
              :href="social.link"
              class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300"
            >
              <div v-html="social.icon" class="w-5 h-5"></div>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-base md:text-lg font-bold mb-4 md:mb-6">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in quickLinks" :key="index">
              <a 
                :href="link.href" 
                class="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
              >
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span>{{ $t(link.key) }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-base md:text-lg font-bold mb-4 md:mb-6">{{ $t('footer.services') }}</h3>
          <ul class="space-y-3">
            <li v-for="(service, index) in services" :key="index">
              <a 
                href="#services" 
                class="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
              >
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span>{{ $t(service) }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-base md:text-lg font-bold mb-4 md:mb-6">{{ $t('footer.contactInfo') }}</h3>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">{{ $t('footer.phone') }}</div>
                <a href="tel:+998972021996" class="text-white hover:text-primary-400 transition-colors">
                  +998 97 202 19 96
                </a>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">{{ $t('footer.email') }}</div>
                <a href="mailto:info@abu-clean.uz" class="text-white hover:text-primary-400 transition-colors">
                  info@abu-clean.uz
                </a>
              </div>
            </li>
            <li class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">{{ $t('footer.address') }}</div>
                <p class="text-white">{{ $t('footer.location') }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 text-xs md:text-sm text-center md:text-left">
            &copy; {{ currentYear }} Abu Clean. {{ $t('footer.rights') }}
          </p>
          <div class="flex items-center space-x-6">
            <a href="#" class="text-gray-400 hover:text-primary-400 text-xs md:text-sm transition-colors">
              {{ $t('footer.privacy') }}
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-400 text-xs md:text-sm transition-colors">
              {{ $t('footer.terms') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Contact Buttons -->
    <div class="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
      <!-- Telegram Button -->
      <a
        href="https://t.me/+998972021996"
        target="_blank"
        class="group relative w-16 h-16 bg-gradient-to-br from-[#0088cc] via-[#229ED9] to-[#54A9EB] hover:from-[#54A9EB] hover:via-[#229ED9] hover:to-[#0088cc] text-white rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-125 hover:rotate-[360deg] transition-all duration-700 animate-float"
        style="animation-delay: 0s;"
      >
        <!-- Ripple Effect -->
        <div class="absolute inset-0 rounded-3xl bg-[#0088cc] opacity-75 animate-ping"></div>
        
        <!-- Icon -->
        <svg class="w-8 h-8 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
        </svg>
        
        <!-- Glow Effect -->
        <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000"></div>
        
        <!-- Tooltip -->
        <span class="absolute right-full mr-4 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-gray-700">
          📱 {{ $t('footer.telegram') }}
          <span class="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></span>
        </span>
      </a>

      <!-- Phone Button -->
      <a
        href="tel:+998972021996"
        class="group relative w-16 h-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-600 hover:via-green-500 hover:to-green-400 text-white rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-125 hover:-rotate-[360deg] transition-all duration-700 animate-float"
        style="animation-delay: 0.3s;"
      >
        <!-- Ripple Effect -->
        <div class="absolute inset-0 rounded-3xl bg-green-500 opacity-75 animate-ping" style="animation-delay: 0.3s;"></div>
        
        <!-- Icon with Ring Animation -->
        <svg class="w-8 h-8 relative z-10 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        
        <!-- Glow Effect -->
        <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000"></div>
        
        <!-- Tooltip -->
        <span class="absolute right-full mr-4 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-gray-700">
          📞 {{ $t('footer.call') }}
          <span class="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></span>
        </span>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const socials = [
  {
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    link: 'https://www.instagram.com/gilam_yuvish_abu_clean'
  },
  {
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    link: 'https://www.instagram.com/gilam_yuvish_abu_clean'
  },
  {
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>',
    link: '#'
  },
  {
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M16.7 14.5c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0c-.3-.2-1.2-.5-2.2-1.7-.8-.9-1.3-1.9-1.5-2.2s0-.5.2-.7c.2-.2.5-.5.6-.7.2-.2.2-.4.3-.6s0-.3 0-.5-.7-1.8-1-2.5c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.3 2.2 3.4 5.2 4.8 2.5 1.1 3.5 1.2 4.7 1 1-.1 1.8-.8 2-1.5.2-.7.2-1.3.1-1.5 0-.3-.2-.4-.5-.6zM12 2a10 10 0 00-8.6 15l-1.1 4.1 4.2-1.1A10 10 0 1012 2zm0 18a8 8 0 01-4.3-1.3l-.3-.2-2.5.6.6-2.5-.2-.3A8 8 0 1112 20z"/></svg>',
    link: '#'
  }
]

const quickLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.process', href: '#process' },
  { key: 'nav.contact', href: '#contact' }
]

const services = [
  'services.items.carpet.title',
  'services.items.furniture.title',
  'services.items.curtain.title',
  'services.items.mattress.title',
  'services.items.home.title',
  'services.items.floor.title'
]
</script>
