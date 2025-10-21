<template>
  <section id="home" class="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Floating Bubbles -->
      <CleaningBubbles />
      
      <!-- Decorative Circles -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style="animation-delay: 4s;"></div>
      
      <!-- Sparkles -->
      <Sparkles />
    </div>

    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-center lg:text-left space-y-8 animate-slide-up relative">
            <div class="inline-block">
              <span class="px-4 py-2 bg-primary-50 text-primary-600 rounded-md text-sm font-medium">
                Professional Tozalash Xizmatlari
              </span>
            </div>
          
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Uyingizni Pokiza va
              <span class="block bg-gradient-to-r from-primary-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-pulse-slow">
                Toza Qilamiz ✨
              </span>
            </h1>
          
            <p class="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl lg:mx-0">
              Toshkent shahrida bepul olib kelish va yetkazib berish xizmati bilan gilam, mebel va uy tozalash xizmatlari
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="btn-primary transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <span class="flex items-center justify-center space-x-2">
                  <span>Buyurtma berish</span>
                  <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button class="btn-secondary transform hover:scale-105 transition-all duration-300">
                <span class="flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+998 55 500 38 38</span>
                </span>
              </button>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 sm:gap-12 pt-12 max-w-3xl lg:mx-0">
              <div class="text-center lg:text-left group cursor-pointer">
                <div class="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">5000+</div>
                <div class="text-gray-600 text-sm sm:text-base flex items-center justify-center lg:justify-start space-x-1">
                  <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Mijozlar</span>
                </div>
              </div>
              <div class="text-center lg:text-left group cursor-pointer">
                <div class="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">10+</div>
                <div class="text-gray-600 text-sm sm:text-base flex items-center justify-center lg:justify-start space-x-1">
                  <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Yillik tajriba</span>
                </div>
              </div>
              <div class="text-center lg:text-left group cursor-pointer">
                <div class="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">100%</div>
                <div class="text-gray-600 text-sm sm:text-base flex items-center justify-center lg:justify-start space-x-1">
                  <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Kafolat</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side - Banner Slider -->
          <div class="relative animate-slide-up hidden lg:block" style="animation-delay: 0.2s;">
            <div class="relative">
              <!-- Main Banner Slider -->
              <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                <!-- Slider Container -->
                <div class="relative aspect-[4/3]">
                  <!-- Slides -->
                  <transition name="slide-fade" mode="out-in">
                    <div 
                      :key="currentSlide"
                      class="absolute inset-0"
                    >
                      <!-- Background Image -->
                      <img 
                        :src="slides[currentSlide].image" 
                        :alt="slides[currentSlide].title"
                        class="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      <!-- Overlay Gradient -->
                      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      
                      <!-- Content -->
                      <div class="absolute inset-0 flex items-end justify-center p-8">
                        <div class="text-center text-white">
                          <div v-html="slides[currentSlide].icon" class="w-20 h-20 mx-auto mb-4 drop-shadow-lg"></div>
                          <h3 class="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">{{ slides[currentSlide].title }}</h3>
                          <p class="text-lg md:text-xl mb-4 drop-shadow-lg">{{ slides[currentSlide].description }}</p>
                          <div class="flex items-center justify-center space-x-2 text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                            <span>{{ slides[currentSlide].price }}</span>
                            <span class="text-sm text-white/90">dan</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>

                <!-- Badge -->
                <div class="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse z-10">
                  🎉 20% Chegirma
                </div>

                <!-- Navigation Arrows -->
                <button 
                  @click="prevSlide"
                  class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  @click="nextSlide"
                  class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <!-- Dots Indicator -->
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                  <button
                    v-for="(slide, index) in slides"
                    :key="index"
                    @click="currentSlide = index"
                    :class="[
                      'w-3 h-3 rounded-full transition-all duration-300',
                      currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                    ]"
                  ></button>
                </div>
              </div>

              <!-- Floating Elements -->
              <div class="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400 rounded-full opacity-70 animate-float"></div>
              <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400 rounded-full opacity-70 animate-float" style="animation-delay: 1.5s;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#services" class="flex flex-col items-center text-gray-400 hover:text-gray-900 transition-colors">
        <span class="text-sm mb-2">Pastga</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CleaningBubbles from './CleaningBubbles.vue'
import Sparkles from './Sparkles.vue'

const currentSlide = ref(0)
let slideInterval = null

const slides = [
  {
    title: 'Gilam Yuvish',
    description: 'Professional uskunalar bilan chuqur tozalash',
    price: '15,000 so\'m',
    image: '/images/1.webp',
    icon: '<svg class="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>'
  },
  {
    title: 'Mebel Tozalash',
    description: 'Yumshoq mebellar uchun maxsus tozalash',
    price: '50,000 so\'m',
    image: '/images/1.webp',
    icon: '<svg class="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>'
  },
  {
    title: 'Uy Tozalash',
    description: 'To\'liq uy tozalash professional jamoa bilan',
    price: '100,000 so\'m',
    image: '/images/1.webp',
    icon: '<svg class="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'
  },
  {
    title: 'Parda Yuvish',
    description: 'Nozik pardalar ehtiyotkorlik bilan yuvish',
    price: '20,000 so\'m',
    image: '/images/1.webp',
    icon: '<svg class="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>'
  },
  {
    title: 'Ko\'rpa Yuvish',
    description: 'Katta o\'lchamli ko\'rpalar tozalash',
    price: '25,000 so\'m',
    image: '/images/1.webp',
    icon: '<svg class="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const startAutoSlide = () => {
  slideInterval = setInterval(() => {
    nextSlide()
  }, 4000) // 4 soniyada bir o'zgaradi
}

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
