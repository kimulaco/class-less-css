import { useEffect, useState } from 'react'
import { Box, Flex, Button, Heading, Divider } from '@chakra-ui/react'
import { Previewer } from '../components/module/Previewer/'
import { FrameworkItem } from '../components/module/FrameworkItem/'
import { useFrameworks } from '../store/frameworks'
import { api } from '../utils/api'
import { FrameworkType } from '../types/framework'

const addFrameworkStat = async (
  framework: FrameworkType,
): Promise<FrameworkType> => {
  try {
    const { data } = await api.get(`/api/stat/${framework.githubRepository}`)
    if (data.stat) {
      return {
        ...framework,
        stat: data.stat,
      }
    }
    return framework
  } catch {
    return framework
  }
}

const IndexPage = () => {
  const { frameworks, setFrameworks } = useFrameworks()
  const [framework, setFramework] = useState<FrameworkType>(frameworks[0])

  const getRepositoryStat = async () => {
    const newFrameworks: FrameworkType[] = await Promise.all(
      frameworks.map((_framework: FrameworkType) => {
        return addFrameworkStat(_framework)
      }),
    )
    console.log(newFrameworks)
    setFrameworks(newFrameworks)
  }

  useEffect(() => {
    getRepositoryStat()
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
        {frameworks.map((_framework: FrameworkType) => {
          return (
            <Box key={`framework-swicher-${_framework.id}`}>
              <FrameworkItem
                framework={_framework}
                onClickPreview={() => setFramework(_framework)}
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
