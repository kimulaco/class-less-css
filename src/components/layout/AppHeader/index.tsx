import { Flex, Heading } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import { NextComponentType, NextPageContext } from 'next'

type AppHeaderProps = {
  chakra?: FlexProps
}

export const AppHeader: NextComponentType<
  NextPageContext,
  {},
  AppHeaderProps
> = ({ chakra }) => {
  return (
    <Flex
      as={'header'}
      h={'var(--app-header-height)'}
      px={3}
      py={2}
      bg={'gray.100'}
      borderBottom={'1px solid'}
      borderColor={'gray.300'}
      boxShadow={'sm'}
      alignItems={'center'}
      {...chakra}
    >
      <Heading as={'h1'} fontSize={'2xl'} lineHeight={'1'}>
        Classless CSS
      </Heading>
    </Flex>
  )
}
