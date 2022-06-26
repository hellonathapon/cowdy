import React from "react";
import Avartar from "../../assets/Avatars-memoji/png/Avatar-9.png";
import * as S from "../../styled";
import { IUser } from "../../features/user/userSlice";

interface Props {
  user: IUser;
  isOwner: boolean;
}

function UserSm({ user, isOwner }: Props): JSX.Element {
  return (
    <S.UserSm isOwner={isOwner}>
      <div>
        <figure>
          <img
            src={require(`../../assets/Avatars-memoji/png/Avatar-${user.avatarID}.png`)}
            alt="User avartar"
          />
        </figure>
      </div>

      <article>
        <div>
          <h1>{user.username}</h1>
          <h4>{user.role}</h4>
          {isOwner ? <p>ID: {user.clientID}</p> : null}
        </div>
      </article>

      {!isOwner ? (
        <section>
          <small></small>
        </section>
      ) : null}
    </S.UserSm>
  );
}

export default UserSm;
