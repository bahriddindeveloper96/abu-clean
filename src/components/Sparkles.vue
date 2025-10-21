<template>
  <div class="sparkles-container">
    <div 
      v-for="(sparkle, index) in sparkles" 
      :key="index"
      class="sparkle"
      :style="{
        left: sparkle.left,
        top: sparkle.top,
        animationDelay: sparkle.delay,
        animationDuration: sparkle.duration
      }"
    >
      <svg viewBox="0 0 24 24" class="sparkle-svg">
        <path
          d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sparkles = ref([])

const generateSparkles = () => {
  const sparkleCount = 15
  const newSparkles = []
  
  for (let i = 0; i < sparkleCount; i++) {
    newSparkles.push({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 2}s`
    })
  }
  
  sparkles.value = newSparkles
}

onMounted(() => {
  generateSparkles()
})
</script>

<style scoped>
.sparkles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.sparkle {
  position: absolute;
  width: 20px;
  height: 20px;
  color: #fbbf24;
  animation: sparkle ease-in-out infinite;
  opacity: 0;
}

.sparkle-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 3px rgba(251, 191, 36, 0.6));
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
}

/* Add twinkling effect */
.sparkle:nth-child(odd) {
  animation-name: sparkle, twinkle;
}

@keyframes twinkle {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.5);
  }
}
</style>
