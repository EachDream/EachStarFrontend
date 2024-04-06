export interface IAction {
  name: string | string[]
  main: (...args: string[]) => unknown
}

export const Actions: IAction[] = [
  {
    name: 'to intro',
    main: () => {
      useRouter().push({ path: '/intro' })
    },
  },
]
