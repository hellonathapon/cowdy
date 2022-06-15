import React from "react";
import * as S from "../styled";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { UserSm } from "../components/_header";

function Sidebar() {
  const isOpen = useSelector((state: RootState) => state.mechanic.sidebar);
  const user = useSelector((state: RootState) => state.user);
  const people = useSelector((state: RootState) => state.people.people);

  return (
    <S.SidebarCtn open={isOpen}>
      <S.SidebarWrap>
        <UserSm user={user} isOwner={true} />

        {/* list of people */}
        {people.length ? (
          people.map((person) => (
            <div key={person.clientID}>
              <UserSm user={person} isOwner={false} />
            </div>
          ))
        ) : (
          <p>No one here</p>
        )}
      </S.SidebarWrap>
    </S.SidebarCtn>
  );
}

export default Sidebar;
