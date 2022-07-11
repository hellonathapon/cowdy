import { useRef, useEffect, memo } from "react";
import * as S from "../styled";
import { IMessage } from "../features/message/messageSlice";
import Message from "./_chat/Message";
import Notify from "./_chat/Notify";
import { Socket } from "socket.io-client";
import { HeadChat, Input } from "./_chat";
import { closed } from "../features/mechanic/mechanicSlice";
import { useDispatch, useSelector } from "react-redux";
import useUser from "../hooks/useUser";
import { RootState } from "../app/store";

interface Props {
  socket: Socket;
}

function Chat({ socket }: Props): JSX.Element {
  const messages: IMessage[] = useSelector((state: RootState) => state.message);
  const user = useSelector((state: RootState) => state.user);
  // const isLastMessageMine = useUser(messages, user.clientID);
  // console.log("message", messages);

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
  }, [messages]);

  return (
    <S.Chat>
      <HeadChat />
      <S.ChatArea onClick={handleCloseSidebar}>
        {messages.map((item: IMessage, i: number): JSX.Element => {
          return item.type === "message" ? (
            <Message ref={el} message={item} key={i} />
          ) : (
            <Notify text={item.text!} timeStamp={item.timeStamp} key={i} />
          );
        })}
        {/* <MemoizedMessage /> */}
      </S.ChatArea>
      <Input socket={socket} />
    </S.Chat>
  );
}

const MemoizedChat = memo(Chat);
export default MemoizedChat;
