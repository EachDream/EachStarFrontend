import { render } from 'vue'
import graphDebuggerVue from './graph-debugger.vue'

const useGraphDebugger = () => {
  const isMounted = ref(false)
  const init = () => {
    isMounted.value = true
    const vNode = h(graphDebuggerVue, {
      modelValue: mockCli.value,
    })
    render(vNode, document.body)
  }

  const mockCli = ref<string[]>([])
  const log = <T>(ctx: T) => {
    console.log(ctx)
    mockCli.value.push(<string>ctx)
  }
  const clear = () => {
    mockCli.value = []
  }

  return {
    init,
    log,
    clear,
  }
}

export const debug = useGraphDebugger()
