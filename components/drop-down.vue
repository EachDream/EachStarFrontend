<script setup lang="ts">
const open = ref(false)
const dropdownStyle = computed(() => {
  return {
    visibility: open.value ? 'visible' : 'hidden',
    opacity: open.value ? 1 : 0,
  }
})

const el = ref()
useEventListener('click', (e: Event) => {
  if (open.value && !el.value.contains(e.target)) {
    open.value = false
  }
})
</script>

<template>
  <div class="dropdown dropdown-bottom">
    <div ref="el" @click="open = !open" class="cursor-pointer">
      <slot tabindex="0" role="button" name="default" />
    </div>
    <ul
      tabindex="0"
      :style="dropdownStyle as any"
      @click="open = false"
      @blur="open = false"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
    >
      <slot name="items" />
    </ul>
  </div>
</template>

<style></style>
