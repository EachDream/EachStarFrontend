export const useIncrement = (initVal: number) => {
  const num = ref(initVal)
  const increment = () => {
    num.value++
  }
  return { num, increment }
}
