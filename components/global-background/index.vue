<script setup lang="ts">
const colorMode = useColorMode()
const bgClass = computed(() => {
  return colorMode.preference === 'dark'
    ? 'linear-bkg-dark'
    : 'linear-bkg-light'
})
</script>

<template>
  <div class="app-fullpage-wrapper">
    <div class="stars-wrapper" :class="bgClass">
      <template v-if="colorMode.preference === 'dark'">
        <svg
          class="stars"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <circle
            v-for="_ in 160"
            :key="_"
            class="star"
            :cx="Math.round(Math.random() * 10000) / 100 + '%'"
            :cy="Math.round(Math.random() * 10000) / 100 + '%'"
            :r="Math.round((Math.random() + 0.5) * 10) / 10"
          />
        </svg>
        <svg
          class="extras"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
              <stop
                offset="0%"
                :style="{ 'stop-color': 'rgba(255,255,255,.8)' }"
              />
              <stop
                offset="100%"
                :style="{ 'stop-color': 'rgba(255,255,255,0)' }"
              />
            </radialGradient>
          </defs>
          <g transform="rotate(-135)">
            <ellipse
              class="comet comet-a"
              fill="url(#comet-gradient)"
              cx="0"
              cy="0"
              rx="150"
              ry="2"
            />
          </g>
          <g transform="rotate(20)">
            <ellipse
              class="comet comet-b"
              fill="url(#comet-gradient)"
              cx="100%"
              cy="0"
              rx="150"
              ry="2"
            />
          </g>
          <g transform="rotate(300)">
            <ellipse
              class="comet comet-c"
              fill="url(#comet-gradient)"
              cx="40%"
              cy="100%"
              rx="150"
              ry="2"
            />
          </g>
        </svg>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@property --each-star-bg-0 {
  syntax: '<color>';
  initial-value: #16161d;
  inherits: false;
}

@property --each-star-bg-1 {
  syntax: '<color>';
  initial-value: #1f1f3a;
  inherits: false;
}

@property --each-star-bg-2 {
  syntax: '<color>';
  initial-value: #3b2f4a;
  inherits: false;
}

.linear-bkg {
  &-dark {
    background: linear-gradient(
      var(--each-star-bg-0),
      var(--each-star-bg-1),
      var(--each-star-bg-2)
    );
  }

  &-light {
    --each-star-bg-0: #f8f8f8;
    --each-star-bg-1: #e0e0f6;
    --each-star-bg-2: #d6c6ea;
    background: linear-gradient(
      var(--each-star-bg-0) 30%,
      var(--each-star-bg-1) 75%,
      var(--each-star-bg-2)
    );
  }
}

.app-fullpage-wrapper {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
}

.stars-wrapper {
  transition:
    --each-star-bg-0 0.2s,
    --each-star-bg-1 0.4s,
    --each-star-bg-2 0.8s;
  z-index: -1;
  position: absolute;
  inset: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .stars {
    position: absolute;

    @keyframes twinkle {
      25% {
        opacity: 0;
      }
    }
  }
}

.star {
  fill: white;
  animation: twinkle 5s ease-in-out infinite;

  &:nth-child(3n) {
    animation-delay: 1s;
    opacity: 0.8;
  }

  &:nth-child(7n) {
    animation-delay: 2s;
    opacity: 0.6;
  }

  &:nth-child(13n) {
    animation-delay: 3s;
    opacity: 0.4;
  }

  &:nth-child(19n) {
    animation-delay: 4s;
    opacity: 0.2;
  }
}

.comet {
  transform-origin: center center;
  animation: comet 10s linear infinite;

  @keyframes comet {
    0%,
    40% {
      transform: translateX(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    60%,
    100% {
      transform: translateX(-100vmax);
      opacity: 0;
    }
  }
}

.comet-b {
  animation-delay: -3.3s;
}

.comet-c {
  animation-delay: -5s;
}
</style>
