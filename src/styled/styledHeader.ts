import styled from "styled-components";
interface Props {
  isOwner: boolean;
}

export const NavWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: auto;
  br {
    color: gray;
  }

  // Desktop breakpoint
  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: column;
  }
`;

export const User = styled.div<Props>`
  // Desktop Breakpoint
  @media ${({ theme }) => theme.breakpoints.desktop} {
    /* height: 200px; */
    /* border-bottom: ${({ isOwner }) =>
      isOwner ? `2px solid #000000` : `none`}; */
    flex: 0 auto;
    display: flex;
    flex-direction: ${({ isOwner }) => (isOwner ? `column` : `row`)};
    justify-content: flex-start;
    align-items: center;
    box-shadow: ${({ theme, isOwner }) =>
      isOwner ? theme.shadows.bt1 : "none"};
    border-radius: ${({ isOwner }) => (isOwner ? "none" : "15px")};
    margin-bottom: ${({ isOwner }) => (isOwner ? "1rem" : "0")};
    padding: ${({ isOwner }) => (isOwner ? "0.5rem 0" : "0")};
    overflow: hidden;

    &:hover {
      background-color: ${({ isOwner }) => (isOwner ? "#FFFFFF" : "#e6e6e7")};
      cursor: ${({ isOwner }) => (isOwner ? "auto" : "pointer")};
    }

    div {
      height: ${({ isOwner }) => (isOwner ? "130px" : "70px")};
      width: ${({ isOwner }) => (isOwner ? "130px" : "70px")};
      display: flex;
      justify-content: center;
      align-items: center;

      figure {
        width: "60px";
        height: "60px";
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f4f7fe;
        border: ${({ theme }) => theme.borders.border1};
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
      align-items: ${({ isOwner }) => (isOwner ? "center" : "flex-start")};
      padding-left: 10px;
      height: 70px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;

      h1 {
        font-weight: bold;
        font-size: ${({ isOwner }) => (isOwner ? "25px" : "16px")};
        color: ${({ theme }) => theme.cols.title};
        margin-bottom: 3.5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }
      h4 {
        font-size: ${({ isOwner }) => (isOwner ? "18px" : "14px")};
        margin-bottom: 7px;
        color: ${({ theme }) => theme.cols.subtitle};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }
      p {
        font-size: 12px;
        color: ${({ theme }) => theme.cols.subtitle};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }
    }

    section {
      width: 50px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      small {
        width: 10px;
        height: 10px;
        background-color: #42d356;
        border-radius: 50%;
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
