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
      color: ${({ theme }) => theme.cols.title};
    }
    p {
      color: ${({ theme }) => theme.cols.subtitle};
    }
  }
`;
export const InfoIcons = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    color: #000000;

    div {
      width: 100%;
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
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    justify-content: flex-end;
    a:nth-child(2) {
      display: none;
    }
  }
`;

export const ChatArea = styled.div`
  flex: 1;
  overflow-x: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.div`
  height: 80px;
  min-height: 80px;
  border-top: ${({ theme }) => theme.borders.border1};
  box-shadow: ${({ theme }) => theme.shadows.shadow2};

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
  padding: 12px 9px;
  border-radius: 8px;
  margin-bottom: 1rem;
  margin-left: ${({ owner }) => (owner ? "auto" : 0)};
  margin-right: ${({ owner }) => (owner ? 0 : "auto")};
  max-width: 600px;

  section {
    display: inline-block;
    margin-bottom: 5px;
    small {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 500px;

    figure {
      height: 100%;
      min-height: 50px;
      width: 50px;
      min-width: 50px;
      max-height: 50px;
      background: gray;
      border-radius: 50%;
      margin-right: 10px;

      span {
        /* height: 100%;
            width: 100%;
            background: teal;
            border-radius: 50%; */
      }
    }

    article {
      max-width: 500px;
      display: flex;
      flex-direction: column;
      align-items: ${({ owner }) => (owner ? "flex-start" : "flex-end")};
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-wrap: break-all;
      word-wrap: break-word;
      white-space: normal;
      /* overflow: hidden; */
      white-space: pre-wrap; /* CSS3 */
      white-space: -moz-pre-wrap; /* Firefox */
      white-space: -pre-wrap; /* Opera <7 */
      white-space: -o-pre-wrap; /* Opera 7 */
      word-wrap: break-word; /* IE */

      small {
        font-size: 12px;
        margin-top: 5px;
        color: #979292;
      }
      p {
        background: ${({ owner }) => (owner ? "#0F89E3" : "#F3F3F3")};
        color: ${({ owner }) => (owner ? "#FFFFFF" : "#636363")};
        padding: 12px 9px;
        border-radius: 12px;
        border-top-right-radius: ${({ owner }) => (owner ? "2px" : "12px")};
        border-top-left-radius: ${({ owner }) => (owner ? "12px" : "2px")};
        line-height: 1.3rem;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-wrap: break-all;
        white-space: normal;

        //white-space: pre-wrap; /* CSS3 */
        //white-space: -moz-pre-wrap; /* Firefox */
        //white-space: -pre-wrap; /* Opera <7 */
        //white-space: -o-pre-wrap; /* Opera 7 */
        //word-wrap: break-word; /* IE */

        -ms-word-break: break-all;
        word-break: break-all;

        /* Non standard for webkit */
        /* -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto; */
      }
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
