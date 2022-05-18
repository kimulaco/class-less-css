import type { NextApiRequest, NextApiResponse } from 'next'
import { githubApi } from '../../../utils/github'
import { RepositoryMeta } from '../../../types/repository'

const getRepositoryMeta = async (
  repositoryOwner: string,
  repositoryName: string,
): Promise<RepositoryMeta> => {
  const fullName = `${repositoryOwner}/${repositoryName}`
  const { data } = await githubApi.get(`/repos/${fullName}`)
  return {
    name: data?.name || repositoryName,
    fullName: data?.full_name || repositoryOwner,
    description: data?.description,
    htmlUrl: data?.html_url,
    stargazersCount: data?.stargazers_count,
    license: {
      name: data?.license.name,
      url: data?.license.url,
    },
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{
    statusCode: number
    meta: RepositoryMeta
  }>,
) => {
  const [repositoryOwner, repositoryName] = req.query.slug

  try {
    const meta = await getRepositoryMeta(repositoryOwner, repositoryName)
    return res.status(200).json({
      statusCode: 200,
      meta,
    })
  } catch (error: any) {
    console.error(error)
    return res.status(500).json({
      statusCode: 500,
      message: error?.message ? String(error.message) : 'Server error.',
    })
  }
}

export default handler
