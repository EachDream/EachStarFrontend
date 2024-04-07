<script setup lang="ts">
import type { IStarCardModel } from '~/types/star-card'

const { t } = useI18n()

const props = defineProps<{
  card: IStarCardModel
}>()
</script>

<template>
  <div class="star-card">
    <figure>
      <!-- img plugin -->
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ card.title }}</h2>
      <p>{{ card.description }}</p>
    </div>
    <div class="card-actions">
      <button class="btn btn-sm">Star</button>
      <button class="btn btn-sm">Fork</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.star-card {
  @apply card bg-base-100 shadow-xl;
  @apply h-44 w-56;

  .card-actions {
    @apply absolute bottom-0 right-0 w-full;
    @apply flex justify-end gap-6 pr-6;
    @apply overflow-hidden;

    * {
      transform: translateY(5px);
    }
  }
}
</style>
