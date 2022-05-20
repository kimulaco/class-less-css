import { LinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Text, Link, Button, Icon } from '@chakra-ui/react'
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
      return {
        position: 'relative',
        _before: {
          content: '""',
          display: 'block',
          bg: 'blue.500',
          w: '6px',
          h: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          transform: active ? 'translateX(0px)' : 'translateX(-6px)',
          transition: 'transform 0.3s',
        },
      }
    }
  }, [active])

  return (
    <Box p={4} {...getRootStyles()} {...chakra}>
      <Flex mb={2} alignItems={'center'}>
        <Heading as={'h2'} fontSize={'xl'}>
          {framework.name}
        </Heading>

        <Flex alignItems={'center'} ml={'auto'}>
          {framework.officialUrl && (
            <Link
              aria-label='Official Site'
              href={framework.officialUrl}
              target='_blank'
              mr={2}
              lineHeight={'1'}
            >
              <LinkIcon />
            </Link>
          )}
          {framework.githubRepository && (
            <Link
              aria-label='GitHub'
              href={`https://github.com/${framework.githubRepository}`}
              target='_blank'
              mr={2}
            >
              <FaGithub />
            </Link>
          )}
          {framework.npmUrl && (
            <Link
              aria-label='npm'
              href={framework.npmUrl}
              target='_blank'
              w={'20px'}
              h={'20px'}
              mr={2}
            >
              <Icon w={'100%'} h={'100%'} as={FaNpm} />
            </Link>
          )}
        </Flex>
      </Flex>

      {framework.description && (
        <Text mb={2} lineHeight={1.2}>
          {framework.description}
        </Text>
      )}

      <Flex mt={2} alignItems={'center'}>
        <StarBadge
          count={framework.stat?.starCount || 0}
          skeleton={typeof framework.stat?.starCount !== 'number'}
        />

        <Button size={'sm'} ml={'auto'} onClick={() => onClickPreview?.()}>
          Preview
        </Button>
      </Flex>
    </Box>
  )
}
