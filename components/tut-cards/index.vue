<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div class="tut-cards">
    <TutCardsCard
      class="tut-cards__item"
      :title="t('tut-card.beginner.title')"
      :description="t('tut-card.beginner.description')"
      :btn-text="t('tut-card.beginner.btnText')"
    />
    <TutCardsCard
      class="tut-cards__item"
      :title="t('tut-card.intermediate.title')"
      :description="t('tut-card.intermediate.description')"
      :btn-text="t('tut-card.intermediate.btnText')"
    />
    <TutCardsCard
      class="tut-cards__item"
      :title="t('tut-card.advanced.title')"
      :description="t('tut-card.advanced.description')"
      :btn-text="t('tut-card.advanced.btnText')"
    />
  </div>
</template>

<style lang="scss" scoped>
.tut-cards {
  @apply w-full flex gap-4 flex-wrap md:flex-nowrap;

  &__item {
    @apply w-full md:w-1/3;
  }
}
</style>
