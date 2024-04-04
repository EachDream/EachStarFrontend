<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div class="intro">
    <div class="intro-title">您是否参与或拥有开源项目？</div>
    <div class="intro-card-wrapper">
      <TutCards />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  @apply flex flex-col items-start mt-32;
  @apply mx-8 md:mx-48; // 两侧填充
  transition: all 0.3s ease;

  &-title {
    @apply text-3xl font-bold;
  }

  &-card-wrapper {
    @apply mt-4;
  }
}
</style>
