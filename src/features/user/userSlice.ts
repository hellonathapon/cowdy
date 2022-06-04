import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface IUser {
  ID: string | null;
  username: string | null;
  role: string | null;
}

const initialState: IUser = {
  ID: null,
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
      state.ID = uuidv4();
    },
  },
});

export default userSlice.reducer;
export const { created } = userSlice.actions;
