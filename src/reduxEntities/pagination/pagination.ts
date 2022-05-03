import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  currentPage: number;
};
const initialState = {
  currentPage: 1,
};
export const pagination = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state: InitialState, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = pagination.actions;
