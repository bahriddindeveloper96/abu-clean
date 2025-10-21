<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slide-up">
        <span class="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
          Savol-Javoblar
        </span>
        <h2 class="section-title">
          Ko'p Beriladigan
          <span class="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Savollar
          </span>
        </h2>
        <p class="section-subtitle mt-4">
          Mijozlarimiz ko'p so'raydigan savollarga javoblar
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="card overflow-hidden animate-slide-up"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300"
            >
              <div class="flex items-start space-x-3 md:space-x-4 flex-1">
                <div 
                  :class="[
                    'flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300',
                    openIndex === index ? 'bg-primary-600' : 'bg-primary-100'
                  ]"
                >
                  <svg 
                    :class="[
                      'w-4 h-4 md:w-5 md:h-5 transition-colors duration-300',
                      openIndex === index ? 'text-white' : 'text-primary-600'
                    ]"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 
                  :class="[
                    'text-base md:text-lg font-semibold transition-colors duration-300',
                    openIndex === index ? 'text-primary-600' : 'text-gray-900'
                  ]"
                >
                  {{ faq.question }}
                </h3>
              </div>
              <svg 
                :class="[
                  'w-6 h-6 flex-shrink-0 ml-4 transition-all duration-300',
                  openIndex === index ? 'transform rotate-180 text-primary-600' : 'text-gray-400'
                ]"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="openIndex === index" class="overflow-hidden">
                <div class="px-6 md:px-8 pb-6 pl-11 md:pl-14">
                  <p class="text-sm md:text-base text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Still Have Questions -->
        <div class="mt-12 text-center bg-gray-50 rounded-lg p-8 md:p-12 animate-slide-up">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Hali ham savollaringiz bormi?</h3>
          <p class="text-base md:text-lg text-gray-600 mb-8">Biz sizga yordam berishga tayyormiz!</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary">
              <span class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Qo'ng'iroq Qiling</span>
              </span>
            </button>
            <button class="btn-secondary">
              <span class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Xabar Yuboring</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Gilam yuvish qancha vaqt oladi?',
    answer: 'Odatda gilam yuvish jarayoni 24 soat ichida tugaydi. Biz gilamingizni ertalab olib ketamiz va ertasiga tayyor holda qaytarib beramiz. Maxsus holatlarda tezkor xizmat ham mavjud.'
  },
  {
    question: 'Qanday to\'lov usullari mavjud?',
    answer: 'Biz naqd pul, plastik kartalar va bank o\'tkazmalari orqali to\'lovni qabul qilamiz. To\'lov xizmat tugagandan keyin amalga oshiriladi. Muntazam mijozlar uchun chegirmalar mavjud.'
  },
  {
    question: 'Gilam yuvish xavfsizmi?',
    answer: 'Ha, biz faqat ekologik toza va sog\'liq uchun xavfsiz vositalardan foydalanamiz. Barcha kimyoviy moddalar xalqaro standartlarga javob beradi va bolalar hamda hayvonlar uchun mutlaqo xavfsizdir.'
  },
  {
    question: 'Qanday gilamlarni yuvish mumkin?',
    answer: 'Biz barcha turdagi gilamlarni yuvamiz: jun, ipak, sintetik, qo\'l tikish va mashinada to\'qilgan gilamlar. Har bir gilam turi uchun maxsus tozalash usuli qo\'llaniladi.'
  },
  {
    question: 'Olib ketish va yetkazib berish bepulmi?',
    answer: 'Ha, Toshkent shahri bo\'ylab olib ketish va yetkazib berish mutlaqo bepul. Biz sizning qulay vaqtingizda kelamiz va gilamni uyingizgacha olib boramiz.'
  },
  {
    question: 'Agar natija meni qoniqtirmasa-chi?',
    answer: 'Biz o\'z ishimizga 100% kafolat beramiz. Agar natija sizni qoniqtirmasa, biz gilamni qayta tozalaymiz yoki pulni qaytarib beramiz. Mijozlarimizning qoniqishi bizning ustuvor vazifamiz.'
  },
  {
    question: 'Dog\'larni olib tashlash mumkinmi?',
    answer: 'Ha, biz professional dog\' olib tashlash xizmatini taqdim etamiz. Ko\'pchilik dog\'lar (qahva, choy, meva, yog\') maxsus vositalar yordamida muvaffaqiyatli olib tashlanadi.'
  },
  {
    question: 'Qancha tez-tez gilam yuvish kerak?',
    answer: 'Mutaxassislar yiliga kamida 1-2 marta professional gilam yuvishni tavsiya qiladi. Agar uyingizda bolalar yoki hayvonlar bo\'lsa, 3-4 oyda bir marta yuvish yaxshiroq.'
  }
]
</script>
