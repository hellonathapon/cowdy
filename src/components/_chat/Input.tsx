import React, { useState } from "react";
import { Socket } from "socket.io-client";
import * as S from "../../styled";
import SendIcon from "../../assets/svg/send.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface Props {
  socket: Socket;
}

function Input({ socket }: Props): JSX.Element {
  const [inputMessage, setInputMessage] = useState<string | undefined>("");

  const user = useSelector((state: RootState) => state.user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMessage === "") {
      return;
    } else {
      socket.emit("global", {
        message: inputMessage,
        owner: user.username,
      });
      setInputMessage("");
    }
  };

  return (
    <S.Input>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={inputMessage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputMessage(e.target.value)
            }
            placeholder="Type something"
          />
        </div>
        <div>
          <button type="submit">
            <img src={SendIcon} />
          </button>
        </div>
      </form>
    </S.Input>
  );
}

export default Input;
