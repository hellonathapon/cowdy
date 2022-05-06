import React from "react";
import * as S from "../styled";
import Avartar from "../assets/Avatars-memoji/png/Avatar-9.png";
import User from "./_header/User";

function Header(): JSX.Element {
  return (
    <S.Header>
      <S.NavWrap>
        <User />
        <S.People>user counter</S.People>
      </S.NavWrap>
    </S.Header>
  );
}

export default Header;
