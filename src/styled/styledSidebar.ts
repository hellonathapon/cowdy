import styled from "styled-components";

interface Props {
  open: boolean;
}

export const SidebarCtn = styled.div<Props>`
  height: 100vh;
  width: 250px;
  margin-left: ${({ open }) => (open ? "0px" : "-250px")};
  background: #f3f3f3;
  position: fixed;
  overflow: hidden;
  transition: 0.25s ease;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;
