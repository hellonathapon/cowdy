import React, { useState, useEffect } from 'react';
import './App.css';
import { io, Socket } from 'socket.io-client';
import * as S from "./styled"
import { Header, Chat } from './components'

interface Message {
  text: string,
  timeStamp: Date
}

function App(): JSX.Element {

  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<Array<Message>>([]);

  useEffect(() => {
    const newSocket: Socket = io("http://localhost:5000")
    setSocket(newSocket);
    newSocket.on("broadcast", (data: string) => {
      setMessage(prev => [...prev, {text: data, timeStamp: new Date()}])
    })

    return () => {
      newSocket.close()
    }
  }, [setSocket])

  return (
    <S.App>
        <Header/>
        <Chat>
          { 
            message?.map((item: Message, i: number): JSX.Element => (
              <div key={ i }>
                <p>{ item.text }</p>
                <p>{ item.timeStamp.toLocaleTimeString() }</p>
              </div>
            ))
          }
        </Chat>
    </S.App>
  );
}

export default App;
