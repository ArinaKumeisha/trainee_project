import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { itemsAPI } from 'reduxEntities';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { registration } from 'reduxEntities/registration/registration';

const rootReducer = combineReducers({
  [itemsAPI.reducerPath]: itemsAPI.reducer,
  registration: registration.reducer,
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
        },
      }).concat(itemsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
