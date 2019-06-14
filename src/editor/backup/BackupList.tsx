import styled from "@emotion/styled"
import React from "react"

interface Props {
  backups: string[]
  onLoad: (name: string) => void
  onDelete: (name: string) => void
}

const List = styled.ul`
  margin: 0 0 8px;
  padding: 0;
`

const Item = styled.li`
  display: flex;
  align-items: center;

  margin: 0 8px;
  padding: 6px 0;

  border: solid ${({ theme }) => theme.editor.border};
  border-width: 1px 0 1px;

  & + & {
    border-width: 0 0 1px;
  }
`

const BackupName = styled.a`
  margin: 0 auto 0 0;

  color: ${({ theme }) => theme.editor.backups.name};
  font-size: 15px;
  font-weight: 500;

  cursor: pointer;
`

const BackupAction = styled.a`
  color: ${({ theme }) => theme.editor.backups.delete};
  cursor: pointer;
`

export default function BackupList(props: Props) {
  const { backups, onLoad: handleLoad, onDelete: handleDelete } = props

  return (
    <List>
      {backups.map((backup) => (
        <Item key={backup}>
          <BackupName onClick={() => handleLoad(backup)}>{backup}</BackupName>
          <BackupAction onClick={() => handleDelete(backup)}>
            Delete
          </BackupAction>
        </Item>
      ))}
    </List>
  )
}
