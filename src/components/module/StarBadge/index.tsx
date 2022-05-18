import { Flex, Text } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import { NextComponentType, NextPageContext } from 'next'
import { AiOutlineStar } from 'react-icons/ai'

type StarBadgeProps = {
  count: number
  chakra?: FlexProps
}

export const StarBadge: NextComponentType<
  NextPageContext,
  {},
  StarBadgeProps
> = ({ count, chakra }) => {
  return (
    <Flex alignItems={'center'} {...chakra}>
      <AiOutlineStar />
      <Text>{count}</Text>
    </Flex>
  )
}
