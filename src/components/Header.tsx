import React from "react";
import * as S from "../styled";
import Avartar from "../assets/Avatars-memoji/png/Avatar-9.png";
import { User, People } from "./_header";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

function Header(): JSX.Element {
  const user = useSelector((state: RootState) => state.user);
  const people = useSelector((state: RootState) => state.people.people);

  return (
    <S.Header>
      <S.NavWrap>
        <User user={user} isOwner={true} />
        <br />
        {people.length
          ? people.map((person) => (
              <div key={person.clientID}>
                <User user={person} isOwner={false} />
              </div>
            ))
          : null}
      </S.NavWrap>
    </S.Header>
  );
}

export default Header;
