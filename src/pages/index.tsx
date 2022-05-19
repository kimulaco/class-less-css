import { Box, Flex, Heading, Divider } from '@chakra-ui/react'
import { useEffect } from 'react'
import { FrameworkItem } from '../components/module/FrameworkItem/'
import { Previewer } from '../components/module/Previewer/'
import { useFrameworks } from '../store/frameworks'
import { FrameworkType } from '../types/framework'

const IndexPage = () => {
  const {
    frameworks,
    updateFrameworksStat,
    currentFramework,
    setCurrentFramework,
  } = useFrameworks()

  useEffect(() => {
    updateFrameworksStat()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
                active={_framework.id === currentFramework.id}
                onClickPreview={() => setCurrentFramework(_framework)}
              />
              <Divider />
            </Box>
          )
        })}
      </Box>

      <Flex w={'50%'}>
        <Previewer
          iframeSrc={'/example.html'}
          cssCdn={currentFramework.cdnUrl.default}
          chakra={{
            borderLeft: '1px solid',
          }}
        />
      </Flex>
    </Flex>
  )
}

export default IndexPage
