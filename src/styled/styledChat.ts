import styled from "styled-components";

interface MessageProps {
  owner: boolean;
}

export const InfoTop = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  border-bottom: ${({ theme }) => theme.borders.border1};
`;

export const InfoTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  article {
    padding-left: 1rem;
    h1 {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
export const InfoIcons = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    width: 70px;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    figure {
      background: #ffffff;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 50%;
      }
      &:hover {
        cursor: pointer;
        background: #e7e7e8;
      }
    }
  }
`;

export const ChatArea = styled.div`
  flex: 1;
  overflow-x: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  background: #f7f9f9;
`;
export const Input = styled.div`
  height: 80px;
  min-height: 80px;
  border-top: ${({ theme }) => theme.borders.border1};

  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;

    div:nth-child(1) {
      flex: 1;
      height: 50px;
      margin: 0 5px;
      /* background: #F9F9F9; */
      border-radius: 14px;
      padding-left: 20px;

      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 18px;
        background: transparent;
      }
    }
    div:nth-child(2) {
      width: 100px;
      align-items: center;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 50px;
        height: 50px;
        border: none;
        background: #0f89e3;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 25px;
        }
      }
      button:hover {
        background: #0f89e3;
        cursor: pointer;
      }
    }
  }
`;

export const Message = styled.div<MessageProps>`
  display: flex;
  flex-direction: ${({ owner }) => (owner ? "row-reverse" : "row")};
  /* height: 100%;
    min-height: 50px; */
  padding: 12px 9px;
  border-radius: 8px;
  margin-bottom: 1rem;
  margin-left: ${({ owner }) => (owner ? "auto" : 0)};
  margin-right: ${({ owner }) => (owner ? 0 : "auto")};

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    small {
      font-size: 14px;
      margin-bottom: 5px;
    }

    figure {
      height: 100%;
      min-height: 50px;
      width: 50px;
      min-width: 50px;
      max-height: 50px;
      background: gray;
      border-radius: 50%;

      span {
        /* height: 100%;
            width: 100%;
            background: teal;
            border-radius: 50%; */
      }
    }
  }
  article {
    margin-right: ${({ owner }) => (owner ? "1rem" : 0)};
    margin-left: ${({ owner }) => (owner ? 0 : "1rem")};
    height: 100%;
    display: inline-block;
    color: ${({ owner }) => (owner ? "#FFFFFF" : "#636363")};
    //margin-left: ${({ owner }) => (owner ? "auto" : 0)};
    //margin-right: ${({ owner }) => (owner ? 0 : "auto")};

    p {
      background: ${({ owner }) => (owner ? "#0F89E3" : "#F3F3F3")};
      padding: 12px 9px;
      border-radius: 12px;
      line-height: 1.3rem;
    }
  }
`;

export const Notify = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  align-items: center;

  p {
    color: #979292;
    font-size: 14px;
  }
`;
