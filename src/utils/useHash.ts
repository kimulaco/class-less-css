import { useRouter } from 'next/router'
import { useCallback } from 'react'

export type Hash = string
export type SetHash = (newHash: Hash) => void // eslint-disable-line no-unused-vars

const extractHash = (asPath: string): string => {
  return asPath.split('#')[1] ?? ''
}

export const useHash = (): {
  hash: Hash
  setHash: SetHash
} => {
  const router = useRouter()
  const hash = extractHash(router.asPath)

  const setHash = useCallback((newHash: string) => {
    router.replace({ hash: newHash }, undefined, { shallow: true })
  }, [])

  return { hash, setHash }
}
