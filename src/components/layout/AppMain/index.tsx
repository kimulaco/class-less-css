import { Flex } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import { NextComponentType, NextPageContext } from 'next'
import type { ReactNode } from 'react'

type AppMainProps = {
  children?: ReactNode
  chakra?: FlexProps
}

export const AppMain: NextComponentType<NextPageContext, {}, AppMainProps> = ({
  children,
  chakra,
}) => {
  return (
    <Flex
      as={'main'}
      w={'100%'}
      h={'calc(100vh - var(--app-header-height))'}
      {...chakra}
    >
      {children}
    </Flex>
  )
}
