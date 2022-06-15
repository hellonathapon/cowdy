import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import * as S from "../styled";
import Header from "../components/Header";
import Chat from "../components/Chat";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { added, joined, leaved } from "../features/people/peopleSlice";
import { IUser } from "../features/user/userSlice";
import Sidebar from "../components/Sidebar";

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
  const { clientID, username, role } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * * Sending handshake query data to server
     */
    const newSocket: Socket = io("http://localhost:5000", {
      query: { clientID, username, role },
    });

    setSocket(newSocket);

    newSocket.on("connection", (data) => {
      console.log("hi");
      console.log(data);
      setMessage((prev) => [...prev, data]);
      /**
       * * when a new user joined the the room
       * * his/her data should send to every one in the room
       */
      dispatch(joined(data.ownerData));
    });

    // recieve list of connected users
    newSocket.on("users", (data: IUsers) => {
      /**
       ** filter out this user out of data
       ** data.sid is string type by accessing data object data[sid] making its type broaded
       ** `as keyof IUser` telling Typescript data.sid
       */
      delete data.people[data.sid as keyof IUser];
      // add to redux
      dispatch(added(Object.values(data.people)));
    });

    // listen on disconnect
    newSocket.on("disconnection", (data: IMessage) => {
      console.log("first");
      setMessage((prev) => [...prev, data]);

      const id = data.ownerData?.clientID;

      console.log(data);
      // Update people slice
      dispatch(leaved(id!));
    });

    // listen on global room messages
    newSocket.on("global", (data: IMessage) => {
      setMessage((prev) => [...prev, data]);
    });

    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  return (
    <S.App>
      <Header />
      <Sidebar />
      <Chat message={message} socket={socket!} />
    </S.App>
  );
}

export default Home;
