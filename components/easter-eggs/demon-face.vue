<script setup lang="ts">
const props = defineProps<{
  size?: number | string
}>()

const fontSize = computed(() => {
  if (!props.size) {
    return
  }
  return `${props.size}px`
})
</script>

<template>
  <label class="swap swap-flip" :style="{ fontSize }">
    <input type="checkbox" />
    <div class="swap-on">😈</div>
    <div class="swap-off">😇</div>
  </label>
</template>

<style scoped></style>
