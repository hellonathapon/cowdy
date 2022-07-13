import React, { memo } from "react";
import { IMessage } from "../../features/message/messageSlice";
import * as S from "../../styled";
import { formatAMPM } from "../../utils/formatDateStr";
import { useSelector } from "react-redux";
// import useUser from "../hooks/useUser";
import { RootState } from "../../app/store";
import genIdenticon from "../../utils/genIdenticon";

interface Props {
  message: IMessage;
}

const Message = (
  { message }: Props,
  ref: React.Ref<HTMLDivElement> | null
): JSX.Element => {
  // const messages = useSelector((state: RootState) => state.message);
  const iden = genIdenticon(
    message.senderData?.identicon?.hash,
    message.senderData?.identicon?.rgba
  );

  // const text = message.text.replace(/(www\..+?)(\s|$)/g, function (text, link) {
  //   return '<a href="http://' + link + '">' + link + "</a>";
  // });

  // function replaceURLWithHTMLLinks(text: string) {
  //   var exp =
  //     /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  //   return text.replace(exp, "<a href='$1'>$1</a>");
  // }

  return (
    // <>
    //   {messages.map((item, i) => {
    //     return item.type === "message" ? (
    <S.Message ref={ref} owner={message?.isOwner}>
      {!message.isOwner ? (
        <section>
          <small>{message.senderData?.username}</small>
        </section>
      ) : null}
      <div>
        {!message.isOwner ? (
          <figure>
            <img src={`data:image/png;base64, ${iden}`} alt="Identicon" />
          </figure>
        ) : null}
        <article>
          <p>{message.text}</p>
          <small>{formatAMPM(new Date(message.timeStamp))}</small>
        </article>
      </div>
    </S.Message>
    //       ) : (
    //         <S.Notify key={i}>
    //           <p>{item.text}</p>
    //           {/* <p>{ timeStamp.toString() }</p> */}
    //         </S.Notify>
    //       );
    //     })}
    //   </>
  );
};

const forwardEl = React.forwardRef(Message);
// const MemoizedMessage = React.memo(Message);

export default forwardEl;
