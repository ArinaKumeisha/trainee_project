import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { setupStore } from 'reduxEntities/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const store = setupStore();
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);
