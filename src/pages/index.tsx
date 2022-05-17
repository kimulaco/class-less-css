import { useState } from 'react'
import { Box, Flex, Button, Heading, Divider } from '@chakra-ui/react'
import { Previewer } from '../components/module/Previewer/'
import { FrameworkItem } from '../components/module/FrameworkItem/'
import { FRAMEWORKS } from '../constants/framework'
import { Framework } from '../types/framework'

const defaultFrameworkId = Object.keys(FRAMEWORKS)[0]

const IndexPage = () => {
  const [framework, setFramework] = useState<Framework>(
    FRAMEWORKS[defaultFrameworkId],
  )

  return (
    <Flex h={'100vh'}>
      <Box w={'50%'}>
        <Box p={4}>
          <Heading as={'h1'}>Classless Frameworks</Heading>
        </Box>
        <Divider />
        {Object.keys(FRAMEWORKS).map((frameworkId: Framework['id']) => {
          return (
            <>
              <FrameworkItem
                key={`framework-swicher-${frameworkId}`}
                framework={FRAMEWORKS[frameworkId]}
                onClickPreview={() => setFramework(FRAMEWORKS[frameworkId])}
              />
              <Divider key={`framework-swicher-${frameworkId}-divider`} />
            </>
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
