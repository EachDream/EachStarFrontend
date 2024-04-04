<script setup lang="ts">
type ThemeControllerType = 'TOGGLE' | 'SELECT'

withDefaults(
  defineProps<{
    type: string
    size?: string | number
  }>(),
  {
    type: 'TOGGLE',
    size: '18px',
  },
)

const colorMode = useColorMode()

watch(
  () => colorMode.value,
  (val) => {
    document?.documentElement?.setAttribute('data-theme', val)
  },
  { immediate: true },
)
</script>

<template>
  <div :style="{ fontSize: size }" class="flex items-center justify-center">
    <label v-if="type == 'TOGGLE'" class="swap swap-rotate">
      <input
        :checked="colorMode.preference !== 'dark'"
        type="checkbox"
        @change="
          colorMode.preference = colorMode.value == 'dark' ? 'light' : 'dark'
        "
      />
      <Icon
        :style="{ width: size, height: size }"
        name="mingcute:sun-line"
        class="swap-on fill-current"
      />
      <Icon
        :style="{ width: size, height: size }"
        name="mingcute:moon-stars-line"
        class="swap-off fill-current"
      />
    </label>

    <select
      v-else-if="type == 'SELECT'"
      v-model="colorMode.preference"
      class="btn"
    >
      <option value="system">系统</option>
      <option value="light">白天</option>
      <option value="dark">暗黑</option>
    </select>
  </div>
</template>

<style></style>
