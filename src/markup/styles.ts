import styled, { css } from "styled-components"

export const MarkupContainer = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.375;

  ${({ theme }) =>
    theme.appearance.color === "light" &&
    css`
      @media (max-resolution: 1dppx) {
        font-weight: 500;
      }
    `}
`

export const Code = styled.code`
  padding: 0.2em;
  margin: -0.2em 0;

  border-radius: 3px;
  background: ${({ theme }) => theme.background.secondary};

  font-size: 0.85em;
  line-height: 1.125rem;

  white-space: pre-wrap;
`

export const Emoji = styled.img<{ big?: boolean }>`
  width: 1.375em;
  height: 1.375em;

  object-fit: contain;
  vertical-align: bottom;

  ${({ theme, big }) =>
    theme.appearance.display === "cozy" &&
    big &&
    css`
      width: 3rem;
      height: 3rem;
      min-height: 3rem;
    `}
`

export const Mention = styled.span`
  padding: 0 2px;
  cursor: pointer;

  background: ${({ theme }) =>
    theme.appearance.color === "dark" ? "rgba(114, 137, 218, 0.1)" : "#f1f3fb"};
  color: ${({ theme }) => theme.accent.primary};
  font-weight: 500;

  &:hover {
    background: ${({ theme }) =>
      theme.appearance.color === "dark"
        ? "rgba(114, 137, 218, 0.7)"
        : theme.accent.primary};
    color: #ffffff;
  }
`

export const Spoiler = styled.span`
  background: ${({ theme }) =>
    theme.appearance.color === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)"};
  border-radius: 3px;
`

export const BlockQuoteContainer = styled.div`
  display: flex;
`

export const BlockQuoteDivider = styled.div`
  width: 4px;
  min-width: 4px;
  margin: 8px 0;
  border-radius: 4px;

  background: ${({ theme }) => theme.interactive.muted};
`

export const BlockQuoteContent = styled.blockquote`
  text-indent: 0;

  max-width: 90%;

  margin: 8px 0;
  padding: 0 8px 0 12px;
`

export const CodeBlockContainer = styled.pre`
  max-width: 90%;
  margin: 6px 0 0;
  padding: 7px;

  background: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.background.tertiary};
  border-radius: 4px;

  color: ${({ theme }) => theme.header.secondary};
  font-size: 0.875rem;
  line-height: 1.125rem;

  white-space: pre-wrap;

  & .hljs-comment,
  & .hljs-quote {
    color: ${({ theme }) => theme.interactive.muted};
  }

  & .hljs-addition,
  & .hljs-keyword,
  & .hljs-selector-tag {
    color: #859900;
  }

  & .hljs-doctag,
  & .hljs-literal,
  & .hljs-meta .hljs-meta-string,
  & .hljs-number,
  & .hljs-regexp,
  & .hljs-string {
    color: #2aa198;
  }

  & .hljs-name,
  & .hljs-section,
  & .hljs-selector-class,
  & .hljs-selector-id,
  & .hljs-title {
    color: #268bd2;
  }

  & .hljs-attr,
  & .hljs-attribute,
  & .hljs-class .hljs-title,
  & .hljs-template-variable,
  & .hljs-type,
  & .hljs-variable {
    color: #b58900;
  }

  & .hljs-bullet,
  & .hljs-link,
  & .hljs-meta,
  & .hljs-meta .hljs-keyword,
  & .hljs-selector-attr,
  & .hljs-selector-pseudo,
  & .hljs-subst,
  & .hljs-symbol {
    color: #cb4b16;
  }

  & .hljs-built_in,
  & .hljs-deletion {
    color: #dc322f;
  }

  & .hljs-formula {
    background: #073642;
  }

  & .hljs-emphasis {
    font-style: italic;
  }

  & .hljs-strong {
    font-weight: 700;
  }
`
