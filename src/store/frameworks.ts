import { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'
import { FRAMEWORKS } from '../constants/framework'
import { FrameworkType } from '../types/framework'
import { api } from '../utils/api'

export const addFrameworkStat = async (
  framework: FrameworkType,
): Promise<FrameworkType> => {
  try {
    const { data } = await api.get(`/api/stat/${framework.githubRepository}`)
    if (data.stat) {
      return {
        ...framework,
        stat: data.stat,
      }
    }
    return { ...framework, stat: {} }
  } catch {
    return { ...framework, stat: {} }
  }
}

export const frameworksState = atom<FrameworkType[]>({
  key: 'frameworks',
  default: FRAMEWORKS,
})

export const currentFrameworkState = atom<FrameworkType>({
  key: 'currentFramework',
  default: FRAMEWORKS[0],
})

export const useFrameworks = () => {
  const [frameworks, setFrameworks] =
    useRecoilState<FrameworkType[]>(frameworksState)
  const [currentFramework, setCurrentFramework] = useRecoilState<FrameworkType>(
    currentFrameworkState,
  )

  const updateFrameworksStat = useCallback(async () => {
    console.log('callback: updateFrameworksStat')
    const newFrameworks: FrameworkType[] = await Promise.all(
      frameworks.map((_framework: FrameworkType) => {
        return addFrameworkStat(_framework)
      }),
    )
    setFrameworks(newFrameworks)
    console.log(newFrameworks)
  }, [frameworks, setFrameworks])

  return {
    frameworks,
    setFrameworks,
    currentFramework,
    setCurrentFramework,
    updateFrameworksStat,
  }
}
