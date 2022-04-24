import React from 'react'
import * as S from '../styled'
import { Message as MessageType } from '../App'
import Message from './Message'
import Input from './Input'
import { Socket } from 'socket.io-client';


interface Props {
    message: Array<MessageType>
    socket: Socket
}

function Chat({ message, socket } : Props): JSX.Element {
  return (
    <S.Chat>
        <S.ChatArea> 
          { 
              message.map((item: MessageType, i: number): JSX.Element => (
                  <Message message={ item } key={ i }/>
              ))
          }
        </S.ChatArea>
        <Input socket={socket}/>
    </S.Chat>
  )
}

export default Chat;
