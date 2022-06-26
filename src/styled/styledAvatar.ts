import styled from "styled-components";

export const AllAvatarsWrap = styled.div`
  position: absolute;
  max-width: 600px;
  max-height: 600px;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
  overflow-y: auto;

  header {
    position: fixed;
    margin: auto;
    background: teal;
  }
`;

export const AvatarWrap = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 12px;

  li {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background: #f3f3f3;
    }

    img {
      width: 100%;
    }
  }
`;

export const AvatarCtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SelectedAvatarWrap = styled.figure`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: slateGray;

  img {
    width: 100%;
  }
`;

export const SelectedAvatarBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlaceholderAvatarWrap = styled.div`
  figure {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: slateGray;
  }
`;
