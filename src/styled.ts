import { css as emotionCss } from "@emotion/core"
import styled, { CreateStyled } from "@emotion/styled"

export default styled as CreateStyled<Theme>
export const css = emotionCss

export interface Theme {
  display: "cozy" | "compact"
  accent: string
  background: string
  border: string
  text: string
  link: string
  input: string
  action: string
  mention: {
    normal: string
    normalText: string
    hover: string
    hoverText: string
  }
  spoiler: string
  scrollThumb: string
  scrollTrack: string
  button: {
    enabled: string
    disabled: string
    filled: string
  }
  message: {
    username: string
    content: string
    timestamp: string
  }
  embed: {
    background: string
    pillDefaultFill: string
    border: string
    author: {
      name: string
    }
    title: {
      normal: string
      link: string
    }
    description: string
    field: {
      name: string
      value: string
    }
    footer: {
      text: string
      separator: string
    }
  }
  code: {
    background: string
    border: string
    text: string
    comment: string
    formula: string
  }
  attachment: {
    background: string
    border: string
    fileName: string
    fileSize: string
    download: string
    downloadHover: string
  }
}
