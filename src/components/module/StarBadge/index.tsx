import { NextComponentType, NextPageContext } from 'next'
import { Flex, FlexProps, Text } from '@chakra-ui/react'
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
    <Flex alignItems={'center'}>
      <AiOutlineStar />
      <Text>{count}</Text>
    </Flex>
  )
}
