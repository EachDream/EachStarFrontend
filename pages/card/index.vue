<script setup lang="ts">
import { generateMockStarCardData } from '~/mock/star-card'
import type { IStarCardModel } from '~/types/star-card'

const { t } = useI18n()

const cards = ref<IStarCardModel[]>(generateMockStarCardData(30))
</script>

<template>
  <div class="cards">
    <div class="cards-title">{{ t('card.title') }}</div>
    <div class="cards-description">{{ t('card.description') }}</div>
    <div class="cards-list">
      <div class="cards-item" v-for="(c, i) in cards" :key="i">
        <StarCard class="cards-item__content" :card="c" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards {
  @apply flex flex-col items-start mt-[50px];
  @apply mx-8 md:mx-48;
  transition: all 0.3s ease;

  &-title {
    @apply text-3xl font-bold;
  }

  &-description {
    @apply text-xl mt-4 text-base-content/60;
  }

  &-list {
    @apply mt-4;
    @apply flex items-center flex-wrap;
  }

  &-item {
    @apply h-48 py-1.5 lg:p-3 lg:px-4;
    @apply w-full lg:w-1/2 box-border;
    transition: all 0.3s ease;

    &__content {
      @apply w-full h-full;
    }
  }
}
</style>
