import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import Attachment from "../attachment/Attachment"
import { Theme } from "../core/themes"
import Markup from "../markup/Markup"
import { MarkupContainer } from "../markup/styles"
import { FileLike } from "../message/FileLike"
import { Message } from "../message/Message"
import { id } from "../message/uid"
import MessageHeader from "./MessageHeader"
import RichEmbed from "./RichEmbed"

const ScrollContainer = styled.div`
  overflow-y: scroll;
`

const Container = styled.div<{}, Theme>`
  margin: 0 0 0 80px;
  padding: 20px 10px 20px 0;

  font-size: 16px;

  & > ${MarkupContainer} {
    display: inline;
  }

  ${({ theme }) =>
    theme.display === "compact" &&
    css`
      margin: 0 0 0 9ch;
      padding: 10px;

      & > * + * {
        margin-left: 6px;
      }

      & > ${MarkupContainer} {
        margin-left: 4px;
      }
    `}

  ${({ theme }) =>
    theme.mobile &&
    css`
      margin: 0;
      padding: 16px;
    `}
`

const EmbedsContainer = styled.div`
  margin: 0 0 8px;
  padding: 0 4px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

type Props = {
  message: Message
  files: readonly (File | FileLike)[]
}

export default function MessagePreview(props: Props) {
  const { message, files } = props
  const { content, embeds, username, avatarUrl } = message

  return (
    <ScrollContainer>
      <Container>
        <MessageHeader username={username} avatarUrl={avatarUrl} />
        {content && <Markup content={content} jumboable />}
        {embeds && (
          <EmbedsContainer>
            {embeds.map(embed => (
              <RichEmbed embed={embed} key={embed[id]} />
            ))}
          </EmbedsContainer>
        )}
        {files.map(file => (
          <Attachment file={file} key={file.name} />
        ))}
      </Container>
    </ScrollContainer>
  )
}
