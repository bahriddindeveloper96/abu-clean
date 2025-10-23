<template>
  <section id="process" class="py-20 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-10 left-10 w-64 h-64 bg-primary-300 rounded-full filter blur-3xl animate-float"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-accent-300 rounded-full filter blur-3xl animate-float" style="animation-delay: 3s;"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slide-up">
        <a 
                  :href="contact.link" 
                  class="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center space-x-1"
                >
        <span class="inline-block px-4 py-2 bg-white text-primary-600 rounded-full text-sm font-semibold mb-4 shadow-md">
          {{ $t('process.badge') }}
        </span>
        <h2 class="section-title">
          {{ $t('process.title') }}
          <span class="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            {{ $t('process.titleHighlight') }}
          </span>
        </h2>
        <p class="section-subtitle mt-4">
          {{ $t('process.subtitle') }}
        </p>
        </a>
      </div>

      <!-- Process Steps -->
      <div class="relative">
        <!-- Connection Line -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300 transform -translate-y-1/2 -z-10"></div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="relative animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Card -->
            <div class="card p-6 md:p-8 text-center relative overflow-hidden group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
              <!-- Background Decoration -->
              <div 
                :class="[
                  'absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500',
                  step.color
                ]"
              ></div>

              <!-- Step Number -->
              <div class="relative mb-6">
                <div 
                  :class="[
                    'w-20 h-20 mx-auto rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300',
                    step.color
                  ]"
                >
                  <span class="text-3xl font-bold text-white">{{ index + 1 }}</span>
                </div>
                <!-- Floating Icon -->
                <div 
                  :class="[
                    'absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300',
                    step.iconBg
                  ]"
                >
                  <div v-html="step.icon" class="w-5 h-5 text-white"></div>
                </div>
              </div>

              <!-- Content -->
              <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-3">{{ step.title }}</h3>
              <p class="text-sm md:text-base text-gray-600 leading-relaxed">{{ step.description }}</p>

              <!-- Hover Effect Arrow -->
              <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg class="w-6 h-6 mx-auto text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <!-- <div class="mt-12 md:mt-16 text-center animate-slide-up">
        <div class="inline-block bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-12">
          <h3 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {{ $t('process.cta.title') }}
          </h3>
          <p class="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            {{ $t('process.cta.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+998972021996" class="btn-primary transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <span class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{{ $t('process.cta.phone') }}</span>
              </span>
            </a>
            <button @click="$emit('open-modal')" class="btn-secondary transform hover:scale-105 transition-all duration-300">
              <span class="flex items-center space-x-2">
                <span>{{ $t('process.cta.button') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

defineEmits(['open-modal'])

const steps = computed(() => [
  {
    title: t('process.steps.step1.title'),
    description: t('process.steps.step1.description'),
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
    color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600'
  },
  {
    title: t('process.steps.step2.title'),
    description: t('process.steps.step2.description'),
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>',
    color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    iconBg: 'bg-gradient-to-br from-purple-400 to-purple-600'
  },
  {
    title: t('process.steps.step3.title'),
    description: t('process.steps.step3.description'),
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
    color: 'bg-gradient-to-br from-green-500 to-green-700',
    iconBg: 'bg-gradient-to-br from-green-400 to-green-600'
  },
  {
    title: t('process.steps.step4.title'),
    description: t('process.steps.step4.description'),
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',
    color: 'bg-gradient-to-br from-orange-500 to-orange-700',
    iconBg: 'bg-gradient-to-br from-orange-400 to-orange-600'
  }
])
</script>
