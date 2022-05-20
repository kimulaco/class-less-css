import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Divider } from '@chakra-ui/react'
import { useEffect } from 'react'
import { FrameworkItem } from '../components/module/FrameworkItem/'
import {
  Previewer,
  DEFAULT_PREVIEWER_BODY,
} from '../components/module/Previewer/'
import { useFrameworks } from '../store/frameworks'
import { FrameworkType } from '../types/framework'
import { useHash } from '../utils/useHash'
import { useSidebar } from '../utils/useSidebar'

const IndexPage = () => {
  const { hash, setHash } = useHash()
  const {
    sidebarStyle,
    openButtonStyles,
    closeButtonStyles,
    openSidebar,
    closeSidebar,
  } = useSidebar({ baseOpacity: 10 })
  const {
    frameworks,
    updateFrameworksStat,
    currentFramework,
    setCurrentFramework,
  } = useFrameworks({ defaultId: hash })

  const handleChangeCurrentFramework = (_framework: FrameworkType) => {
    setCurrentFramework(_framework)
    setHash(`#${_framework.id}`)
  }

  useEffect(() => {
    updateFrameworksStat()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Flex w={'100%'}>
      <Box
        bg={'white'}
        w={['calc(100% - 60px)', '420px']}
        h={'100%'}
        {...sidebarStyle}
      >
        <Box boxShadow={'lg'} {...openButtonStyles}>
          <IconButton
            aria-label={'Show framework list'}
            borderTopLeftRadius={'0'}
            borderBottomLeftRadius={'0'}
            icon={<HamburgerIcon />}
            onClick={openSidebar}
          />
        </Box>
        <Box overflowY={'auto'}>
          {frameworks.map((_framework: FrameworkType) => {
            return (
              <Box key={`framework-swicher-${_framework.id}`}>
                <FrameworkItem
                  framework={_framework}
                  active={_framework.id === currentFramework?.id}
                  onClickPreview={() =>
                    handleChangeCurrentFramework(_framework)
                  }
                />
                <Divider />
              </Box>
            )
          })}
        </Box>
        <Box boxShadow={'lg'} {...closeButtonStyles}>
          <IconButton
            aria-label={'Close framework list'}
            borderTopLeftRadius={'0'}
            borderBottomLeftRadius={'0'}
            icon={<CloseIcon />}
            onClick={closeSidebar}
          />
        </Box>
      </Box>

      <Flex
        w={['100%', 'calc(100% - 420px)']}
        borderLeft={'1px solid'}
        borderColor={'gray.300'}
        position={'relative'}
      >
        {frameworks.map((_framework: FrameworkType) => {
          return (
            <Previewer
              key={`framework-preview-${_framework.id}`}
              cssCdn={_framework.cdnUrl.default}
              body={DEFAULT_PREVIEWER_BODY}
              chakra={{
                w: '100%',
                h: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: currentFramework?.id === _framework.id ? '1' : '0',
                opacity: currentFramework?.id === _framework.id ? '1' : '0',
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
