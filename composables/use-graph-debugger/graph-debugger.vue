<script setup lang="ts">
import { Actions } from './actions'

defineProps<{
  modelValue?: string[]
}>()

const debugStyleConfig = {
  initPosition: {
    x: 20,
    y: window.innerHeight - 150,
  },
}

// 拖拽
const dragEl = ref()
const { style: draggableStyle } = useDraggable(dragEl, {
  initialValue: debugStyleConfig.initPosition,
})

// 显示开关
const show = ref(false)
const toggleShow = () => {
  show.value = !show.value
}
</script>

<template>
  <div ref="dragEl" class="debug" :style="draggableStyle">
    <div class="debug__title">
      EachStar Debugger
      <a class="debug__btn" @click="toggleShow()">{{
        show ? 'hide' : 'show'
      }}</a>
    </div>
    <div v-if="show" class="debug__lines">
      <div
        v-for="line in modelValue"
        :key="line"
        :data-tip="line"
        class="debug__line"
      >
        {{ line }}
      </div>
    </div>
    <div class="debug__actions">
      <a
        v-for="(a, i) in Actions"
        :key="i"
        class="debug__action"
        @click="a.main()"
        >{{ a.name }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.debug {
  @apply flex flex-col items-start cursor-move;
  user-select: none;
  position: fixed;
  z-index: 9999;
  padding: 10px;

  border-radius: 10px;
  background-color: rgba(69, 69, 70, 0.191);

  &__title {
    @apply text-sm drop-shadow-sm font-semibold mx-2;
  }

  &__btn {
    @apply btn btn-xs border-none shadow-lg ml-2;
  }

  &__lines {
    @apply flex flex-col box-border mt-2 w-full;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2);
    min-width: 187px;
    min-height: 100px;
  }

  &__line {
    @apply text-xs p-1 rounded-md cursor-pointer tooltip tooltip-primary;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.2);
      background-color: rgba(133, 133, 133, 0.5);
    }

    &:active {
      transform: scale(1.12);
    }
  }

  &__actions {
    @apply w-full grid grid-cols-3 grid-flow-row gap-2 p-2 mt-1;
  }

  &__action {
    @apply btn btn-xs border-none shadow-lg;
  }
}
</style>
