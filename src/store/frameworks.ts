import Cookies from 'js-cookie'
import { useEffect, useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'
import { FRAMEWORKS } from '../constants/framework'
import { FrameworkType } from '../types/framework'
import { api } from '../utils/api'

const getFrameworkStatCookieId = (id: FrameworkType['id']): string => {
  return `clc_stat_${id}`
}

const parseCookieStat = (v: string): Required<FrameworkType>['stat'] => {
  const json = JSON.parse(v || '{}')
  if (typeof json.starCount !== 'number') {
    throw new Error('The starCount type is invalid')
  }
  if (
    typeof json.downloadCount !== 'number' &&
    typeof json.downloadCount !== 'undefined'
  ) {
    throw new Error('The downloadCount type is invalid')
  }
  return {
    starCount: json.starCount,
    downloadCount: json.downloadCount,
  }
}

export const addFrameworkStat = async (
  framework: FrameworkType,
): Promise<FrameworkType> => {
  const cookieKey = getFrameworkStatCookieId(framework.id)
  const cacheStat = Cookies.get(cookieKey)

  try {
    const data = parseCookieStat(cacheStat || '{}')
    console.log(data)
    return {
      ...framework,
      stat: {
        starCount: data.starCount,
        downloadCount: data.downloadCount,
      },
    }
  } catch (error) {
    // ignore
  }

  try {
    const { data } = await api.get(`/api/stat/${framework.githubRepository}`)
    console.log(data)
    if (data.stat) {
      Cookies.set(cookieKey, JSON.stringify(data.stat), { expires: 1 })
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

export const currentFrameworkState = atom<FrameworkType | undefined>({
  key: 'currentFramework',
  default: undefined,
})

type UseFrameworksProps = {
  defaultId?: string | undefined
}

export const useFrameworks = ({ defaultId }: UseFrameworksProps) => {
  const [frameworks, setFrameworks] =
    useRecoilState<FrameworkType[]>(frameworksState)
  const [currentFramework, setCurrentFramework] = useRecoilState<
    FrameworkType | undefined
  >(currentFrameworkState)

  const updateFrameworksStat = useCallback(async () => {
    const newFrameworks: FrameworkType[] = await Promise.all(
      frameworks.map((_framework: FrameworkType) => {
        return addFrameworkStat(_framework)
      }),
    )
    setFrameworks(newFrameworks)
  }, [frameworks, setFrameworks])

  useEffect(() => {
    const defaultFramework = frameworks.find((_framework: FrameworkType) => {
      return _framework.id === defaultId
    })
    setCurrentFramework(defaultFramework || FRAMEWORKS[0])
  }, [])

  return {
    frameworks,
    setFrameworks,
    currentFramework,
    setCurrentFramework,
    updateFrameworksStat,
  }
}
