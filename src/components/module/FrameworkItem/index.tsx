import { LinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Text, Link, Button } from '@chakra-ui/react'
import type { BoxProps, ChakraProps } from '@chakra-ui/react'
import { NextComponentType, NextPageContext } from 'next'
import { useMemo } from 'react'
import { FaNpm, FaGithub } from 'react-icons/fa'
import { FrameworkType } from '../../../types/framework'
import { StarBadge } from '../StarBadge/'

type FrameworkItemProps = {
  framework: FrameworkType
  active?: boolean
  chakra?: BoxProps
  onClickPreview?: () => void
}

export const FrameworkItem: NextComponentType<
  NextPageContext,
  {},
  FrameworkItemProps
> = ({ framework, active = false, chakra, onClickPreview }) => {
  const getRootStyles = useMemo(() => {
    return (): ChakraProps => {
      console.log('memo: getRootStyles')
      return {
        position: 'relative',
        _before: {
          content: '""',
          display: 'block',
          bg: 'blue.500',
          w: '8px',
          h: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          transform: active ? 'translateX(0px)' : 'translateX(-8px)',
          transition: 'transform 0.3s',
        },
      }
    }
  }, [active])

  return (
    <Box p={4} {...getRootStyles()} {...chakra}>
      <Heading as={'h2'} mb={1} fontSize={'xl'}>
        {framework.name}
      </Heading>

      {framework.description && (
        <Text mb={2} lineHeight={1.2}>
          {framework.description}
        </Text>
      )}

      <Flex alignItems={'center'}>
        {framework.officialUrl && (
          <Link href={framework.officialUrl} target='_blank' mr={2}>
            <LinkIcon />
          </Link>
        )}
        {framework.githubRepository && (
          <Link
            href={`https://github.com/${framework.githubRepository}`}
            target='_blank'
            mr={2}
          >
            <FaGithub />
          </Link>
        )}
        {framework.npmUrl && (
          <Link href={framework.npmUrl} target='_blank' mr={2}>
            <FaNpm />
          </Link>
        )}

        {framework.stat?.starCount && (
          <StarBadge count={framework.stat.starCount} />
        )}

        <Button size={'sm'} ml={'auto'} onClick={() => onClickPreview?.()}>
          Preview
        </Button>
      </Flex>
    </Box>
  )
}
