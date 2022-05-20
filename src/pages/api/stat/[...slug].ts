import type { NextApiRequest, NextApiResponse } from 'next'
import { FrameworkStatType } from '../../../types/framework'
import { githubApi } from '../../../utils/github'
import { getSlug } from '../../../utils/server'

type GithubRepositoryStat = {
  starCount: FrameworkStatType['starCount']
}

const getRepositoryStat = async (
  repositoryOwner: string,
  repositoryName: string,
): Promise<GithubRepositoryStat> => {
  const { data } = await githubApi.get(
    `/repos/${repositoryOwner}/${repositoryName}`,
  )
  return {
    starCount: data?.stargazers_count,
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{
    statusCode: number
    stat: FrameworkStatType
    message?: string
  }>,
) => {
  const [repositoryOwner, repositoryName] = getSlug(req.query.slug)

  try {
    const repositoryStat = await getRepositoryStat(
      repositoryOwner,
      repositoryName,
    )
    return res.status(200).json({
      statusCode: 200,
      stat: {
        ...repositoryStat,
      },
    })
  } catch (error: any) {
    return res.status(500).json({
      statusCode: 500,
      stat: {},
      message: error?.message ? String(error.message) : 'Server error.',
    })
  }
}

export default handler
