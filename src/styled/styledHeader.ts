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
    height: 200px;
    border-bottom: ${({ isOwner }) => (isOwner ? `2px solid #000000` : `none`)};
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
      padding: 0.5rem 0;

      figure {
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f7f9f9;
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
      padding-left: 10px;
      height: 70px;
      padding: 1rem 0.5rem;
      h1 {
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 3.5px;
      }
      p {
        font-size: 17px;
        margin-bottom: 7px;
      }
      small {
        font-size: 12px;
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
