import React from 'react'
import { Message as MessageType } from '../../App'
import * as S from '../../styled'

interface MessageProps {
    message: MessageType
}

function Message({ message}: MessageProps, ref: React.Ref<HTMLDivElement> | null): JSX.Element {
  return (
    <S.Message ref={ref} owner={message.owner}>
        <figure>
          <span></span>
        </figure>
        <article>
          <p>{ message.text }</p>
        </article>
        
    </S.Message>
  )
}

const forwardEl = React.forwardRef(Message);

export default forwardEl