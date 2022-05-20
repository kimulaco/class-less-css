import { useBreakpointValue } from '@chakra-ui/react'
import type { ChakraProps } from '@chakra-ui/react'
import { useState, useMemo } from 'react'

export const useSidebar = ({ baseOpacity }: { baseOpacity: number }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isMobile = useBreakpointValue({ base: true, md: false })

  const openSidebar = useMemo<() => void>(() => {
    return () => {
      setIsOpen(true)
    }
  }, [setIsOpen])

  const closeSidebar = useMemo<() => void>(() => {
    return () => {
      setIsOpen(false)
    }
  }, [setIsOpen])

  const sidebarStyle = useMemo<ChakraProps>(() => {
    return {
      boxShadow: ['lg', 'none'],
      position: ['fixed', 'relative'],
      top: ['var(--app-header-height)', '0'],
      left: '0',
      zIndex: baseOpacity,
      transform: [
        isOpen ? 'translateX(0)' : 'translateX(-100%)',
        'translateX(0)',
      ],
      transition: 'transform 0.3s',
    }
  }, [isOpen, baseOpacity])

  const openButtonStyles = useMemo<ChakraProps>(() => {
    return {
      display: [isOpen ? 'none' : 'block', 'none'],
      position: 'absolute',
      top: '20px',
      right: '-40px',
      zIndex: baseOpacity + 1,
      transition: ['opacity 0.3s', 'none'],
    }
  }, [isOpen, baseOpacity])

  const closeButtonStyles = useMemo<ChakraProps>(() => {
    return {
      display: [isOpen ? 'block' : 'none', 'none'],
      position: 'absolute',
      top: '20px',
      right: '-40px',
      zIndex: baseOpacity + 2,
      transition: ['opacity 0.3s', 'none'],
    }
  }, [isOpen, baseOpacity])

  return {
    isOpen,
    openSidebar,
    openButtonStyles,
    closeSidebar,
    sidebarStyle,
    closeButtonStyles,
  }
}
