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
    <div v-show="!isMobile" class="flex-1 gap-1 lg:gap-4 flex justify-center">
      <NuxtLink
        class="link tooltip tooltip-bottom"
        data-tip="回到 EachStar 首页"
        to="/"
      >
        <Icon name="mingcute:home-3-line" />
        <span class="link__text">首页</span>
      </NuxtLink>
      <NuxtLink
        class="link tooltip tooltip-bottom"
        data-tip="浏览 EachStar 卡片"
        to="/card"
      >
        <Icon name="mingcute:album-2-line" />
        <span class="link__text">卡片</span>
      </NuxtLink>
      <NuxtLink
        class="link tooltip tooltip-bottom"
        data-tip="了解 EachStar"
        to="/about"
      >
        <Icon name="mingcute:information-line" />
        <span class="link__text">关于</span>
      </NuxtLink>
    </div>

    <!-- profile / settings -->
    <div class="flex items-center">
      <ThemeController
        v-show="!isMobile"
        class="tooltip tooltip-bottom"
        data-tip="切换颜色模式"
        size="22"
        type="TOGGLE"
      />
      <ProfileDrawer
        ><div class="text-lg truncate">你好, Nesb01t !</div></ProfileDrawer
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  @apply backdrop-blur-lg;
  @apply px-2 md:px-44;
  @apply flex justify-between;
  max-width: 100%;
  transition: all 0.15s ease;

  .logo {
    @apply btn btn-ghost;
    @apply text-2xl lg:text-3xl;

    &__img {
      @apply h-8;
    }
  }

  .link {
    @apply btn btn-ghost;
    @apply text-2xl lg:text-lg;
    transition: all 0.3s ease;

    &__text {
      @apply hidden lg:inline;
    }
  }
}
</style>
