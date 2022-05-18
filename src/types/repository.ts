export type RepositoryMeta = {
  name: string
  fullName: string
  description: string | undefined
  htmlUrl: string | undefined
  stargazersCount: number | undefined
  license: {
    name: string | undefined
    url: string | undefined
  }
}
