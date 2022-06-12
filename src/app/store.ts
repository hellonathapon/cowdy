import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import peopleReducer from "../features/people/peopleSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    people: peopleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
