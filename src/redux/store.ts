import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {itemsAPI} from "./gamesAPI";

const rootReducer = combineReducers({
  [itemsAPI.reducerPath]: itemsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (
      getDefaultMiddleware
    ) => getDefaultMiddleware().concat(itemsAPI.middleware),
  });
};

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType["dispatch"];
