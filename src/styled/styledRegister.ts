import styled from "styled-components";

export const RegisterCtn = styled.div`
  width: 100vw;
  height: 100vh;
  /**
   ** TO CENTER AN ELEMENT IT NEEDS A FLEX PARENT
   ** AND MERGIN "AUTO" APPLIED TO CHILD ELEMENT.
   */
  display: flex;
  background: #eeeeee;
`;

export const RegisterWrap = styled.div`
  max-width: 400px;
  min-width: 270px;
  width: 100%;
  border-radius: 8px;
  padding: 1rem 0;
  background-color: #ffffff;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  margin: auto 1rem;

  article {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    figure {
      width: 80px;
      height: 80px;
      margin-bottom: 5px;
      overflow: hidden;

      img {
        width: 100%;
        /* animation: Rotation 6s infinite linear; */
      }
    }
    h1 {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 0.7rem;
    }
  }

  /**
   ** WHY 432 ?
   ** MAX WIDTH OF REGISTER FORM IS 400px
   ** AND IT HAS MX. OF 1rem, 1rem = 16px SO COMES 32px of MX. AND 432 IN TOTAL OF TAEGET SCREEN
   ** FOR THIS PARTICULAR THING.
   */
  @media only screen and (min-width: 432px) {
    margin: auto;
  }

  /* @keyframes Rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } */
`;

export const RegForm = styled.form`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 18px;
    border: none;
    border-bottom: 1px solid slateGray;

    &:focus {
      outline: none;
    }
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
