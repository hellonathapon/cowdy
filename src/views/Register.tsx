import React, { useState, useRef, useEffect } from "react";
import * as S from "../styled";
import { useDispatch } from "react-redux";
import {
  AttemptRegisterUser,
  IUser,
  IIdenticon,
} from "../features/user/userSlice";
import { AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";
import BlockIcon from "../assets/png/cowdy3.png";
import ReCAPTCHA from "react-google-recaptcha";
import genIdenticon from "../utils/genIdenticon";
import { v4 as uuidv4 } from "uuid";
import RegisterBtn from "../components/RegisterBtn";
import CryptoJS from "crypto-js";
import Identicon from "../components/Identicon";

function Register(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const inputRef = useRef<null | HTMLInputElement>(null);
  const reRef = useRef<ReCAPTCHA>(null);
  const [identicon, setIdenticon] = useState<IIdenticon>({
    hash: "c157a79031e1c40f85931829bc5fc552",
    rgba: [14, 165, 233, 255],
  });
  const [isRobot, setIsRobot] = useState<boolean>(true);
  const [newUser, setNewUser] = useState<IUser>({
    clientID: null,
    username: null,
    role: null,
    identicon: identicon,
    token: null,
  });

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    if (!newUser.username || !newUser.role) {
      return;
    }

    const token = await reRef.current?.executeAsync();
    reRef.current?.reset();

    try {
      /**
       * * VERIFY reCAPTCHA
       */

      dispatch(
        AttemptRegisterUser({
          clientID: uuidv4(),
          username: newUser.username,
          role: newUser.role,
          identicon,
          token,
        })
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSetUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewUser({ ...newUser, username: e.target.value });
  };
  const handleSetRole = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewUser({ ...newUser, role: e.target.value });
  };

  const handleReCAPTCHA = (token: string | null) => {
    console.log(token);
    setIsRobot(false);
  };

  const setIdenticonColor = (selectCol: [number, number, number, number]) => {
    setIdenticon((p) => ({ ...p, rgba: selectCol }));
  };

  // CryptoJS.SHA256 returns obj when use in string context, it automatically convert to hexdecimal
  var hash = newUser.username
    ? `${CryptoJS.SHA256(newUser.username)}`
    : "c157a79031e1c40f85931829bc5fc552";
  // create a base64 encoded PNG
  var iden = genIdenticon(hash, identicon.rgba);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // UPDATE IDENTICON DATA WHEN USER TYPING
  useEffect(() => {
    setIdenticon({ hash: hash, rgba: [14, 165, 233, 255] });
  }, [newUser.username, newUser.role]);

  return (
    <S.RegisterCtn>
      <S.RegisterWrap>
        <article>
          <figure>
            <img src={BlockIcon} alt="" />
          </figure>
          <h1>Cowdy</h1>
        </article>
        <S.RegForm onSubmit={handleFormSubmit}>
          <input
            ref={inputRef}
            onChange={handleSetUsername}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={handleSetRole}
            type="text"
            placeholder="Proficient in"
          />

          <Identicon identicon={iden} setIdenticonColor={setIdenticonColor} />

          <RegisterBtn
            disabled={newUser.username && newUser.role ? false : true}
          />

          <ReCAPTCHA
            sitekey={`${process.env.REACT_APP_RECAPCHA_SITE_KEY}`}
            size="invisible"
            ref={reRef}
          />
        </S.RegForm>
      </S.RegisterWrap>
    </S.RegisterCtn>
  );
}

export default Register;
