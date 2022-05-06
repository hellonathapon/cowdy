import styled from "styled-components";

export const NavWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  // Desktop breakpoint
  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: column;
  }
`;

export const User = styled.div`
  // Desktop Breakpoint
  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 200px;
    border-bottom: 2px solid #000000;
    flex: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    div {
      height: 70px;
      width: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      figure {
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: pink;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
    }
    article {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
      height: 70px;
      h1 {
        font-weight: bold;
      }
      p {
        font-size: 13px;
        margin-top: 3.5px;
      }
    }
  }
`;

export const People = styled.div`
  width: 150px;
  min-width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  // Desktop Breakpoint
  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 100%;
    flex: 1;
  }
`;
