import React from "react";
import Avartar from "../../assets/Avatars-memoji/png/Avatar-9.png";
import * as S from "../../styled";

function User(): JSX.Element {
  return (
    <S.User>
      <div>
        <figure>
          <img src={Avartar} alt="User avartar" />
        </figure>
      </div>

      <article>
        <h1>Nathapon B. Christian</h1>
        <p>Web/Mobile Developer</p>
      </article>
    </S.User>
  );
}

export default User;
