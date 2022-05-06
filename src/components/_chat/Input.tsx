import React, { useState } from 'react'
import { Socket } from 'socket.io-client';
import * as S from '../../styled'
import SendIcon from '../../assets/svg/send.svg';

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
            <button type="submit">
              <img src={SendIcon} />
            </button>
          </div>
        </form>
    </S.Input>
  )
}

export default Input