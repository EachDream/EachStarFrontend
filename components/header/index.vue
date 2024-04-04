<script setup lang="ts">
import { useBreakpoint } from '~/composables/use-breakpoint'

const breakpoints = useBreakpoint()
const isMobile: Ref<boolean> = breakpoints.isMobile
</script>

<template>
  <div class="navbar">
    <!-- logo -->
    <NuxtLink class="logo" to="/">
      <img class="logo__img" src="~/assets/logo.png" alt="Logo" />
      EachStar
    </NuxtLink>

    <!-- menu -->
    <div class="flex-1 gap-1 lg:gap-4 flex justify-center">
      <NuxtLink
        class="link tooltip tooltip-bottom"
        data-tip="回到 EachStar 首页"
        to="/"
      >
        <Icon name="mingcute:home-3-line" />
        <span v-show="!isMobile">首页</span>
      </NuxtLink>
      <NuxtLink
        class="link tooltip tooltip-bottom"
        data-tip="浏览 EachStar 卡片"
        to="/card"
      >
        <Icon name="mingcute:album-2-line" />
        <span v-show="!isMobile">卡片</span>
      </NuxtLink>
      <NuxtLink
        class="link tooltip tooltip-bottom"
        data-tip="了解 EachStar"
        to="/about"
      >
        <Icon name="mingcute:information-line" />
        <span v-show="!isMobile">关于</span>
      </NuxtLink>
    </div>

    <!-- profile / settings -->
    <div class="flex items-center gap-2">
      <ThemeController
        class="tooltip tooltip-bottom"
        data-tip="切换颜色模式"
        size="22"
        type="TOGGLE"
      />
      <ProfileDrawer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  @apply backdrop-blur-lg;
  @apply px-2 md:px-44;
  transition: all 0.15s ease;

  .logo {
    @apply btn btn-ghost text-2xl;
    @apply md:text-xl;

    &__img {
      @apply h-8;
    }
  }

  .link {
    @apply btn btn-ghost text-lg;

    * {
      @apply md:mx-[-3px] lg:mx-0;
    }
  }
}
</style>
