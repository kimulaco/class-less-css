import { atom, useRecoilState } from 'recoil'
import { FRAMEWORKS } from '../constants/framework'
import { FrameworkType } from '../types/framework'

export const frameworksState = atom<FrameworkType[]>({
  key: 'frameworks',
  default: FRAMEWORKS,
})

export const useFrameworks = () => {
  const [frameworks, setFrameworks] =
    useRecoilState<FrameworkType[]>(frameworksState)

  const getframework = (
    frameworkId: FrameworkType['id'],
  ): FrameworkType | undefined => {
    return frameworks.find((_framework: FrameworkType) => {
      return _framework.id === frameworkId
    })
  }

  return {
    frameworks,
    setFrameworks,
    getframework,
  }
}
