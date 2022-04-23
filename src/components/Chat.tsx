import React from 'react'
import * as S from '../styled'

interface Props {
    children: React.ReactNode
}

function Chat({ children }: Props): JSX.Element {
  return (
    <S.Chat>
        { children }
    </S.Chat>
  )
}

export default Chat;
