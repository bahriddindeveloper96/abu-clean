<template>
  <section id="services" class="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full filter blur-3xl opacity-30 animate-float" style="animation-delay: 2s;"></div>
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slide-up">
        <span class="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
          Bizning Xizmatlar
        </span>
        <h2 class="section-title">
          Professional Tozalash
          <span class="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Xizmatlari
          </span>
        </h2>
        <p class="section-subtitle mt-4">
          Har qanday tozalash ehtiyojingiz uchun professional yechimlar
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
          
          <!-- Icon -->
          <div class="mb-6">
            <div 
              :class="[
                'w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500',
                service.color
              ]"
            >
              <div v-html="service.icon" class="w-7 h-7 md:w-8 md:h-8 text-white"></div>
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
            {{ service.title }}
          </h3>
          <p class="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Features -->
          <ul class="space-y-2 mb-6">
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
          </ul>

          <!-- Price & CTA -->
          <div class="flex items-center justify-between pt-4 border-t border-gray-200">
            <div>
              <span class="text-xs md:text-sm text-gray-500">Dan boshlab</span>
              <div class="text-xl md:text-2xl font-bold text-gray-900">{{ service.price }}</div>
            </div>
            <button class="px-4 md:px-6 py-2 bg-primary-600 text-white text-sm md:text-base rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span class="flex items-center space-x-1">
                <span>Buyurtma</span>
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
            <span class="px-4 py-2 bg-primary-100 text-primary-600 rounded-md text-sm font-medium">🎉 Maxsus Taklif</span>
          </div>
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Birinchi Buyurtmaga 20% Chegirma
          </h3>
          <p class="text-base md:text-lg text-gray-600 mb-8">
            Hoziroq buyurtma bering va maxsus chegirmadan foydalaning
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary">
              Buyurtma Berish
            </button>
            <button class="btn-secondary">
              Batafsil Ma'lumot
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
    title: 'Gilam Yuvish',
    description: 'Professional uskunalar bilan gilamlaringizni chuqur tozalash va dezinfeksiya qilish',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
    color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    features: [
      'Bepul olib kelish va yetkazib berish',
      'Chuqur tozalash texnologiyasi',
      'Ekologik toza vositalar',
      '24 soat ichida tayyor'
    ],
    price: '15,000 so\'m'
  },
  {
    title: 'Mebel Tozalash',
    description: 'Yumshoq mebellarni professional tozalash va dog\'larni olib tashlash',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
    color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    features: [
      'Uyingizda xizmat ko\'rsatish',
      'Barcha turdagi mato uchun',
      'Dog\'larni olib tashlash',
      'Tez quritish texnologiyasi'
    ],
    price: '50,000 so\'m'
  },
  {
    title: 'Parda Yuvish',
    description: 'Pardalaringizni ehtiyotkorlik bilan yuvish va dazmollash xizmati',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>',
    color: 'bg-gradient-to-br from-pink-500 to-pink-700',
    features: [
      'Olib ketish va o\'rnatish',
      'Nozik matolar uchun maxsus',
      'Professional dazmollash',
      'Tez xizmat'
    ],
    price: '20,000 so\'m'
  },
  {
    title: 'Ko\'rpa-to\'shak Yuvish',
    description: 'Ko\'rpa, adyol va to\'shaklarni gigienik tozalash',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
    color: 'bg-gradient-to-br from-green-500 to-green-700',
    features: [
      'Antibakterial tozalash',
      'Allergenlarni yo\'q qilish',
      'Quruq va ho\'l tozalash',
      'Kafolatlangan sifat'
    ],
    price: '25,000 so\'m'
  },
  {
    title: 'Uy Tozalash',
    description: 'To\'liq uy tozalash xizmati - professional jamoa bilan',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    color: 'bg-gradient-to-br from-orange-500 to-orange-700',
    features: [
      'Barcha xonalarni tozalash',
      'Oynalar va pollarni yuvish',
      'Oshxona va hojatxona',
      'Muntazam xizmat'
    ],
    price: '100,000 so\'m'
  },
  {
    title: 'Toshpoya Tozalash',
    description: 'Tashqi toshpoya va beton yuzalarni yuqori bosimli yuvish',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    features: [
      'Yuqori bosimli yuvish',
      'Mox va dog\'larni olib tashlash',
      'Tez va samarali',
      'Katta maydonlar uchun'
    ],
    price: '30,000 so\'m'
  }
]
</script>
