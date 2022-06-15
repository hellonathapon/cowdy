import React from "react";
import { IMessage } from "../../views/Home";
import * as S from "../../styled";
import { strToHnM } from "../../utils/formatDateStr";

interface Props {
  message: IMessage;
}

function Message(
  { message }: Props,
  ref: React.Ref<HTMLDivElement> | null
): JSX.Element {
  return (
    <S.Message ref={ref} owner={message.isOwner}>
      {!message.isOwner ? (
        <section>
          <small>{message.owner}</small>
        </section>
      ) : null}
      <div>
        {!message.isOwner ? <figure></figure> : null}
        <article>
          <p>{message.text}</p>
          <small>
            {strToHnM(new Date(message.timeStamp).toLocaleTimeString())}
          </small>
        </article>
      </div>
      {/* <article>
        <p>{message.text}</p>
      </article> */}
    </S.Message>
  );
}

const forwardEl = React.forwardRef(Message);

export default forwardEl;
