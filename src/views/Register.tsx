import React, { useState, useRef, useEffect } from "react";
import * as S from "../styled";
import { useDispatch } from "react-redux";
import { created, IUser } from "../features/user/userSlice";
import { AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import BlockIcon from "../assets/svg/block.svg";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Register(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const inputRef = useRef<null | HTMLInputElement>(null);
  const reRef = useRef<ReCAPTCHA>(null);
  const [selectAvatar, setSelectAvatar] = useState<number | null | undefined>(
    null
  );
  const [isRobot, setIsRobot] = useState<boolean>(true);
  const [newUser, setNewUser] = useState<IUser>({
    /**
     * * SET CLIENT ID IN STORE
     */
    clientID: null,
    username: null,
    role: null,
    avatarID: null,
  });

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    if (
      !newUser.username ||
      !newUser.role ||
      selectAvatar === null ||
      selectAvatar === undefined
    ) {
      return;
    }

    const token = await reRef.current?.executeAsync();
    reRef.current?.reset();

    try {
      /**
       * * VERIFY reCAPTCHA
       */
      const response = await axios.post("/register", {
        clientID: uuidv4(),
        username: newUser.username,
        role: newUser.role,
        avatarID: newUser.avatarID,
        token,
      });

      dispatch(
        created({
          clientID: response.data.clientID,
          username: response.data.username,
          role: response.data.role,
          avatarID: response.data.avatarID,
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

  const setStateAvatar = () => {
    if (selectAvatar === null || selectAvatar === undefined) {
      return;
    } else {
      setNewUser((prevState) => ({ ...prevState, avatarID: selectAvatar }));
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    setStateAvatar();
  }, [selectAvatar]);

  return (
    <S.RegisterCtn>
      <S.RegisterWrap>
        <article>
          <figure>
            <img src={BlockIcon} alt="" />
          </figure>
          <h1>SPACE COW</h1>
        </article>
        <S.RegForm onSubmit={handleFormSubmit}>
          <input
            ref={inputRef}
            onChange={handleSetUsername}
            type="text"
            placeholder="Name"
          />
          <input onChange={handleSetRole} type="text" placeholder="Role" />
          <Avatar
            selectAvatar={selectAvatar}
            setSelectAvatar={setSelectAvatar}
          />

          <ReCAPTCHA
            sitekey={`${process.env.REACT_APP_RECAPCHA_SITE_KEY}`}
            size="invisible"
            ref={reRef}
          />

          <button type="submit">Register</button>
        </S.RegForm>
      </S.RegisterWrap>
    </S.RegisterCtn>
  );
}

export default Register;
