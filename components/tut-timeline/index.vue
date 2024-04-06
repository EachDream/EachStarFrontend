<script setup lang="ts">
const { t } = useI18n()

const copyFeedback = ref(false)
const copy = async (val: any) => {
  if (copyFeedback.value) {
    return
  }
  copyFeedback.value = true
  await navigator.clipboard.writeText(val)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  copyFeedback.value = false
}
</script>

<template>
  <ul class="tut-timeline">
    <li>
      <div class="timeline-start">{{ t('tut-timeline.register.title') }}</div>
      <Icon class="timeline-middle" name="mingcute:user-4-fill" />
      <div class="timeline-end timeline-box">
        {{ t('tut-timeline.register.line1') }}<br />
        {{ t('tut-timeline.register.line2') }}
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-start">
        <div class="flex flex-col items-center">
          <div>{{ t('tut-timeline.auth.title') }}</div>
          <div>GitHub / Gitee</div>
        </div>
      </div>
      <Icon class="timeline-middle" name="mingcute:bookmarks-fill" />
      <div class="timeline-end timeline-box">
        {{ t('tut-timeline.auth.line1') }}<br />
        {{ t('tut-timeline.auth.line2') }}
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-start">{{ t('tut-timeline.like.title') }}</div>
      <Icon class="timeline-middle" name="mingcute:thumb-up-2-fill" />
      <div class="timeline-end timeline-box">
        {{ t('tut-timeline.like.line1') }}<br />
        {{ t('tut-timeline.like.line2') }}<br />
        {{ t('tut-timeline.like.line3') }}
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-start">{{ t('tut-timeline.learn.title') }}</div>
      <Icon class="timeline-middle" name="mingcute:message-3-fill" />
      <div class="timeline-end timeline-box">
        {{ t('tut-timeline.learn.line1') }}<br />
        {{ t('tut-timeline.learn.line2') }}<br />
        <transition name="fade" mode="out-in">
          <a v-if="copyFeedback" class="link-copiable">{{
            t('tut-timeline.learn.copiedText')
          }}</a>
          <a v-else class="link-copiable" @click.stop="copy('184109839')">
            <Icon name="mingcute:qq-fill" size="18" />
            184109839
          </a>
        </transition>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.tut-timeline {
  @apply timeline timeline-vertical lg:timeline-horizontal;

  li {
    @apply gap-1 text-lg;

    .timeline-middle {
      @apply h-6 w-6;
    }

    .timeline-end {
      @apply p-4;
    }
  }
}

.link-copiable {
  @apply flex items-center gap-1 cursor-pointer text-primary;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
