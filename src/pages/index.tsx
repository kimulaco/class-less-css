import { useEffect, useState } from 'react'
import { Box, Flex, Button, Heading, Divider } from '@chakra-ui/react'
import { Previewer } from '../components/module/Previewer/'
import { FrameworkItem } from '../components/module/FrameworkItem/'
import { useFrameworks } from '../store/frameworks'
import { fetcher } from '../utils/fetcher'
import { Framework } from '../types/framework'

const IndexPage = () => {
  const { frameworks, setFrameworkMeta } = useFrameworks()
  const [framework, setFramework] = useState<Framework>(
    frameworks[Object.keys(frameworks)[0]],
  )

  const getRepositoryMeta = async (framework: Framework) => {
    const response = await fetcher(
      `/api/repository/${framework.githubRepository}`,
    )
    setFrameworkMeta(framework.id, response.meta)
  }

  useEffect(() => {
    getRepositoryMeta(framework)
  }, [framework])

  return (
    <Flex h={'100vh'}>
      <Box w={'50%'}>
        <Box p={4}>
          <Heading as={'h1'} fontSize={'3xl'}>
            Classless Frameworks
          </Heading>
        </Box>
        <Divider />
        {Object.keys(frameworks).map((frameworkId: Framework['id']) => {
          return (
            <Box key={`framework-swicher-${frameworkId}`}>
              <FrameworkItem
                framework={frameworks[frameworkId]}
                onClickPreview={() => setFramework(frameworks[frameworkId])}
              />
              <Divider />
            </Box>
          )
        })}
      </Box>

      <Flex w={'50%'}>
        <Previewer
          iframeSrc={'/example.html'}
          cssCdn={framework.cdnUrl.default}
          chakra={{
            borderLeft: '1px solid',
          }}
        />
      </Flex>
    </Flex>
  )
}

export default IndexPage
