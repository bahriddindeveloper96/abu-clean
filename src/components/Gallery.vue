<template>
  <section id="gallery" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slide-up">
        <span class="inline-block px-4 py-2 bg-white text-primary-600 rounded-full text-sm font-semibold mb-4 shadow-md">
          📸 {{ $t('gallery.title') }}
        </span>
        <h2 class="section-title">
          {{ $t('gallery.title') }}
        </h2>
        <p class="section-subtitle mt-4">
          {{ $t('gallery.subtitle') }}
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(item, index) in galleryItems" 
          :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-slide-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="openModal(item)"
        >
          <!-- Image Container with Before/After Slider -->
          <div class="relative aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
            <!-- Before Image (Background) -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <div class="text-center text-white">
                  <svg class="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p class="text-sm font-semibold">{{ $t(item.title) }}</p>
                  <p class="text-xs opacity-75">{{ $t('gallery.before') }}</p>
                </div>
              </div>
            </div>
            
            <!-- After Image (Overlay) -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out flex items-center justify-center">
              <div class="text-center text-white">
                <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <p class="text-sm font-semibold">{{ $t(item.title) }}</p>
                <p class="text-xs opacity-90">{{ $t('gallery.after') }} ✨</p>
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-4 left-4 z-10">
              <span :class="['px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg', item.badgeColor]">
                {{ $t(item.category) }}
              </span>
            </div>

            <!-- View Details Button -->
            <div class="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm shadow-lg hover:bg-gray-100 transition-colors">
                {{ $t('common.viewAll') }}
              </button>
            </div>
          </div>

          <!-- Info -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h3 class="text-lg font-bold text-white mb-2">{{ $t(item.title) }}</h3>
            <p class="text-sm text-gray-200 mb-3">{{ $t(item.description) }}</p>
            <div class="flex items-center space-x-4 text-xs text-gray-300">
              <span class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ item.duration }}</span>
              </span>
              <span class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{{ item.rating }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center animate-slide-up">
        <p class="text-lg text-gray-600 mb-6">{{ $t('contact.subtitle') }}</p>
        <button class="btn-primary transform hover:scale-105 transition-all duration-300">
          <span class="flex items-center space-x-2">
            <span>{{ $t('nav.getQuote') }}</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const galleryItems = [
  {
    title: 'services.items.carpet.title',
    category: 'services.items.carpet.title',
    description: 'services.items.carpet.description',
    duration: '2h',
    rating: '5.0',
    badgeColor: 'bg-blue-500'
  },
  {
    title: 'services.items.furniture.title',
    category: 'services.items.furniture.title',
    description: 'services.items.furniture.description',
    duration: '1.5h',
    rating: '5.0',
    badgeColor: 'bg-purple-500'
  },
  {
    title: 'services.items.home.title',
    category: 'services.items.home.title',
    description: 'services.items.home.description',
    duration: '4h',
    rating: '5.0',
    badgeColor: 'bg-green-500'
  },
  {
    title: 'services.items.curtain.title',
    category: 'services.items.curtain.title',
    description: 'services.items.curtain.description',
    duration: '3h',
    rating: '5.0',
    badgeColor: 'bg-pink-500'
  },
  {
    title: 'services.items.furniture.title',
    category: 'services.items.furniture.title',
    description: 'services.items.furniture.description',
    duration: '1h',
    rating: '5.0',
    badgeColor: 'bg-orange-500'
  },
  {
    title: 'services.items.mattress.title',
    category: 'services.items.mattress.title',
    description: 'services.items.mattress.description',
    duration: '2.5h',
    rating: '5.0',
    badgeColor: 'bg-cyan-500'
  }
]

const openModal = (item) => {
  console.log('Opening modal for:', item.title)
  // Modal funksiyasi keyinchalik qo'shiladi
}
</script>

<style scoped>
/* Additional hover effects */
.group:hover .absolute {
  animation: subtle-pulse 2s ease-in-out infinite;
}

@keyframes subtle-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.95;
  }
}
</style>
