import { atom, useRecoilState } from 'recoil'
import { FRAMEWORKS } from '../constants/framework'
import { Frameworks } from '../types/framework'

export const frameworksState = atom<Frameworks>({
  key: 'frameworks',
  default: FRAMEWORKS,
})

export const useFrameworks = () => {
  const [frameworks, setFrameworks] =
    useRecoilState<Frameworks>(frameworksState)

  const setFrameworkMeta = (
    frameworkId: Framework['id'],
    meta: Framework['meta'],
  ) => {
    const framework: Framework | undefined = frameworks[frameworkId]
    if (!framework) {
      return
    }
    const newFrameworks: Frameworks = {
      ...frameworks,
      [frameworkId]: {
        ...framework,
        meta,
      },
    }
    setFrameworks(newFrameworks)
  }

  return {
    frameworks,
    setFrameworks,
    setFrameworkMeta,
  }
}
