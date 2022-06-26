import { useState } from "react";
import * as S from "../styled";

interface Props {
  selectAvatar: number | null | undefined;
  setSelectAvatar: (a: number | null | undefined) => void;
}

function Avatar({ selectAvatar, setSelectAvatar }: Props) {
  // const [selectAvatar, setSelectAvatar] = useState<number | null | undefined>(
  //   null
  // );

  const handleSetAvatar = (
    e: React.MouseEvent<HTMLLIElement>,
    avatarIndex: number
  ) => {
    setSelectAvatar(avatarIndex);
  };

  return (
    <S.AvatarCtn>
      {selectAvatar === null ? (
        <S.PlaceholderAvatarWrap>
          <figure></figure>
        </S.PlaceholderAvatarWrap>
      ) : selectAvatar === undefined ? (
        <S.AllAvatarsWrap>
          <S.AvatarWrap>
            {Array.from({ length: 35 }, (v: number, i: number) => (
              <li onClick={(e) => handleSetAvatar(e, i)} key={i} value={i}>
                <img
                  src={require(`../assets/Avatars-memoji/png/Avatar-${i}.png`)}
                  alt="avatar"
                />
              </li>
            ))}
          </S.AvatarWrap>
        </S.AllAvatarsWrap>
      ) : (
        <S.SelectedAvatarWrap>
          <img
            src={require(`../assets/Avatars-memoji/png/Avatar-${selectAvatar}.png`)}
            alt="user Avatar"
          />
        </S.SelectedAvatarWrap>
      )}

      <S.SelectedAvatarBtn onClick={() => setSelectAvatar(undefined)}>
        <p>Choose an avatar</p>
      </S.SelectedAvatarBtn>
    </S.AvatarCtn>
  );
}

export default Avatar;
