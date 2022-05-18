import { useEffect, useRef, useMemo } from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { Box, Flex, FlexProps } from '@chakra-ui/react'

const CDN_STYLE_ELEMENT_ID = 'classlesscss-cdn'

type PreviewerProps = {
  iframeSrc: string
  cssCdn?: string
  chakra?: FlexProps
}

export const Previewer: NextComponentType<
  NextPageContext,
  {},
  PreviewerProps
> = ({ iframeSrc, cssCdn, chakra }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const updatePreviewStyle = useMemo(() => {
    return () => {
      if (!cssCdn) {
        return
      }
      const iframeDoc = iframeRef?.current?.contentWindow?.document
      const iframeHead = iframeDoc?.head
      if (!iframeHead) {
        return
      }
      const cdnElement: HTMLLinkElement | null = iframeHead.querySelector(
        `link#${CDN_STYLE_ELEMENT_ID}`,
      )
      if (cdnElement) {
        cdnElement.href = cssCdn
      } else {
        const linkElement = iframeDoc.createElement('link')
        linkElement.setAttribute('id', CDN_STYLE_ELEMENT_ID)
        linkElement.setAttribute('rel', 'stylesheet')
        linkElement.setAttribute('href', cssCdn)
        iframeHead.appendChild(linkElement)
      }
    }
  }, [iframeRef, cssCdn])

  useEffect(() => {
    updatePreviewStyle()
  }, [updatePreviewStyle])

  return (
    <Flex w={'100%'} h={'100%'} {...chakra}>
      <Box as={'iframe'} ref={iframeRef} src={iframeSrc} w={'100%'} />
    </Flex>
  )
}
