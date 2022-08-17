import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userInfo } from 'reduxEntities/userInfo/userInfo';
import { savingPreviousState } from 'utilities';
import { pagination } from 'reduxEntities/pagination/pagination';
import { itemsAPI } from 'reduxEntities/api/gamesAPI';

const rootReducer = combineReducers({
  [itemsAPI.reducerPath]: itemsAPI.reducer,
  userInfo: userInfo.reducer,
  pagination: pagination.reducer,
});

const persistConfig = {
  key: 'reduxState',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,

    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'],
          serializableCheck: false,
        },
      }).concat([itemsAPI.middleware, savingPreviousState]),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
