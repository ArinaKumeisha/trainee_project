import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Users = {
  name: string;
  password: string;
};
type RegistrationState = {
  users: Users[];
  error: string;
  initialized: boolean;
};

const initialState: RegistrationState = {
  users: [] as Users[],
  error: '',
  initialized: false,
};

export const registrationSlice = createSlice({
  name: 'registrationSlice',
  initialState,
  reducers: {
    setRegistrationData(state: RegistrationState, action: PayloadAction<Users>) {
      state.users.push(action.payload);
    },
    recognizeError(state: RegistrationState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setInitialization(state: RegistrationState, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
  },
});
export const { setRegistrationData, recognizeError, setInitialization } =
  registrationSlice.actions;
