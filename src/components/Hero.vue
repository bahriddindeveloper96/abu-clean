<template>
  <section id="home" class="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Banner Slider Container -->
      <div class="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
        <div class="relative" style="height: 80vh; min-height: 600px; max-height: 800px;">
          <!-- Slides -->
          <transition name="slide-fade" mode="out-in">
            <div 
              :key="currentSlide"
              class="absolute inset-0"
            >
              <!-- Background Image -->
              <img 
                :src="slides[currentSlide].image" 
                :alt="$t(`hero.slides.${slides[currentSlide].key}.title`)"
                class="absolute inset-0 w-full h-full object-cover"
              />
              
              <!-- Overlay Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
              
              <!-- Content -->
              <div class="absolute inset-0 flex items-center justify-center p-6 sm:p-8 lg:p-12">
                <div class="max-w-4xl mx-auto text-center text-white">
                  <!-- Title & Description -->
                  <div class="mb-6 animate-slide-up">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                      {{ $t(`hero.slides.${slides[currentSlide].key}.title`) }}
                    </h1>
                    <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 leading-relaxed">
                      {{ $t(`hero.slides.${slides[currentSlide].key}.description`) }}
                    </p>
                    
                    <!-- Price -->
                    <div class="inline-flex items-center bg-primary-500 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl mb-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class="font-bold text-xl sm:text-2xl lg:text-3xl">{{ $t(`hero.slides.${slides[currentSlide].key}.price`) }}</span>
                    </div>
                  </div>

                  <!-- Features -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto mb-6 animate-slide-up" style="animation-delay: 0.2s;">
                    <div 
                      v-for="(feature, index) in $tm(`hero.slides.${slides[currentSlide].key}.features`)"
                      :key="index"
                      class="flex items-center justify-center sm:justify-start text-sm sm:text-base lg:text-lg bg-white/10 backdrop-blur-sm px-3 py-2.5 rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="font-medium">{{ feature }}</span>
                    </div>
                  </div>

                  <!-- CTA Button -->
                  <div class="animate-slide-up" style="animation-delay: 0.4s;">
                    <a href="tel:+998972021996" class="inline-flex items-center bg-white text-primary-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                      <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+998 97 202 19 96</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <!-- Navigation Arrows -->
          <button 
            @click="prevSlide"
            class="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-20"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="nextSlide"
            class="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-20"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Dots Indicator -->
          <div class="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            <button
              v-for="(slide, index) in slides"
              :key="index"
              @click="currentSlide = index"
              :class="[
                'w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300',
                currentSlide === index ? 'bg-white w-8 sm:w-10' : 'bg-white/50 hover:bg-white/75'
              ]"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let slideInterval = null

const slides = ref([
  {
    key: 'carpet',
    image: '/images/1.webp'
  }, 
  {
    key: 'curtain',
    image: '/images/parda.jpg'
  },
  {
    key: 'blanket',
    image: '/images/banner4.webp'
  },
  {
    key: 'furniture',
    image: '/images/banner3.webp'
  }
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
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
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  transform: translateX(20px) scale(0.98);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px) scale(0.98);
  opacity: 0;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .slide-fade-enter-from {
    transform: translateX(15px) scale(0.99);
  }
  
  .slide-fade-leave-to {
    transform: translateX(-15px) scale(0.99);
  }
}
</style>
