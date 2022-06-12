import React, { useRef, useEffect } from "react";
import * as S from "../styled";
import { IMessage } from "../views/Home";
import Message from "./_chat/Message";
import Notify from "./_chat/Notify";
import { Socket } from "socket.io-client";
import { InfoTop, Input } from "./_chat";

interface Props {
  message: Array<IMessage>;
  socket: Socket;
}

function Chat({ message, socket }: Props): JSX.Element {
  const el = useRef<null | HTMLDivElement>(null);

  /**
   * * simply scroll chat component to the vary bottom when the new message is broadcasted
   */
  const scrollToBottom = () => {
    el.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  return (
    <S.Chat>
      <InfoTop />
      <S.ChatArea>
        {message.map((item: IMessage, i: number): JSX.Element => {
          return item.type === "message" ? (
            <Message ref={el} message={item} key={i} />
          ) : (
            <Notify text={item.text!} timeStamp={item.timeStamp} key={i} />
          );
        })}
      </S.ChatArea>
      <Input socket={socket} />
    </S.Chat>
  );
}

export default Chat;
