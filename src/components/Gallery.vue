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

      <!-- Before/After Slider Gallery -->
      <div class="grid md:grid-cols-2 gap-8 md:gap-12">
        <div 
          v-for="(item, index) in galleryItems" 
          :key="index"
          class="relative overflow-hidden rounded-2xl shadow-2xl animate-slide-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Before/After Container -->
          <div 
            class="relative aspect-[4/3] select-none cursor-ew-resize"
            @mousedown="startDrag(index, $event)"
            @mousemove="onMouseMove(index, $event)"
            @touchstart="startDrag(index, $event)"
            @touchmove="onTouchMove(index, $event)"
          >
            <!-- Before Image (Background) -->
            <img 
              :src="item.beforeImage" 
              :alt="$t(item.title) + ' - Before'"
              class="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            
            <!-- After Image (Overlay with clip) -->
            <div 
              class="absolute inset-0 overflow-hidden"
              :style="{ clipPath: `inset(0 ${100 - item.sliderPosition}% 0 0)` }"
            >
              <img 
                :src="item.afterImage" 
                :alt="$t(item.title) + ' - After'"
                class="absolute inset-0 w-full h-full object-cover"
                draggable="false"
              />
            </div>

            <!-- Slider Handle -->
            <div 
              class="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
              :style="{ left: `${item.sliderPosition}%` }"
            >
              <!-- Handle Circle -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <!-- Left Arrow -->
                <svg class="w-4 h-4 text-gray-700 absolute left-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
                </svg>
                <!-- Right Arrow -->
                <svg class="w-4 h-4 text-gray-700 absolute right-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <!-- Labels -->
            <div class="absolute top-4 left-4 z-10">
              <span class="px-3 py-1.5 bg-red-500/90 backdrop-blur-sm text-white rounded-lg text-xs font-bold shadow-lg">
                {{ $t('gallery.before') }}
              </span>
            </div>
            <div class="absolute top-4 right-4 z-10">
              <span class="px-3 py-1.5 bg-green-500/90 backdrop-blur-sm text-white rounded-lg text-xs font-bold shadow-lg">
                {{ $t('gallery.after') }} ✨
              </span>
            </div>

            <!-- Title -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-10">
              <h3 class="text-lg font-bold text-white">{{ $t(item.title) }}</h3>
              <p class="text-sm text-gray-200">{{ $t(item.description) }}</p>
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
import { ref, reactive } from 'vue'

const galleryItems = reactive([
  {
    title: 'services.items.carpet.title',
    description: 'services.items.carpet.description',
    beforeImage: '/images/01.png',
    afterImage: '/images/02.png',
    sliderPosition: 50
  },
  {
    title: 'services.items.furniture.title',
    description: 'services.items.furniture.description',
    beforeImage: '/images/03.png',
    afterImage: '/images/04.png',
    sliderPosition: 50
  }
])

const isDragging = ref(false)
const currentIndex = ref(null)

const startDrag = (index, event) => {
  event.preventDefault()
  isDragging.value = true
  currentIndex.value = index
  updateSliderPosition(index, event)
}

const onMouseMove = (index, event) => {
  if (isDragging.value && currentIndex.value === index) {
    event.preventDefault()
    updateSliderPosition(index, event)
  }
}

const onTouchMove = (index, event) => {
  if (isDragging.value && currentIndex.value === index) {
    event.preventDefault()
    updateSliderPosition(index, event)
  }
}

const updateSliderPosition = (index, event) => {
  const container = event.currentTarget
  const rect = container.getBoundingClientRect()
  const clientX = event.touches ? event.touches[0].clientX : event.clientX
  const x = clientX - rect.left
  const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
  
  galleryItems[index].sliderPosition = percentage
}

// Stop dragging on mouse up or touch end
if (typeof window !== 'undefined') {
  window.addEventListener('mouseup', () => {
    isDragging.value = false
    currentIndex.value = null
  })
  
  window.addEventListener('touchend', () => {
    isDragging.value = false
    currentIndex.value = null
  })
}
</script>

<style scoped>
/* Smooth slider transitions */
.cursor-ew-resize {
  cursor: ew-resize;
}

/* Prevent text selection during drag */
.select-none {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>
