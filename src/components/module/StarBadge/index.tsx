import { Flex, Box, Icon, Skeleton } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import { NextComponentType, NextPageContext } from 'next'
import { AiOutlineStar } from 'react-icons/ai'
import { toOmitValue } from '../../../utils/number'

type StarBadgeProps = {
  count: number
  skeleton: boolean
  chakra?: FlexProps
}

export const StarBadge: NextComponentType<
  NextPageContext,
  {},
  StarBadgeProps
> = ({ count, skeleton, chakra }) => {
  return (
    <Flex alignItems={'center'} {...chakra}>
      <Icon as={AiOutlineStar} mr={'1'} />
      <Box fontSize={'sm'}>
        {skeleton ? <Skeleton w={'2em'} h={'1em'} /> : toOmitValue(count)}
      </Box>
    </Flex>
  )
}
