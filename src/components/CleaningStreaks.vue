<template>
  <div class="streaks-container">
    <svg class="streaks-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="streakGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgba(14, 165, 233, 0);stop-opacity:0" />
          <stop offset="50%" style="stop-color:rgba(14, 165, 233, 0.3);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(14, 165, 233, 0);stop-opacity:0" />
        </linearGradient>
      </defs>
      
      <g v-for="(streak, index) in streaks" :key="index">
        <path
          :d="streak.path"
          stroke="url(#streakGradient)"
          stroke-width="0.5"
          fill="none"
          class="streak-path"
          :style="{
            animationDelay: streak.delay,
            animationDuration: streak.duration
          }"
        />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const streaks = ref([])

const generateStreaks = () => {
  const streakCount = 8
  const newStreaks = []
  
  for (let i = 0; i < streakCount; i++) {
    const startY = 10 + (i * 10)
    const endY = startY + 5 + Math.random() * 10
    const curve = 5 + Math.random() * 10
    
    newStreaks.push({
      path: `M 0,${startY} Q 25,${startY + curve} 50,${endY} T 100,${endY + curve}`,
      delay: `${i * 0.5}s`,
      duration: `${3 + Math.random() * 2}s`
    })
  }
  
  streaks.value = newStreaks
}

onMounted(() => {
  generateStreaks()
})
</script>

<style scoped>
.streaks-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.4;
}

.streaks-svg {
  width: 100%;
  height: 100%;
}

.streak-path {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: drawStreak linear infinite;
}

@keyframes drawStreak {
  0% {
    stroke-dashoffset: 100;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  100% {
    stroke-dashoffset: -100;
    opacity: 0;
  }
}
</style>
