<script setup lang="ts">
import Profile from '~/components/profile-drawer/profile.vue'

const toggleBtnEl = ref<HTMLInputElement>()
const close = async () => {
  toggleBtnEl.value?.click()
}
</script>

<template>
  <div class="drawer drawer-end">
    <input
      id="my-drawer"
      ref="toggleBtnEl"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="drawer-content">
      <label for="my-drawer" class="btn btn-ghost">
        <slot />
      </label>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      />
      <ul class="menu w-[600px] h-full p-0 bg-base-100 text-base-content">
        <Profile @close="close" />
      </ul>
    </div>
  </div>
</template>
