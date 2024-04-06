<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{
  title: string
  description: string
  btnText: string
}>()
</script>

<template>
  <div class="tut-card">
    <figure></figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">{{ btnText }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tut-card {
  @apply card bg-base-100 shadow-xl image-full;
  @apply w-full h-44 md:w-56 md:h-72;
}
</style>
