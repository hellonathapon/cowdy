import React, { useState } from "react";
import * as S from "../styled";
import { useDispatch } from "react-redux";
import { created, IUser } from "../features/user/userSlice";
import { AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";

function Register(): JSX.Element {
  /**
   * * initial state based on its <type> should be initialized.
   */
  const [newUser, setNewUser] = useState<IUser>({
    /**
     * * setNewUser isn't able to set ID here and therefore leave it null to store.
     */
    clientID: null,
    username: null,
    role: null,
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!newUser.username || !newUser.role) {
      return;
    }
    dispatch(created(newUser));
    navigate("/");
  };

  const handleSetUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewUser({ ...newUser, username: e.target.value });
  };
  const handleSetRole = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewUser({ ...newUser, role: e.target.value });
  };

  return (
    <S.regContainer>
      <S.regWrapper>
        <article>
          <h1>REGISTER</h1>
          <h2>Let's get started with Introducing yourself</h2>
        </article>
        <S.regForm onSubmit={handleFormSubmit}>
          <input onChange={handleSetUsername} type="text" placeholder="Name" />
          <input onChange={handleSetRole} type="text" placeholder="Role" />
          <input type="file" />
          <button type="submit">Register</button>
        </S.regForm>
      </S.regWrapper>
    </S.regContainer>
  );
}

export default Register;
