import { useEffect, useState } from 'react'
import { Box, Flex, Button, Heading, Divider } from '@chakra-ui/react'
import { Previewer } from '../components/module/Previewer/'
import { FrameworkItem } from '../components/module/FrameworkItem/'
import { useFrameworks } from '../store/frameworks'
import { fetcher } from '../utils/fetcher'
import { Framework, Frameworks } from '../types/framework'

const IndexPage = () => {
  const { frameworks, setFrameworks } = useFrameworks()
  const [framework, setFramework] = useState<Framework>(
    frameworks[Object.keys(frameworks)[0]],
  )

  const getRepositoryMeta = async (framework: Framework) => {
    const newFrameworks: Frameworks = {}
    await Promise.all(
      Object.keys(frameworks).map((_frameworkId: Framework) =>
        (async () => {
          const _framework = frameworks[_frameworkId]
          try {
            const response = await fetcher(
              `/api/repository/${_framework.githubRepository}`,
            )
            if (response.meta) {
              newFrameworks[_frameworkId] = {
                ..._framework,
                meta: response.meta,
              }
            }
          } catch {}
          if (!newFrameworks[_frameworkId]) {
            newFrameworks[_frameworkId] = _framework
          }
        })(),
      ),
    )
    console.log(newFrameworks)
    setFrameworks(newFrameworks)
  }

  useEffect(() => {
    getRepositoryMeta()
  }, [])

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
