export type FrameworkStatType = {
  starCount?: number | undefined
  downloadCount?: number | undefined
}

export type FrameworkType = {
  id: string
  name: string
  description?: string
  cdnUrl: {
    default: string
  }
  officialUrl?: string
  githubRepository?: string
  npmUrl?: string
  stat?: FrameworkStatType
}
