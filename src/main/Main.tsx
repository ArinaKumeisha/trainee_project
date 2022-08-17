import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartItem, Items } from 'components/items';
import { Header } from 'main/Header';
import { MainPageContainer } from 'components/mainPage';
import {
  Favorites,
  History,
  LoginContainer,
  RegistrationContainer,
} from 'headerComponents';
import { AmmoCart, Ammos } from 'components/ammos';
import { ErrorPage } from 'components/errorPage';
import { RequireAuth } from 'main/RequireAuth';
import { ArmorCart, Armors } from 'components/armors';
import { AsheCart, Ashes } from 'components/ashes';
import { ClassCart, Classes } from 'components/classes';
import { CreatureCart, Creatures } from 'components/creatures';
import { IncantationCart, Incantations } from 'components/incantations';
import { BossCart, Bosses } from 'components/bosses';
import { Weapons, WeaponCart } from 'components/weapons';

const Main = () => {
  return (
    <div id="header">
      <Header />
      <div id="wrap">
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
          <Route path="ammos" element={<Ammos />} />
          <Route path="ammos/:itemId" element={<AmmoCart />} />
          <Route path="armors" element={<Armors />} />
          <Route path="armors/:itemId" element={<ArmorCart />} />
          <Route path="items" element={<Items />} />
          <Route path="items/:itemId" element={<CartItem />} />
          <Route path="ashes" element={<Ashes />} />
          <Route path="ashes/:itemId" element={<AsheCart />} />
          <Route path="classes" element={<Classes />} />
          <Route path="classes/:itemId" element={<ClassCart />} />
          <Route path="creatures" element={<Creatures />} />
          <Route path="creatures/:itemId" element={<CreatureCart />} />
          <Route path="incantations" element={<Incantations />} />
          <Route path="incantations/:itemId" element={<IncantationCart />} />
          <Route path="bosses" element={<Bosses />} />
          <Route path="bosses/:itemId" element={<BossCart />} />
          <Route path="weapons" element={<Weapons />} />
          <Route path="weapons/:itemId" element={<WeaponCart />} />
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
    </div>
  );
};

export default Main;
