<template>
  <div class="bubbles-container" @mousemove="handleMouseMove">
    <div 
      v-for="(bubble, index) in bubbles" 
      :key="index"
      class="soap-bubble"
      :style="{
        left: bubble.x + 'px',
        top: bubble.y + 'px',
        width: bubble.size + 'px',
        height: bubble.size + 'px',
        animationDelay: bubble.delay
      }"
    >
      <div class="bubble-shine"></div>
      <div class="bubble-shine-2"></div>
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
  const bubbleCount = 20
  const newBubbles = []
  
  for (let i = 0; i < bubbleCount; i++) {
    newBubbles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 60 + Math.random() * 100,
      delay: `${Math.random() * 3}s`,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
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
    const dy = newY - mouseY.value
    const distance = Math.sqrt(dx * dx + dy * dy)
    const minDistance = 150
    
    if (distance < minDistance) {
      const angle = Math.atan2(dy, dx)
      const force = (minDistance - distance) / minDistance
      newX += Math.cos(angle) * force * 10
      newY += Math.sin(angle) * force * 10
    }
    
    // Chegaralardan qaytish
    if (newX < 0 || newX > window.innerWidth) {
      bubble.vx *= -1
      newX = Math.max(0, Math.min(window.innerWidth, newX))
    }
    if (newY < 0 || newY > window.innerHeight) {
      bubble.vy *= -1
      newY = Math.max(0, Math.min(window.innerHeight, newY))
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  z-index: 1;
  overflow: hidden;
}

.soap-bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.9),
    rgba(14, 165, 233, 0.4) 40%,
    rgba(147, 51, 234, 0.3) 60%,
    rgba(236, 72, 153, 0.2)
  );
  box-shadow: 
    inset 0 0 20px rgba(255, 255, 255, 0.8),
    inset 10px 10px 30px rgba(14, 165, 233, 0.3),
    0 0 30px rgba(14, 165, 233, 0.3),
    0 0 50px rgba(147, 51, 234, 0.2);
  animation: float 4s ease-in-out infinite, shimmer 3s ease-in-out infinite;
  transition: transform 0.3s ease-out;
  cursor: pointer;
  backdrop-filter: blur(2px);
}

.soap-bubble:hover {
  transform: scale(1.1);
}

.bubble-shine {
  position: absolute;
  top: 15%;
  left: 20%;
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.9),
    transparent 60%
  );
  animation: shine 2s ease-in-out infinite;
}

.bubble-shine-2 {
  position: absolute;
  bottom: 20%;
  right: 25%;
  width: 25%;
  height: 25%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.6),
    transparent 70%
  );
  animation: shine 2s ease-in-out infinite;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes shimmer {
  0%, 100% {
    box-shadow: 
      inset 0 0 20px rgba(255, 255, 255, 0.8),
      inset 10px 10px 30px rgba(14, 165, 233, 0.3),
      0 0 30px rgba(14, 165, 233, 0.3),
      0 0 50px rgba(147, 51, 234, 0.2);
  }
  50% {
    box-shadow: 
      inset 0 0 20px rgba(255, 255, 255, 0.9),
      inset 10px 10px 30px rgba(147, 51, 234, 0.4),
      0 0 40px rgba(147, 51, 234, 0.4),
      0 0 60px rgba(236, 72, 153, 0.3);
  }
}

@keyframes shine {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>
