import React from "react";
import { IMessage } from "../../views/Home";
import * as S from "../../styled";
import { formatAMPM } from "../../utils/formatDateStr";

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
        {!message.isOwner ? (
          <figure>
            <img
              src={require(`../../assets/Avatars-memoji/png/Avatar-${message?.avatarID}.png`)}
              alt="User avartar"
            />
          </figure>
        ) : null}
        <article>
          <p>{message.text}</p>
          <small>{formatAMPM(new Date(message.timeStamp))}</small>
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
