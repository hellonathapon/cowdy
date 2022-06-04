import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import * as S from "../styled";
import Header from "../components/Header";
import Chat from "../components/Chat";

export interface IMessage {
  text: string;
  timeStamp: Date;
  owner: boolean;
  type: string;
}

function Home() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<Array<IMessage>>([]);
  const [chatMessage, setChatMessage] = useState<Array<IMessage>>([]);

  useEffect(() => {
    const newSocket: Socket = io("http://localhost:5000");
    setSocket(newSocket);
    newSocket.on("connection", (data: IMessage) => {
      setMessage((prev) => [...prev, data]);
    });
    newSocket.on("disconnection", (data: IMessage) => {
      setMessage((prev) => [...prev, data]);
    });
    newSocket.on("chat message", (data: IMessage) => {
      console.log(data);
      setMessage((prev) => [...prev, data]);
    });

    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  return (
    <S.App>
      <Header />
      <Chat message={message} socket={socket!} />
    </S.App>
  );
}

export default Home;
