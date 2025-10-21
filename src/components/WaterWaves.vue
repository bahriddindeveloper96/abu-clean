<template>
  <div class="waves-container">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(14, 165, 233, 0.1);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(14, 165, 233, 0);stop-opacity:0" />
        </linearGradient>
      </defs>
      
      <path 
        class="wave wave1"
        fill="url(#waveGradient)" 
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
      
      <path 
        class="wave wave2"
        fill="url(#waveGradient)" 
        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
      
      <path 
        class="wave wave3"
        fill="url(#waveGradient)" 
        d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
</template>

<script setup>
</script>

<style scoped>
.waves-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  pointer-events: none;
  overflow: hidden;
}

.waves {
  width: 100%;
  height: 100%;
}

.wave {
  animation: wave-animation 15s ease-in-out infinite;
  transform-origin: center;
}

.wave1 {
  animation-duration: 20s;
  opacity: 0.3;
}

.wave2 {
  animation-duration: 15s;
  animation-delay: -5s;
  opacity: 0.4;
}

.wave3 {
  animation-duration: 25s;
  animation-delay: -10s;
  opacity: 0.2;
}

@keyframes wave-animation {
  0%, 100% {
    transform: translateX(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) scaleY(1.1);
  }
}
</style>
