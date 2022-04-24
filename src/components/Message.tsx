import React from 'react'
import { Message as MessageType } from '../App'
import * as S from '../styled'

interface MessageProps {
    message: MessageType
}

function Message({ message }: MessageProps): JSX.Element {
  return (
    <S.Message owner={message.owner}>
        { message.text }
    </S.Message>
  )
}

export default Message