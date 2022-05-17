import { useState } from 'react'
import { Box, Flex, Button } from '@chakra-ui/react'
import { Previewer } from '../components/module/Previewer/'
import { FRAMEWORKS, FrameworkData } from '../utils/framework'

const defaultFrameworkId = Object.keys(FRAMEWORKS)[0]

const IndexPage = () => {
  const [framework, setFramework] = useState<FrameworkData>(
    FRAMEWORKS[defaultFrameworkId],
  )

  return (
    <Flex h={'100vh'}>
      <Box w={'50%'}>
        {Object.keys(FRAMEWORKS).map((frameworkId: string) => {
          return (
            <Box key={`framework-swicher-${frameworkId}`}>
              <Button
                bg={framework.id === frameworkId ? 'green.500' : ''}
                onClick={() => setFramework(FRAMEWORKS[frameworkId])}
              >
                {FRAMEWORKS[frameworkId].name}
              </Button>
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
