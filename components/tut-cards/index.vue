<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div>
    {{ t('tut-card') }}
    <TutCardsCard
      :title="t('tut-card.beginner.title')"
      :description="t('tut-card.beginner.description')"
      :btn-text="t('tut-card.beginner.btnText')"
    >
    </TutCardsCard>
  </div>
</template>

<style lang="scss" scoped></style>
