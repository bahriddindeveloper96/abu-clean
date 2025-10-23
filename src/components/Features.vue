<template>
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="animate-slide-up">
          <span class="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
            {{ $t('features.title') }}
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {{ $t('features.subtitle') }}
          </h2>
          <p class="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            {{ $t('hero.description') }}
          </p>

          <!-- Features List -->
          <div class="space-y-6">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="flex items-start space-x-4 group"
            >
              <div 
                :class="[
                  'flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300',
                  feature.color
                ]"
              >
                <div v-html="feature.icon" class="w-6 h-6 text-white"></div>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">{{ $t(feature.titleKey) }}</h3>
                <p class="text-sm md:text-base text-gray-600">{{ $t(feature.descKey) }}</p>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="mt-8">
            <button class="btn-primary">
              <a href="tel:+998972021996" target="_blank" rel="noopener noreferrer">
              <span class="flex items-center space-x-2">
                <span>{{ $t('common.contactUs') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              </a>
            </button>
          </div>
        </div>

        <!-- Right Content - Stats & Images -->
        <div class="relative animate-slide-up" style="animation-delay: 0.2s;">
          <!-- Stats Cards -->
          <div class="grid grid-cols-2 gap-6">
            <div 
              v-for="(stat, index) in stats" 
              :key="index"
              class="card p-6 text-center"
            >
              <div :class="['w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-lg flex items-center justify-center', stat.color]">
                <div v-html="stat.icon" class="w-7 h-7 md:w-8 md:h-8 text-white"></div>
              </div>
              <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{{ stat.value }}</div>
              <div class="text-sm md:text-base text-gray-600">{{ $t(stat.labelKey) }}</div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-2xl opacity-50 animate-pulse-slow" style="animation-delay: 1s;"></div>
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-slide-up">
        <div 
          v-for="(badge, index) in badges" 
          :key="index"
          class="text-center group"
        >
          <div 
            :class="[
              'w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300',
              badge.color
            ]"
          >
            <div v-html="badge.icon" class="w-10 h-10 text-white"></div>
          </div>
          <h4 class="text-sm md:text-base font-bold text-gray-900 mb-2">{{ $t(badge.titleKey) }}</h4>
          <p class="text-xs md:text-sm text-gray-600">{{ $t(badge.descKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    titleKey: 'features.items.professional.title',
    descKey: 'features.items.professional.description',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    color: 'bg-gradient-to-br from-blue-500 to-blue-700'
  },
  {
    titleKey: 'features.items.equipment.title',
    descKey: 'features.items.equipment.description',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    color: 'bg-gradient-to-br from-purple-500 to-purple-700'
  },
  {
    titleKey: 'features.items.eco.title',
    descKey: 'features.items.eco.description',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    color: 'bg-gradient-to-br from-green-500 to-green-700'
  },
  {
    titleKey: 'features.items.guarantee.title',
    descKey: 'features.items.guarantee.description',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    color: 'bg-gradient-to-br from-orange-500 to-orange-700'
  }
]

const stats = [
  {
    value: '5000+',
    labelKey: 'hero.stats.clients',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    color: 'bg-gradient-to-br from-blue-500 to-blue-700'
  },
  {
    value: '10+',
    labelKey: 'hero.stats.experience',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    color: 'bg-gradient-to-br from-purple-500 to-purple-700'
  },
  {
    value: '50+',
    labelKey: 'hero.stats.projects',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
    color: 'bg-gradient-to-br from-green-500 to-green-700'
  },
  {
    value: '24/7',
    labelKey: 'features.items.support.title',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
    color: 'bg-gradient-to-br from-orange-500 to-orange-700'
  }
]

const badges = [
  {
    titleKey: 'features.items.support.title',
    descKey: 'features.items.support.description',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
    color: 'bg-gradient-to-br from-yellow-500 to-yellow-700'
  },
  {
    titleKey: 'features.items.eco.title',
    descKey: 'features.items.eco.description',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>',
    color: 'bg-gradient-to-br from-red-500 to-red-700'
  },
  {
    titleKey: 'features.items.guarantee.title',
    descKey: 'features.items.guarantee.description',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',
    color: 'bg-gradient-to-br from-teal-500 to-teal-700'
  },
  {
    titleKey: 'features.items.price.title',
    descKey: 'features.items.price.description',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-700'
  }
]
</script>
