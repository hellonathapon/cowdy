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
    <S.Message ref={ref} owner={message.isOwner}>
      <div>
        <small>{message.owner}</small>
        <figure></figure>
      </div>
      <article>
        <p>{message.text}</p>
      </article>
    </S.Message>
  );
}

const forwardEl = React.forwardRef(Message);

export default forwardEl;
