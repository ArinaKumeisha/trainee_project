import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { itemsAPI } from './api/gamesAPI';

const rootReducer = combineReducers({
  [itemsAPI.reducerPath]: itemsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(itemsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
