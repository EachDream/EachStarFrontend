<script setup lang="ts">
import {themeChange} from "theme-change"

onMounted(() => {
  themeChange(false)
})

const expanded = ref(false)
</script>

<template>
  <div
    class="intro ml-[200px]"
    :style="{
      marginTop: expanded ? '50px' : '200px',
    }"
  >
    <div class="text-5xl font-bold">
      EachStar 开源互助平台
    </div>
    <div class="text-xl">
      <div class="line text-base-content/60">
        你是否困扰于项目的价值难以被他人发掘<br>
        希望找到开发者和用户社群快速积累项目影响力？<br>
        加入 EachStar 开源互助平台, 帮助您和您的开源项目共同快速成长！
      </div>
      <transition
        name="fade"
        mode="in-out"
      >
        <div v-if="!expanded">
          <div class="line">
            <Icon
              name="mingcute:folder-star-line"
              class="intro-icon"
            />
            项目成立初期快速积累影响力, 提升价值
          </div>
          <div class="line">
            <Icon
              name="mingcute:user-star-line"
              class="intro-icon"
            />
            帮助找到志同道合的开源伙伴, 共同成长
          </div>
          <div class="line">
            <Icon
              name="mingcute:braces-line"
              class="intro-icon"
            />
            在初期项目中学习开源新思路, 引爆思绪
          </div>
        </div>
      </transition>

      <transition
        mode="out-in"
        name="fade"
      >
        <TutTimeline
          v-if="expanded"
          @click="expanded = false"
        />
        <a
          v-else
          class="intro-btn"
          @click="expanded = true"
        >马上尝试
          <Icon
            name="mingcute:arrow-right-circle-fill"
            class="intro-btn__icon"
          />
        </a>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.intro {
  transition: all 0.5s;
  .line {
    @apply flex items-center gap-2 my-4;
  }

  &-icon {
    @apply w-8 h-8 rounded-full bg-base-300 p-1.5;
  }

  &-btn {
    @apply btn text-lg shadow-lg my-4;

    &__icon {
      @apply w-5 h-5;
      animation: diffuse 2s infinite;
    }
  }
}

@keyframes diffuse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
