import styled from "styled-components";

export const App = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 100vh;
    overflow: hidden;
`

export const Header = styled.div`
    border: 2px solid teal;
    height: 70px;
    min-height: 70px;
`

export const Chat = styled.div`
    height: calc(100% - 70px);
    flex: 1;

    display: flex;
    flex-direction: column;
`