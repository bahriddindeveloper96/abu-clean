<template>
  <transition name="modal-fade">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 overflow-y-auto"
      @click.self="closeModal"
    >
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>
      
      <!-- Modal Container -->
      <div class="flex min-h-screen items-center justify-center p-4">
        <div 
          class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all"
          @click.stop
        >
          <!-- Close Button -->
          <button 
            @click="closeModal"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Modal Header -->
          <div class="bg-gradient-to-r from-primary-600 to-blue-600 rounded-t-2xl px-6 py-8 text-center">
            <!-- <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div> -->
            <!-- <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">
              {{ $t('modal.title') }}
            </h2>
            <p class="text-white/90 text-sm sm:text-base">
              {{ $t('modal.subtitle') }}
            </p> -->
          </div>

          <!-- Modal Body -->
          <div class="p-6 sm:p-8">
            <form @submit.prevent="handleSubmit" class="space-y-5">
              <!-- Name Input -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('modal.form.name') }}
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    :placeholder="$t('modal.form.namePlaceholder')"
                  />
                </div>
              </div>

              <!-- Phone Input -->
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('modal.form.phone') }}
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    required
                    class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+998 __ ___ __ __"
                  />
                </div>
              </div>

              <!-- Service Select (Optional) -->
              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('modal.form.service') }}
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <select
                    id="service"
                    v-model="formData.service"
                    class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors appearance-none bg-white"
                  >
                    <option value="">{{ $t('modal.form.selectService') }}</option>
                    <option value="carpet">{{ $t('services.items.carpet.title') }}</option>
                    <option value="curtain">{{ $t('services.items.curtain.title') }}</option>
                    <option value="blanket">{{ $t('services.items.mattress.title') }}</option>
                    <option value="furniture">{{ $t('services.items.furniture.title') }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-primary-600 to-blue-600 text-white py-3.5 rounded-lg font-semibold hover:from-primary-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{{ isSubmitting ? $t('modal.form.sending') : $t('modal.form.submit') }}</span>
              </button>
            </form>

            <!-- Success Message -->
            <transition name="fade">
              <div v-if="showSuccess" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-center space-x-2 text-green-800">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="font-medium">{{ $t('modal.form.success') }}</span>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'submit'])

const formData = ref({
  name: '',
  phone: '',
  service: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const closeModal = () => {
  emit('close')
  // Reset form after close animation
  setTimeout(() => {
    formData.value = {
      name: '',
      phone: '',
      service: ''
    }
    showSuccess.value = false
  }, 300)
}

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Emit submit event with form data
  emit('submit', formData.value)
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Close modal after 2 seconds
  setTimeout(() => {
    closeModal()
  }, 2000)
}

// Prevent body scroll when modal is open
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .relative,
.modal-fade-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-fade-enter-from .relative,
.modal-fade-leave-to .relative {
  transform: scale(0.95);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
