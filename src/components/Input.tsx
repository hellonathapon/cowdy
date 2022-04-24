import React, { useState } from 'react'
import { Socket } from 'socket.io-client';
import * as S from '../styled'

interface MessageProps {
    socket: Socket
}

function Input({socket} : MessageProps): JSX.Element {
  const [inputMessage, setInputMessage] = useState<string | undefined>("")
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputMessage === "") {
      return
    }else {
      socket.emit('chat message', inputMessage)
      setInputMessage("")
    }
  }

  return (
    <S.Input>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={inputMessage} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputMessage(e.target.value)} placeholder="Type something"/>
          </div>
          <div>
            <p>Emoji</p>  
            <button type="submit">Send</button>
          </div>
        </form>
    </S.Input>
  )
}

export default Input