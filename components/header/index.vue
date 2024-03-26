<script setup lang="ts">
</script>

<template>
  <div class="navbar">
    <!-- logo -->
    <div class="flex-1 gap-2">
      <NuxtLink
        class="logo"
        to="/"
      >
        <img
          class="logo__img"
          src="~/assets/logo.png"
          alt="Logo"
        >
        EachStar
      </NuxtLink>
      <NuxtLink
        class="link tooltip tooltip-bottom"
        data-tip="回到 EachStar 首页"
        to="/"
      >
        <Icon name="mingcute:home-3-line" />
        首页
      </NuxtLink>
      <NuxtLink
        class="link tooltip tooltip-bottom"
        data-tip="浏览 EachStar 卡片"
        to="/card"
      >
        <Icon name="mingcute:album-2-line" />
        卡片
      </NuxtLink>
      <NuxtLink
        class="link tooltip tooltip-bottom"
        data-tip="了解 EachStar"
        to="/about"
      >
        <Icon name="mingcute:information-line" />
        关于
      </NuxtLink>
    </div>

    <!-- nav -->
    <div class="flex items-center gap-2">
      <ThemeController
        class="tooltip tooltip-bottom"
        data-tip="切换颜色模式"
        size="22"
        type="toggle"
      />
      <ProfileDrawer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  @apply px-[180px] backdrop-blur-lg;
  background: none;

  .logo {
    @apply btn btn-ghost text-2xl;

    &__img {
      @apply h-[32px];
    }
  }

  .link {
    @apply btn btn-ghost text-lg gap-1;
  }
}
</style>
