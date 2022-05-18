import type { NextApiRequest, NextApiResponse } from 'next'
import { fetcher } from '../../../utils/fetcher'
import { RepositoryMeta } from '../../../types/repository'

const getRepositoryMeta = async (
  repositoryOwner: string,
  repositoryName: string,
): Promise<RepositoryMeta> => {
  const fullName = `${repositoryOwner}/${repositoryName}`
  const response = await fetcher(`https://api.github.com/repos/${fullName}`)
  return {
    name: response?.name || repositoryName,
    fullName: response?.full_name || repositoryOwner,
    description: response?.description,
    htmlUrl: response?.html_url,
    stargazersCount: response?.stargazers_count,
    license: {
      name: response?.license.name,
      url: response?.license.url,
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
