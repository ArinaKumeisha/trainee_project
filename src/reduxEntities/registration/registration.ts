import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Users = {
  name: string;
  password: string;
};

type InitialState = {
  user: Users;
  authorized: boolean;
};
const initialState: InitialState = {
  user: { name: '', password: '' },
  authorized: false,
};

export const registration = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setLoginData(state: InitialState, action: PayloadAction<Users>) {
      state.authorized = true;
      state.user.name = action.payload.name;
      state.user.password = action.payload.password;
    },
    logout(state: InitialState) {
      state.authorized = false;
      state.user = { name: '', password: '' };
    },
  },
});

export const { setLoginData, logout } = registration.actions;
