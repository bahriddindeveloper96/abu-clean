<template>
  <div class="min-h-screen">
    <Navbar :isScrolled="isScrolled" @toggle-menu="toggleMobileMenu" :isMobileMenuOpen="isMobileMenuOpen" />
    <Hero />
    <Services />
    <Features />
    <Gallery />
    <Process />
    <FAQ />
    <Contact />
    <Footer />
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

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
