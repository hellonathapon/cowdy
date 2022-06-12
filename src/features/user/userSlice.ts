import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface IUser {
  clientID: string | null;
  username: string | null;
  role: string | null;
}

const initialState: IUser = {
  clientID: null,
  username: null,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    created: (state: IUser, action: PayloadAction<IUser>) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.clientID = uuidv4();
    },
  },
});

export default userSlice.reducer;
export const { created } = userSlice.actions;
