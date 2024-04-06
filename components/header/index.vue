<script setup lang="ts">
import { useBreakpoint } from '~/composables/use-breakpoint'

const { t } = useI18n()

const breakpoints = useBreakpoint()
const isMobile: Ref<boolean> = breakpoints.isMobile

const userName = ref('NAME_NEED_REPLACE')
</script>

<template>
  <div class="navbar">
    <!-- logo -->
    <div class="w-1/3">
      <NuxtLink class="logo" to="/">
        <img class="logo__img" src="~/assets/logo.png" alt="Logo" />
        EachStar
      </NuxtLink>
    </div>

    <!-- menu -->
    <div
      v-show="!isMobile"
      class="w-1/3 flex-1 gap-1 lg:gap-4 flex justify-center"
    >
      <NuxtLink
        class="link tooltip tooltip-bottom"
        :data-tip="t('header.tooltip.home')"
        to="/"
      >
        <Icon name="mingcute:home-3-line" />
        <span class="link__text">{{ t('header.home') }}</span>
      </NuxtLink>
      <NuxtLink
        class="link tooltip tooltip-bottom"
        :data-tip="t('header.tooltip.card')"
        to="/card"
      >
        <Icon name="mingcute:album-2-line" />
        <span class="link__text">{{ t('header.card') }}</span>
      </NuxtLink>
      <NuxtLink
        class="link tooltip tooltip-bottom"
        :data-tip="t('header.tooltip.about')"
        to="/about"
      >
        <Icon name="mingcute:information-line" />
        <span class="link__text">{{ t('header.about') }}</span>
      </NuxtLink>
    </div>

    <!-- profile / settings -->
    <div class="w-1/3 flex items-center justify-end gap-3">
      <LocaleController size="20" />
      <ThemeController
        v-show="!isMobile"
        class="tooltip tooltip-bottom"
        data-tip="切换颜色模式"
        size="22"
        type="TOGGLE"
      />
      <ProfileDrawer class="max-w-64"
        ><div class="text-wrap">
          {{ `${t('header.hello')}, ${userName} !` }}
        </div></ProfileDrawer
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
    @apply text-lg;
    transition: all 0.3s ease;

    &__text {
      @apply hidden lg:inline;
    }
  }
}
</style>
