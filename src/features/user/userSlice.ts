import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface IUser {
  clientID: string | null;
  username: string | null;
  role: string | null;
  avatarID: number | null;
}

const initialState: IUser = {
  clientID: null,
  username: null,
  role: null,
  avatarID: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    created: (state: IUser, action: PayloadAction<IUser>) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.clientID = action.payload.clientID;
      state.avatarID = action.payload.avatarID;
    },
  },
});

export default userSlice.reducer;
export const { created } = userSlice.actions;
