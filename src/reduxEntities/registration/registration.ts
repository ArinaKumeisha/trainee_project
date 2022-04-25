import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Users = {
  name: string;
  password: string;
};

type InitialState = {
  user: Users;
  authorized: boolean;
  error: string;
};
const initialState: InitialState = {
  user: { name: '', password: '' },
  authorized: false,
  error: '',
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
    recognizeError(state: InitialState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { recognizeError, setLoginData, logout } = registration.actions;
