import styled from "styled-components";

export const regContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const regWrapper = styled.div`
  max-width: 800px;
  min-height: 300px;
  margin: 0 auto;
  border: 2px solid gray;
  border-radius: 8px;
  padding: 1rem 0;

  article {
    padding: 1rem 2rem;
  }
`;

export const regForm = styled.form`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 18px;
  }
  button {
    height: 3rem;
  }
`;
