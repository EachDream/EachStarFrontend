export interface IAction {
  name: string | string[]
  main: (...args: string[]) => unknown
}

export const Actions: IAction[] = [
  {
    name: 'router-intro',
    main: () => {
      useRouter().push({ path: '/intro' })
    },
  },
  {
    name: 'router-preview',
    main: () => {
      useRouter().push({ path: '/preview' })
    },
  },
]
