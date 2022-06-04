import styled from "styled-components";

export const regContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /**
   ** To center an element needs flex parent
   ** and margin auto child element  
   */
  display: flex;
  background: #ddeefc;
`;

export const regWrapper = styled.div`
  max-width: 600px;
  min-width: 270px;
  margin: auto;
  border-radius: 8px;
  padding: 1rem 0;
  background-color: #ffffff;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);

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
    border: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    background: #2364d2;
    box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
  }
`;
