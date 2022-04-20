import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Bosses } from 'components/bosses';
import { Classes } from 'components/classes';
import { Incantations } from 'components/incantations';
import { Location } from 'components/location';
import { NPCs } from 'components/npcs';
import { Shields } from 'components/shields';
import { Sorceries } from 'components/sorceries';
import { Spirits } from 'components/spirits';
import { Talismans } from 'components/talismans';
import { Weapons } from 'components/weapons';
import { CartItem, Items } from 'components/items';
import { Header } from 'main/Header';
import { MainPageContainer } from 'components/mainPage';
import { History, Login, Logout, Registration } from 'headerComponents';
import { AmmoCart, Ammos } from 'components/ammos';
import { ArmorCart, Armors } from 'components/armors';
import { AshesOfWar } from 'components/ashesOfWar';

const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPageContainer />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="history" element={<History />} />
        <Route path="logout" element={<Logout />} />
        <Route path="ammos" element={<Ammos />} />
        <Route path="ammos/:itemId" element={<AmmoCart />} />
        <Route path="armors" element={<Armors />} />
        <Route path="armors/:itemId" element={<ArmorCart />} />
        <Route path="ashesOfWar" element={<AshesOfWar />} />
        <Route path="ashesOfWar/:itemId" element={<AshesOfWar />} />
        <Route path="bosses" element={<Bosses />} />
        <Route path="classes" element={<Classes />} />
        <Route path="incantations" element={<Incantations />} />
        <Route path="location" element={<Location />} />
        <Route path="location" element={<Location />} />
        <Route path="npcs" element={<NPCs />} />
        <Route path="shields" element={<Shields />} />
        <Route path="sorceries" element={<Sorceries />} />
        <Route path="spirits" element={<Spirits />} />
        <Route path="talismans" element={<Talismans />} />
        <Route path="weapons" element={<Weapons />} />
        <Route path="items" element={<Items />} />
        <Route path="items/:itemId" element={<CartItem />} />
        <Route path="*" element={<h1>There's nothing here!</h1>} />
      </Routes>
    </div>
  );
};

export default Main;
