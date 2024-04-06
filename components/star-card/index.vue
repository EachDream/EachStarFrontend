<script setup lang="ts">
import type { IStarCardModel } from '~/types/star-card'

const { t } = useI18n()

const props = defineProps<{
  card: IStarCardModel
}>()
</script>

<template>
  <div class="star-card">
    <figure></figure>
    <div class="card-body">
      <h2 class="card-title">{{ card.title }}</h2>
      <p>{{ card.description }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary"></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.star-card {
  @apply card bg-base-100 shadow-xl;
  @apply h-44 w-56;
}
</style>
