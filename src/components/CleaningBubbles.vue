<template>
  <div class="bubbles-container" @mousemove="handleMouseMove">
    <div 
      v-for="(bubble, index) in bubbles" 
      :key="index"
      class="bubble"
      :style="{
        left: bubble.x + 'px',
        bottom: bubble.y + 'px',
        width: bubble.size + 'px',
        height: bubble.size + 'px'
      }"
    >
      <div class="bubble-inner"></div>
      <div class="bubble-highlight"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const bubbles = ref([])
const mouseX = ref(0)
const mouseY = ref(0)
let animationFrame = null

const generateBubbles = () => {
  const bubbleCount = 5
  const newBubbles = []
  
  for (let i = 0; i < bubbleCount; i++) {
    const size = 50 + Math.random() * 80
    newBubbles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: size,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -1 - Math.random() * 2
    })
  }
  
  bubbles.value = newBubbles
}

const handleMouseMove = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

const updateBubbles = () => {
  bubbles.value = bubbles.value.map(bubble => {
    let newX = bubble.x + bubble.vx
    let newY = bubble.y + bubble.vy
    
    // Ko'pik mishkadan qochadi
    const dx = newX - mouseX.value
    const dy = (window.innerHeight - newY) - mouseY.value
    const distance = Math.sqrt(dx * dx + dy * dy)
    const minDistance = 120
    
    if (distance < minDistance && distance > 0) {
      const angle = Math.atan2(dy, dx)
      const force = (minDistance - distance) / minDistance
      newX += Math.cos(angle) * force * 8
      newY -= Math.sin(angle) * force * 8
    }
    
    // Chegaralardan qaytish
    if (newX < 0 || newX > window.innerWidth) {
      bubble.vx *= -1
      newX = Math.max(0, Math.min(window.innerWidth, newX))
    }
    
    // Yuqoriga chiqib ketsa, pastdan qaytadi
    if (newY > window.innerHeight + 100) {
      newY = -100
      newX = Math.random() * window.innerWidth
    }
    
    if (newY < -100) {
      newY = window.innerHeight + 100
    }
    
    return { ...bubble, x: newX, y: newY }
  })
  
  animationFrame = requestAnimationFrame(updateBubbles)
}

onMounted(() => {
  generateBubbles()
  updateBubbles()
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.bubbles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 35%,
    rgba(255, 255, 255, 0.95),
    rgba(14, 165, 233, 0.5) 40%,
    rgba(59, 130, 246, 0.4) 60%,
    rgba(147, 197, 253, 0.3)
  );
  box-shadow: 
    inset 0 0 25px rgba(255, 255, 255, 0.7),
    inset -5px -5px 20px rgba(14, 165, 233, 0.4),
    0 0 25px rgba(14, 165, 233, 0.3),
    0 5px 15px rgba(0, 0, 0, 0.1);
  animation: wobble 3s ease-in-out infinite, shimmer 2s ease-in-out infinite;
  transition: transform 0.2s ease-out;
  cursor: pointer;
  opacity: 0.85;
}

.bubble-inner {
  position: absolute;
  top: 15%;
  left: 20%;
  width: 35%;
  height: 35%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 40% 40%,
    rgba(255, 255, 255, 0.9),
    transparent 70%
  );
  animation: shine 2.5s ease-in-out infinite;
}

.bubble-highlight {
  position: absolute;
  bottom: 25%;
  right: 30%;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.7),
    transparent 60%
  );
  animation: shine 2.5s ease-in-out infinite;
  animation-delay: 1.2s;
}

@keyframes wobble {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-8px) translateY(-5px);
  }
  75% {
    transform: translateX(8px) translateY(5px);
  }
}

@keyframes shimmer {
  0%, 100% {
    box-shadow: 
      inset 0 0 25px rgba(255, 255, 255, 0.7),
      inset -5px -5px 20px rgba(14, 165, 233, 0.4),
      0 0 25px rgba(14, 165, 233, 0.3),
      0 5px 15px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 
      inset 0 0 30px rgba(255, 255, 255, 0.8),
      inset -5px -5px 25px rgba(59, 130, 246, 0.5),
      0 0 35px rgba(59, 130, 246, 0.4),
      0 5px 20px rgba(0, 0, 0, 0.15);
  }
}

@keyframes shine {
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

.bubble:hover {
  transform: scale(1.15);
  opacity: 1;
}
</style>
