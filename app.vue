<script lang="ts" setup>
import './styles/index.scss'
import { debug } from './composables/use-graph-debugger'

onMounted(() => {
  debug.init()
  // for (let i = 0; i < 10; i++) {
  //   debug.log(`Line ${i}`)
  // }
})

const { style } = useFitScaleWindow()
</script>
<template>
  <div class="app-root">
    <!-- bkg / nav / floating items -->
    <GlobalBackground />
    <Header :style="style" />
    <FloatingMenu />

    <!-- router view -->
    <NuxtPage :style="style" />
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  min-width: 640px;
  box-sizing: content-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
</style>
