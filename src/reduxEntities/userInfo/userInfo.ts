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
  history: string[];
};

type InitialState = {
  user: Users;
  authorized: boolean;
};
const initialState: InitialState = {
  user: { name: '', password: '', favorites: [], history: [] },
  authorized: false,
};

export const userInfo = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginData(state: InitialState, action: PayloadAction<Users>) {
      state.authorized = true;
      state.user.name = action.payload.name;
      state.user.password = action.payload.password;
      state.user.favorites = action.payload.favorites;
      state.user.history = action.payload.history;
    },
    logout(state: InitialState) {
      state.authorized = false;
      state.user = {
        name: '',
        password: '',
        favorites: [],
        history: [],
      };
    },

    addFavorites(state: InitialState, action: PayloadAction<Favorite>) {
      state.user.favorites.push(action.payload);
      localStorage.setItem(state.user.name, JSON.stringify(state.user));
    },
    removeFavorites(state: InitialState, action: PayloadAction<string>) {
      state.user.favorites = state.user.favorites.filter(
        item => item.id !== action.payload,
      );
      localStorage.setItem(state.user.name, JSON.stringify(state.user));
    },
    addHistory(state: InitialState, action: PayloadAction<string>) {
      state.user.history.push(action.payload);
      localStorage.setItem(state.user.name, JSON.stringify(state.user));
    },
  },
});

export const { setLoginData, logout, addFavorites, removeFavorites, addHistory } =
  userInfo.actions;
