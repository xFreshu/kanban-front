import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./interface/IUser";

const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  boards: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<UserState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.companyName = action.payload.companyName;
      state.boards = action.payload.boards;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
