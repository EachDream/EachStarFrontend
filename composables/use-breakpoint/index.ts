export interface BreakpointState {
  /**
   * using simplified breakpoint
   */
  isMobile: boolean
  isNormal: boolean

  /**
   * unused tailwind default breakpoint
   */
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}

export const minScreenWidth = 640
export const mobileBreakpointWidth = 768

export function useBreakpoint() {
  // @todo why use reactive instead of ref?
  const state = reactive<BreakpointState>({
    isMobile: false,
    isNormal: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  function updateBreakpoints() {
    const screenWidth = window.innerWidth

    state.isMobile = screenWidth < mobileBreakpointWidth
    state.isNormal = screenWidth >= mobileBreakpointWidth

    state.sm =
      screenWidth >= minScreenWidth && screenWidth < mobileBreakpointWidth
    state.md = screenWidth >= mobileBreakpointWidth && screenWidth < 1024
    state.lg = screenWidth >= 1024 && screenWidth < 1280
    state.xl = screenWidth >= 1280
  }

  useEventListener(window, 'resize', updateBreakpoints)
  onMounted(updateBreakpoints)

  // @todo how do toRefs working?
  return {
    ...toRefs(state),
  }
}
