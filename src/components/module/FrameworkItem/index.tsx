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
import { FaLink, FaNpm, FaGithub } from 'react-icons/fa'
import { LinkIcon } from '@chakra-ui/icons'
import { StarBadge } from '../StarBadge/'
import { FrameworkType } from '../../../types/framework'

type FrameworkItemProps = {
  framework: FrameworkType
  chakra?: BoxProps
  onClickPreview: (framework: FrameworkType) => void
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

        {framework.stat?.starCount && (
          <StarBadge count={framework.stat.starCount} />
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
