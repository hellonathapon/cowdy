import React from "react";
import Avartar from "../../assets/Avatars-memoji/png/Avatar-9.png";
import * as S from "../../styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function User(): JSX.Element {
  const user = useSelector((state: RootState) => state.user);
  return (
    <S.User>
      <div>
        <figure>
          <img src={Avartar} alt="User avartar" />
        </figure>
      </div>

      <article>
        <h1>{user.username}</h1>
        <p>{user.role}</p>
        <small>ID: {user.ID}</small>
      </article>
    </S.User>
  );
}

export default User;
