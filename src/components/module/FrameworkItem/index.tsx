import { NextComponentType, NextPageContext } from 'next'
import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Text,
  Link,
  Button,
} from '@chakra-ui/react'
import { AiOutlineStar } from 'react-icons/ai'
import { FaLink, FaNpm, FaGithub } from 'react-icons/fa'
import { LinkIcon } from '@chakra-ui/icons'
import { Framework } from '../../../types/framework'

type FrameworkItemProps = {
  framework: Framework
  chakra?: BoxProps
  onClickPreview: (framework: Framework) => void
}

export const FrameworkItem: NextComponentType<
  NextPageContext,
  {},
  FrameworkItemProps
> = ({ framework, chakra, onClickPreview }) => {
  return (
    <Box p={4} {...chakra}>
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

        {framework.meta?.stargazersCount && (
          <Box>
            <AiOutlineStar /> {framework.meta?.stargazersCount}
          </Box>
        )}

        <Button
          size={'sm'}
          ml={'auto'}
          onClick={() => onClickPreview(framework)}
        >
          Preview
        </Button>
      </Flex>
    </Box>
  )
}
