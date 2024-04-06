<script setup lang="ts">
import { themeChange } from 'theme-change'

const { t } = useI18n()

onMounted(() => {
  themeChange(false)
})

const expanded = ref(false)
const marginTopStyle = computed(() => {
  return {
    marginTop: expanded ? '50px' : '100px',
  }
})
</script>

<template>
  <div class="index-page" :style="marginTopStyle">
    <div class="text-5xl font-bold">{{ t('home.title') }}</div>
    <div class="text-xl">
      <div class="line text-base-content/60">
        {{ t('home.titleline.one') }}<br />
        {{ t('home.titleline.two') }}<br />
        {{ t('home.titleline.three') }}
      </div>
      <transition name="fade" mode="in-out">
        <div v-if="!expanded">
          <div class="line">
            <Icon name="mingcute:folder-star-line" class="index-page-icon" />
            {{ t('home.tagline.one') }}
          </div>
          <div class="line">
            <Icon name="mingcute:user-star-line" class="index-page-icon" />
            {{ t('home.tagline.two') }}
          </div>
          <div class="line">
            <Icon name="mingcute:braces-line" class="index-page-icon" />
            {{ t('home.tagline.three') }}
          </div>
        </div>
      </transition>

      <transition mode="out-in" name="fade">
        <TutTimeline v-if="expanded" @click="expanded = false" />
        <a v-else class="index-page-btn" @click="expanded = true"
          >{{ t('home.tryBtnText') }}
          <Icon
            name="mingcute:arrow-right-circle-fill"
            class="index-page-btn__icon"
          />
        </a>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-page {
  @apply mx-8 md:mx-48; // 两侧填充
  transition: all 0.3s ease;

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
