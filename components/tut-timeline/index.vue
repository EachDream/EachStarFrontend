<script setup lang="ts">
const copyFeedback = ref(false)
const copy = async (val: any) => {
  if (copyFeedback.value) {
    return;
  }
  copyFeedback.value = true
  await navigator.clipboard.writeText(val)
  await new Promise(resolve => setTimeout(resolve, 2000))
  copyFeedback.value = false
}
</script>

<template>
  <ul class="tut-timeline">
    <li>
      <div class="timeline-start">
        注册 EachStar
      </div>
      <Icon
        class="timeline-middle"
        name="mingcute:user-4-fill"
      />
      <div class="timeline-end timeline-box">
        点击右上角注册账号<br>
        或登录现有账号
      </div>
      <hr>
    </li>
    <li>
      <hr>
      <div class="timeline-start">
        <div class="flex flex-col items-center">
          <div>认证账号</div>
          <div>GitHub / Gitee</div>
        </div>
      </div>
      <Icon
        class="timeline-middle"
        name="mingcute:bookmarks-fill"
      />
      <div class="timeline-end timeline-box">
        通过 OAuth 认证<br>
        链接 GitHub / Gitee
      </div>
      <hr>
    </li>
    <li>
      <hr>
      <div class="timeline-start">
        点赞 / 发布项目
      </div>
      <Icon
        class="timeline-middle"
        name="mingcute:thumb-up-2-fill"
      />
      <div class="timeline-end timeline-box">
        通过为他人点赞积累星币<br>
        于卡片页面 / 个人中心<br>
        使用免费的星币发布自己的项目
      </div>
      <hr>
    </li>
    <li>
      <hr>
      <div class="timeline-start">
        持续学习与进步
      </div>
      <Icon
        class="timeline-middle"
        name="mingcute:message-3-fill"
      />
      <div class="timeline-end timeline-box">
        加入 QQ 群讨论更多<br>
        认识志同道合的开发者<br>
        <transition
          name="fade"
          mode="out-in"
        >
          <a
            v-if="copyFeedback"
            class="link-copiable"
          >
            复制成功 !
          </a>
          <a
            v-else
            class="link-copiable"
            @click.stop="copy('184109839')"
          >
            <Icon
              name="mingcute:qq-fill"
              size="18"
            />
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
  transition: all 0.3s;
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
