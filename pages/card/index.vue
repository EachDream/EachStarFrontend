<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div class="card">
    <div class="card-title">{{ t('card.title') }}</div>
    <div class="card-description">{{ t('card.description') }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply flex flex-col items-start mt-[50px];
  @apply mx-8 md:mx-48;
  transition: all 0.3s ease;

  &-title {
    @apply text-3xl font-bold;
  }

  &-description {
    @apply text-xl mt-4 text-base-content/60;
  }
}
</style>
