<template>
  <div class="min-h-screen">
    <Navbar :isScrolled="isScrolled" @toggle-menu="toggleMobileMenu" :isMobileMenuOpen="isMobileMenuOpen" @open-modal="openModal" />
    <Hero @open-modal="openModal" />
    <Services @open-modal="openModal" />
    <Features />
    <Gallery />
    <Process @open-modal="openModal" />
    <FAQ />
    <Contact />
    <Footer @open-modal="openModal" />
    
    <!-- Order Modal -->
    <OrderModal :isOpen="isModalOpen" @close="closeModal" @submit="handleOrderSubmit" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Features from './components/Features.vue'
import Gallery from './components/Gallery.vue'
import Process from './components/Process.vue'
import FAQ from './components/FAQ.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import OrderModal from './components/OrderModal.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isModalOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const handleOrderSubmit = (formData) => {
  console.log('Order submitted:', formData)
  // Bu yerda backend ga ma'lumot yuborish logikasi bo'lishi mumkin
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
