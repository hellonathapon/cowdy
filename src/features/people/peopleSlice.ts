import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../user/userSlice";

interface IPeople {
  people: Array<IUser>;
}

const initialState: IPeople = {
  people: [],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    added: (state: IPeople, action: PayloadAction<IUser[]>) => {
      state.people = action.payload;
    },
    joined: (state: IPeople, action: PayloadAction<IUser>) => {
      state.people.push(action.payload);
    },
    leaved: (state: IPeople, action: PayloadAction<string>) => {
      let index: number = state.people
        .map((item: IUser) => item.clientID)
        .indexOf(action.payload);
      state.people.splice(index, 1);
    },
  },
});

export default peopleSlice.reducer;
export const { added, joined, leaved } = peopleSlice.actions;
