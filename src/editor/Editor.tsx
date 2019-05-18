import React, { useState } from "react"
import styled from "styled-components"
import ErrorBoundary from "../ErrorBoundary"
import { Message } from "../message/Message"
import EmbedEditor from "./EmbedEditor"
import FileInput from "./FileInput"
import InputField from "./InputField"
import { parseMessage, stringifyMessage } from "./json/convert"
import JsonInput from "./json/JsonInput"
import {
  Action,
  ActionsContainer,
  ActionsHeader,
  Button,
  Container,
  InputLabel,
  TextInput,
} from "./styles"

interface Props {
  message: Message
  onChange: (message: Message) => void
  onToggleTheme: () => void
  onToggleDisplay: () => void
}

const EditorContainer = styled(Container)`
  padding: 8px;
  overflow-y: scroll;

  > *:not(button) {
    flex-grow: 0;
  }
`

const EditorActionsWrapper = styled.div``

const EditorActionsContainer = styled(ActionsContainer)`
  margin: 8px 8px 4px;
`

const ErrorContainer = styled.div`
  margin: 8px;
  padding: 16px;
  border: 1px solid #a54043;
  border-radius: 3px;
`

const ErrorHeader = styled.p`
  margin: 0;
  color: ${(props) => props.theme.action};
  font-weight: 500;
`

const ErrorParagraph = styled.p`
  margin: 8px 0 0;
`

function EditorError() {
  return (
    <ErrorContainer>
      <ErrorHeader>Oops.</ErrorHeader>
      <ErrorParagraph>It looks like an error occurred.</ErrorParagraph>
      <ErrorParagraph>
        If you manually edited the JSON data below, try double checking it.
      </ErrorParagraph>
      <ErrorParagraph>
        If that doesn't work out, reload the page.
      </ErrorParagraph>
    </ErrorContainer>
  )
}

export default function Editor(props: Props) {
  const [webhookUrl, setWebhookUrl] = useState("")
  const [json, setJson] = useState(stringifyMessage(props.message))
  const [errors, setErrors] = useState<string[]>([])
  const [sending, setSending] = useState(false)
  const [files, setFiles] = useState<FileList | undefined>()

  const handleChange = (message: Message) => {
    props.onChange(message)
    const json = stringifyMessage(message)
    setJson(json)
    checkErrors(json)
  }

  const checkErrors = (json: string) => {
    const { message, errors } = parseMessage(json)

    setErrors(errors)
    if (errors.length > 0) console.log("json errors", message)

    return message
  }

  const executeWebhook = async () => {
    setSending(true)

    const formData = new FormData()
    formData.append("payload_json", json)

    if (files)
      for (const [index, file] of Object.entries(files))
        formData.append(`file[${index}]`, file, file.name)

    const response = await fetch(webhookUrl + "?wait=true", {
      method: "POST",
      body: formData,
    })

    setSending(false)

    console.log("execute webhook response", await response.json())
  }

  const isDisabled = (() => {
    if (sending) return true
    if (webhookUrl.trim().length === 0) return true

    const { content, embeds } = props.message
    if ((typeof content === "string" || embeds) && errors.length > 0)
      return true

    if (files && files.length === 0) return true

    return false
  })()

  return (
    <EditorContainer>
      <EditorActionsWrapper>
        <EditorActionsContainer>
          <ActionsHeader>Message editor</ActionsHeader>
          <Action onClick={() => props.onToggleTheme()}>Toggle theme</Action>
          <Action onClick={() => props.onToggleDisplay()}>
            Toggle display
          </Action>
          <Action onClick={() => handleChange({})}>Clear all</Action>
        </EditorActionsContainer>
      </EditorActionsWrapper>
      <Container direction="row">
        <InputLabel>
          Webhook URL
          <TextInput
            value={webhookUrl}
            onChange={(event) => setWebhookUrl(event.target.value)}
            placeholder="https://discordapp.com/api/webhooks/..."
          />
        </InputLabel>
        <Button disabled={isDisabled} onClick={executeWebhook}>
          Send
        </Button>
      </Container>
      <ErrorBoundary onError={() => <EditorError />}>
        <InputField
          value={props.message.content || ""}
          onChange={(content) => handleChange({ ...props.message, content })}
          label="Message content"
          multiline
        />
        <EmbedEditor
          embeds={props.message.embeds || []}
          onChange={(embeds) => handleChange({ ...props.message, embeds })}
        />
      </ErrorBoundary>
      <FileInput onChange={setFiles} />
      <JsonInput
        json={json}
        onChange={(json) => {
          setJson(json)
          const message = checkErrors(json)
          if (message) props.onChange(message)
        }}
        errors={errors}
      />
    </EditorContainer>
  )
}
