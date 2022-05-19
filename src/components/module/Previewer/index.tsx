import { Box, Flex } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import { NextComponentType, NextPageContext } from 'next'
import { useMemo } from 'react'

const generateSrcDoc = ({
  cssCdn,
  body,
}: {
  cssCdn: string
  body: string
}): string => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
<title>Preview</title>
<link rel="stylesheet" href="${cssCdn}" />
</head>
<body>${body}</body>
</html>`
}

export const DEFAULT_PREVIEWER_BODY = `
<header>
  <h1>Class less CSS Frameworks</h1>
</header>

<main>
<section>
  <h2>Text</h2>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde modi
    laboriosam consectetur temporibus veritatis quibusdam praesentium
    alias. Eos, vitae? Vitae, fugit odio non eos enim corporis distinctio?
    Magnam, minima iusto.
  </p>
  <p><a href="#">Link Text</a></p>
</section>
</main>`

type PreviewerProps = {
  body?: string
  cssCdn?: string
  chakra?: FlexProps
}

export const Previewer: NextComponentType<
  NextPageContext,
  {},
  PreviewerProps
> = ({ body, cssCdn, chakra }) => {
  const srcDoc = useMemo<string>(() => {
    return generateSrcDoc({
      cssCdn: cssCdn || '',
      body: body || '',
    })
  }, [cssCdn, body])

  return (
    <Flex w={'100%'} h={'100%'} {...chakra}>
      <Box as={'iframe'} srcDoc={srcDoc} w={'100%'} />
    </Flex>
  )
}
