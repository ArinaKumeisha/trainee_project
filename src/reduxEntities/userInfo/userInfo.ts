import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Favorite = {
  id: string;
  name: string;
  description: string;
  image: string;
};
export type Users = {
  name: string;
  password: string;
  favorites: Favorite[];
};

type InitialState = {
  user: Users;
  authorized: boolean;
};
const initialState: InitialState = {
  user: { name: '', password: '', favorites: [] },
  authorized: false,
};

export const userInfo = createSlice({
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
      state.user = {
        name: '',
        password: '',
        favorites: [],
      };
    },

    addFavorites(state: InitialState, action: PayloadAction<Favorite>) {
      state.user.favorites.push(action.payload);
      localStorage.setItem(state.user.name, JSON.stringify(state.user));
    },
    deleteItem(state: InitialState, action: PayloadAction<string>) {
      state.user.favorites = state.user.favorites.filter(
        item => item.id !== action.payload,
      );
      localStorage.setItem(state.user.name, JSON.stringify(state.user));
    },
  },
});

export const { setLoginData, logout, addFavorites, deleteItem } = userInfo.actions;
