import { Box, Flex, Divider } from '@chakra-ui/react'
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
    <Flex w={'100%'}>
      <Box w={'50%'} overflowY={'auto'}>
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

      <Flex
        w={'50%'}
        borderLeft={'1px solid'}
        borderColor={'gray.300'}
        position={'relative'}
      >
        {frameworks.map((_framework: FrameworkType) => {
          return (
            <Previewer
              key={`framework-preview-${_framework.id}`}
              iframeSrc={'/example.html'}
              cssCdn={_framework.cdnUrl.default}
              chakra={{
                w: '100%',
                h: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: currentFramework.id === _framework.id ? '1' : '0',
                opacity: currentFramework.id === _framework.id ? '1' : '0',
                transition: 'opacity 0.3s',
              }}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default IndexPage
