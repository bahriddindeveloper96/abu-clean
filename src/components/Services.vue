<template>
  <section id="services" class="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full filter blur-3xl opacity-30 animate-float" style="animation-delay: 2s;"></div>
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slide-up">
        <span class="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
          {{ $t('services.title') }}
        </span>
        <h2 class="section-title">
          {{ $t('services.title') }}
        </h2>
        <p class="section-subtitle mt-4">
          {{ $t('services.subtitle') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="card p-6 md:p-8 group cursor-pointer animate-slide-up transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Background Glow Effect -->
          <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" :class="service.color"></div>
          
          <!-- Image -->
          <div class="mb-6">
            <div class="w-full h-48 md:h-56 rounded-lg overflow-hidden transform group-hover:scale-105 transition-all duration-500 shadow-lg">
              <img 
                :src="service.image" 
                :alt="$t(service.titleKey)"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
            {{ $t(service.titleKey) }}
          </h3>
          <p class="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
            {{ $t(service.descKey) }}
          </p>

          <!-- Features -->
          <!-- <ul class="space-y-2 mb-6">
            <li 
              v-for="(feature, fIndex) in service.features" 
              :key="fIndex"
              class="flex items-center text-sm text-gray-700"
            >
              <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul> -->

          <!-- Price & CTA -->
          <div class="flex items-center justify-between pt-4 border-t border-gray-200">
            <div>
              <span class="text-xs md:text-sm text-gray-500">{{ $t('common.readMore') }}</span>
              <div class="text-xl md:text-2xl font-bold text-gray-900">{{ service.price }}</div>
            </div>
            <button class="px-4 md:px-6 py-2 bg-primary-600 text-white text-sm md:text-base rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span class="flex items-center space-x-1">
                <span>{{ $t('common.bookNow') }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- CTA Banner -->
      <div class="mt-16 md:mt-20 bg-gray-50 rounded-lg p-8 md:p-12 text-center animate-slide-up">
        <div class="max-w-2xl mx-auto">
          <div class="inline-block mb-4">
            <span class="px-4 py-2 bg-primary-100 text-primary-600 rounded-md text-sm font-medium">🎉 {{ $t('hero.getStarted') }}</span>
          </div>
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('contact.title') }}
          </h3>
          <p class="text-base md:text-lg text-gray-600 mb-8">
            {{ $t('contact.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary">
              {{ $t('nav.getQuote') }}
            </button>
            <button class="btn-secondary">
              {{ $t('common.learnMore') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    titleKey: 'services.items.carpet.title',
    descKey: 'services.items.carpet.description',
    image: '/images/kovrov.webp',
    color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    features: ['✓', '✓', '✓', '✓'],
    price: '15,000 so\'m'
  },
  {
    titleKey: 'services.items.furniture.title',
    descKey: 'services.items.furniture.description',
    image: '/images/mebel.jpg',
    color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    features: ['✓', '✓', '✓', '✓'],
    price: '50,000 so\'m'
  },
  {
    titleKey: 'services.items.curtain.title',
    descKey: 'services.items.curtain.description',
    image: '/images/parda.jpg',
    color: 'bg-gradient-to-br from-pink-500 to-pink-700',
    features: ['✓', '✓', '✓', '✓'],
    price: '20,000 so\'m'
  },
  {
    titleKey: 'services.items.mattress.title',
    descKey: 'services.items.mattress.description',
    image: '/images/matras.webp',
    color: 'bg-gradient-to-br from-green-500 to-green-700',
    features: ['✓', '✓', '✓', '✓'],
    price: '25,000 so\'m'
  },
  {
    titleKey: 'services.items.home.title',
    descKey: 'services.items.home.description',
    image: '/images/doma.jpeg',
    color: 'bg-gradient-to-br from-orange-500 to-orange-700',
    features: ['✓', '✓', '✓', '✓'],
    price: '100,000 so\'m'
  },
  {
    titleKey: 'services.items.floor.title',
    descKey: 'services.items.floor.description',
    image: '/images/shtor.jpg',
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    features: ['✓', '✓', '✓', '✓'],
    price: '30,000 so\'m'
  }
]
</script>
