<script setup lang="ts">
import DemonFace from "~/components/easter-eggs/demon-face.vue";

const emit = defineEmits<{
  (e: 'close'): void;
}>();

enum ProfileDrawerClickPos {
  PAGE,
}

const click = (pos: ProfileDrawerClickPos) => {
  console.log('click', pos)
  switch (pos) {
    case ProfileDrawerClickPos.PAGE:
      emit('close')
      break;
    default:
      break;
  }
}
</script>

<template>
  <div
    class="profile"
    @click="click(ProfileDrawerClickPos.PAGE)"
  >
    <div class="profile-header">
      <div class="w-full flex items-center">
        <div class="text-2xl font-bold flex-1">
          个人中心
        </div>
        <div
          v-auto-animate
          class="close-tips"
        >
          点击任意空白处关闭个人中心
          <DemonFace />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  @apply flex flex-col h-full p-0 m-0;

  &-header {
    @apply p-8 flex;
  }
}

.close-tips {
  @apply text-base-content flex items-center gap-2;
  animation: opacity-spinning 2s ease-out infinite;
}

@keyframes opacity-spinning {
  0% {
    opacity: 0.8;
  }
  50%{
    opacity: 0.4;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
