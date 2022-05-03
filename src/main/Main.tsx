import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartItem, Items } from 'components/items';
import { Header } from 'main/Header';
import { MainPageContainer } from 'components/mainPage';
import {
  Favorites,
  History,
  LoginContainer,
  Logout,
  RegistrationContainer,
} from 'headerComponents';
import { AmmoCart, Ammos } from 'components/ammos';
import { ErrorPage } from 'components/errorPage';
import { RequireAuth } from 'main/RequireAuth';

const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPageContainer />} />
        <Route path="registration" element={<RegistrationContainer />} />
        <Route path="login" element={<LoginContainer />} />
        <Route
          path="history"
          element={
            <RequireAuth>
              <History />
            </RequireAuth>
          }
        />
        <Route path="logout" element={<Logout />} />
        <Route path="ammos" element={<Ammos />} />
        <Route path="ammos/:itemId" element={<AmmoCart />} />
        <Route path="items" element={<Items />} />
        <Route path="items/:itemId" element={<CartItem />} />
        <Route
          path="favorites"
          element={
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Main;
