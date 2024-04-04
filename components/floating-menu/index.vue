<script setup lang="ts">
// 初始化时渐变色
const opacity = ref(0)
const el = ref<HTMLElement | null>(null)
onMounted(() => {
  opacity.value = 1
})

// 回到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// 了解 EachStar
const learnAboutEachStar = () => {
  window.open('https://www.eachstar.com')
}

// 为 EachStar 按赞
const subscribeEachStar = () => {
  window.open('https://www.eachstar.com')
}
</script>

<template>
  <ul ref="el" class="floating-menu" :style="{ opacity }">
    <li>
      <a
        class="tooltip tooltip-left"
        data-tip="回到页面顶部"
        @click="scrollToTop"
      >
        <Icon
          name="mingcute:arrow-up-circle-fill"
          class="floating-menu__icon"
        />
      </a>
    </li>
    <li>
      <a
        class="tooltip tooltip-left"
        data-tip="了解 EachStar 如何帮助您"
        @click="learnAboutEachStar"
      >
        <Icon name="mingcute:book-2-fill" class="floating-menu__icon" />
      </a>
    </li>
    <li>
      <a
        class="tooltip tooltip-left"
        data-tip="为 EachStar 按赞"
        @click="subscribeEachStar"
      >
        <Icon name="mingcute:thumb-up-2-fill" class="floating-menu__icon" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.floating-menu {
  @apply menu bg-base-200 shadow-lg rounded-box absolute m-0 gap-1;
  right: 50px;
  bottom: 20%;
  transition: opacity 1s ease-in;

  &:hover {
    @apply shadow-2xl;
  }

  .tooltip:hover {
    @apply text-primary;
  }

  &__icon {
    @apply w-5 h-5;
  }

  &__drag {
    @apply w-5 h-5 cursor-move text-primary;
  }
}
</style>
