import React from "react";
import { IMessage } from "../../views/Home";
import * as S from "../../styled";

interface Props {
  message: IMessage;
}

function Message(
  { message }: Props,
  ref: React.Ref<HTMLDivElement> | null
): JSX.Element {
  return (
    <S.Message ref={ref} owner={message.owner}>
      <figure>
        <span></span>
      </figure>
      <article>
        <p>{message.text}</p>
      </article>
    </S.Message>
  );
}

const forwardEl = React.forwardRef(Message);

export default forwardEl;
