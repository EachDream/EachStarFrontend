<script setup lang="ts">
const props = defineProps<{
  size?: string | number
}>()

// 选择语言
const { locale, setLocale } = useI18n()
const select = (lang: string) => {
  setLocale(lang)
}
</script>

<template>
  <div class="locale-controller">
    <DropDown>
      <template #default>
        <Icon
          :style="{ width: size, height: size }"
          name="ion:language"
          class="swap-on fill-current"
        />
      </template>
      <template #items>
        <li @click="select('en')"><a>English</a></li>
        <li @click="select('zh')"><a>简体中文</a></li>
      </template>
    </DropDown>
  </div>
</template>

<style>
.locale-controller {
  @apply flex items-center justify-center;
}
</style>
