import React from "react";
import Avartar from "../../assets/Avatars-memoji/png/Avatar-9.png";
import * as S from "../../styled";
import { IUser } from "../../features/user/userSlice";

interface Props {
  user: IUser;
  isOwner: boolean;
}

function User({ user, isOwner }: Props): JSX.Element {
  return (
    <S.User isOwner={isOwner}>
      <div>
        <figure>
          <img src={Avartar} alt="User avartar" />
        </figure>
      </div>

      <article>
        <h1>{user.username}</h1>
        <h4>{user.role}</h4>
        {isOwner ? <p>ID: {user.clientID}</p> : null}
      </article>

      {!isOwner ? (
        <section>
          <small></small>
        </section>
      ) : null}
    </S.User>
  );
}

export default User;
