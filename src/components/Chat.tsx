import React, { useRef, useEffect } from "react";
import * as S from "../styled";
import { IMessage } from "../views/Home";
import Message from "./_chat/Message";
import Notify from "./_chat/Notify";
import { Socket } from "socket.io-client";
import { HeadChat, Input } from "./_chat";
import { closed } from "../features/mechanic/mechanicSlice";
import { useDispatch } from "react-redux";

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

  /**
   * On mobile screen if user click chat panel then the sidebar should be closed.
   */
  const dispatch = useDispatch();
  const handleCloseSidebar = () => {
    dispatch(closed());
  };

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  return (
    <S.Chat>
      <HeadChat />
      <S.ChatArea onClick={handleCloseSidebar}>
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
