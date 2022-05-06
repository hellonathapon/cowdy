import React from 'react'
import * as S from '../../styled'

interface NotifyProps {
    text: string,
    timeStamp: Date
}

function Notify({ text, timeStamp }: NotifyProps) {
  return (
    <S.Notify>
        <p>{ text }</p>
        {/* <p>{ timeStamp.toString() }</p> */}
    </S.Notify>
  )
}

export default Notify