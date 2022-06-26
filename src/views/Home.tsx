import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import * as S from "../styled";
import Sidebar from "../components/Sidebar";
import SidebarSM from "../components/SidebarSM";
import Chat from "../components/Chat";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { added, joined, leaved } from "../features/people/peopleSlice";
import { IUser } from "../features/user/userSlice";

// string literal union type
type MessageType = "message" | "notify";

export interface IMessage {
  type: MessageType;
  text: string | null;
  isOwner: boolean;
  owner: string;
  ownerData?: IUser;
  timeStamp: Date;
  people?: object;
  avatarID?: string;
}

interface IUsers {
  timeStamp: Date;
  sid: string;
  people: IUser;
}

function Home() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<Array<IMessage>>([]);
  const [chatMessage, setChatMessage] = useState<Array<IMessage>>([]);

  const user = useSelector((state: RootState) => state.user);
  const { clientID, username, role, avatarID } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * * SENDING INITIAL HANDSHAKE DATA TO THE SERVER
     */
    const newSocket: Socket = io("http://localhost:5000", {
      query: { clientID, username, role, avatarID },
    });

    setSocket(newSocket);

    newSocket.on("connection", (data) => {
      setMessage((prev) => [...prev, data]);
      /**
       * * FOR OLD USERS
       * * RECIEVE THE NEW USER DATA E.G. NAME, ROLE FROM THE SERVER
       * * STORE IN GLOBAL STATE LIKE REDUX.
       */
      dispatch(joined(data.ownerData));
    });

    newSocket.on("users", (data: IUsers) => {
      /**
       * * FOR NEW USER
       * * RECIEVE THE DATA OF THOSE WHO PREVIOUSLY JOINING THE CHAT
       * * 1. FILTER RECIEVER DATA OUT OF USERS LIST AND STORE IT TO PEOPLE
       */
      delete data.people[data.sid as keyof IUser];
      dispatch(added(Object.values(data.people)));
    });

    newSocket.on("disconnection", (data: IMessage) => {
      console.log("first");
      setMessage((prev) => [...prev, data]);

      const id = data.ownerData?.clientID;

      dispatch(leaved(id!));
    });

    // LISTEN ON GLOBAL ROOM
    newSocket.on("global", (data: IMessage) => {
      setMessage((prev) => [...prev, data]);
    });

    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  return (
    <S.App>
      <Sidebar />
      <SidebarSM />
      <Chat message={message} socket={socket!} />
    </S.App>
  );
}

export default Home;
