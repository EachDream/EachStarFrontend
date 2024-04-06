<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div class="intro">
    <div class="intro-title">{{ t('intro.title') }}</div>
    <div class="intro-card-wrapper">
      <TutCards />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  @apply flex flex-col items-start mt-[50px];
  @apply mx-8 md:mx-48; // 两侧填充
  transition: all 0.3s ease;

  &-title {
    @apply text-3xl font-bold;
  }

  &-card-wrapper {
    @apply mt-4 w-full;
  }
}
</style>
