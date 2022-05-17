import { NextComponentType, NextPageContext } from 'next'
import { Box, BoxProps, Flex, Heading, Link, Button } from '@chakra-ui/react'
import { FaNpm, FaGithub } from 'react-icons/fa'
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
      <Heading as={'h2'} mb={3} fontSize={'xl'}>
        {framework.name}
      </Heading>
      <Flex alignItems={'center'}>
        {framework.officialUrl && (
          <Link href={framework.officialUrl} target='_blank' mr={2}>
            <LinkIcon />
          </Link>
        )}
        {framework.githubUrl && (
          <Link href={framework.githubUrl} target='_blank' mr={2}>
            <FaGithub />
          </Link>
        )}
        {framework.npmUrl && (
          <Link href={framework.npmUrl} target='_blank' mr={2}>
            <FaNpm />
          </Link>
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
