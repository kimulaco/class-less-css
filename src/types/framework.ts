import { RepositoryMeta } from './repository'

export type Framework = {
  id: string
  name: string
  description?: string
  cdnUrl: {
    default: string
  }
  officialUrl?: string
  githubRepository?: string
  npmUrl?: string
  meta?: RepositoryMeta
}

export type Frameworks = {
  [id: Framework['id']]: Framework
}
