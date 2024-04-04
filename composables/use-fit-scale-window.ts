import { minScreenWidth } from './use-breakpoint'

export const useFitScaleWindow = () => {
  const { width } = useWindowSize()
  const scale: ComputedRef<number> = computed(
    () => width.value / minScreenWidth,
  )

  const scaleStyle: ComputedRef = computed(() => {
    if (scale.value < 1) {
      return {
        transform: `scale(${scale.value})`,
        transformOrigin: 'top left',
      }
    } else {
      return undefined
    }
  })

  return { scale, style: scaleStyle }
}
