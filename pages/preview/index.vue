<script setup lang="ts">
import { generateMockStarCardData } from '~/mock/star-card'
import type { IStarCardModel } from '~/types/star-card'

const mockCards = ref<IStarCardModel[]>(generateMockStarCardData(3))

const pickCardMotionClass = (index: 0 | 1 | 2) => {
  return `card-motion-${index}`
}
const hoverCards = ref(false)
</script>

<template>
  <div class="preview">
    <div
      class="preview-block"
      @mouseenter="hoverCards = true"
      @mouseleave="hoverCards = false"
    >
      <StarCard
        v-for="(c, i) in mockCards"
        :key="i"
        :card="c"
        class="mock-card"
        :class="hoverCards ? undefined : pickCardMotionClass(i as 0 | 1 | 2)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  @apply flex flex-col items-center;

  &-block {
    @apply flex justify-center shadow-xl rounded-2xl p-10 overflow-hidden;
    gap: 20px;
  }
}

.mock-card {
  @apply h-60;
  transition: all 0.5s ease;
}
.card-motion {
  &-0 {
    transform: translateX(25%) translateY(35%) rotate(-10deg);
  }
  &-1 {
    transform: translateY(20%);
  }
  &-2 {
    transform: translateX(-25%) translateY(35%) rotate(10deg);
  }
}
</style>
