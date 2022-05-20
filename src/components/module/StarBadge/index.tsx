import { Flex, Text, Icon } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import { NextComponentType, NextPageContext } from 'next'
import { AiOutlineStar } from 'react-icons/ai'
import { toOmitValue } from '../../../utils/number'

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
      <Icon as={AiOutlineStar} mr={'1'} />
      <Text fontSize={'sm'}>{toOmitValue(count)}</Text>
    </Flex>
  )
}
