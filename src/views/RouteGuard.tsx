import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { IUserState } from "../features/user/userSlice";

interface Props {
  isAuth: IUserState;
}

function RouteGuard({ isAuth }: Props): JSX.Element {
  console.log("isAuth", isAuth);

  if (isAuth.loading) {
    return <p>Loading</p>;
  }

  return isAuth.data ? <Outlet /> : <Navigate to="/register" />;
}

export default RouteGuard;
