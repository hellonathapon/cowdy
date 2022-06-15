import styled from "styled-components";

export const App = styled.div`
  max-width: 1300px;
  width: 100vw;
  height: 100vh;
  margin: auto;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 300px 1fr 1fr;
  grid-template-rows: 70px 1fr;
  min-height: 100vh;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const Header = styled.div`
  /* grid-column: 1 / span 3; */
  display: none;

  // Desktop breakpoint
  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / 2;
    grid-row: 1 / span 2;
    display: block;
    border-right: ${({ theme }) => theme.borders.border1};
  }
`;

export const Chat = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 2;

  /**
   *! min-width for mobile screen is calculated with App grid columns width
   *! if it < min-width being set here then this is applied otherwise
   *! the App grid columns width is set as the basesd of min-width.
   */
  min-width: 350px;

  display: flex;
  flex-direction: column;
  overflow: auto;
  border-right: ${({ theme }) => theme.borders.border1};

  // Desktop breakpoint
  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 2 / span 3;
    grid-row: 1 / span 2;
  }
`;
