import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  username: string | null;
  role: string | null;
}

const initialState: IUser = {
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
    },
  },
});

export default userSlice.reducer;
export const { created } = userSlice.actions;
