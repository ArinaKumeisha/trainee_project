import React from "react";
import { Route, Routes } from "react-router-dom";
import Cover from "../cover/Cover";
import Registration from "../headerComponents/registration/Registration";
import Login from "../headerComponents/login/Login";
import History from "../headerComponents/history/History";
import Logout from "../headerComponents/logout/Logout";
import Header from "./Header";
import Ammos from "../components/ammos/Ammos";
import Armors from "../components/armors/Armors";
import AshesOfWar from "../components/ashesOfWar/AshesOfWar";
import Bosses from "../components/bosses/Bosses";
import Classes from "../components/classes/Classes";
import Incantations from "../components/incantations/Incantations";
import Location from "../components/location/Location";
import MainPage from "../components/mainPage/MainPage";
import Shields from "../components/shields/Shields";
import Sorceries from "../components/sorceries/Sorceries";
import Spirits from "../components/spirits/Spirits";
import Talismans from "../components/talismans/Talismans";
import Weapons from "../components/weapons/Weapons";
import {NPCs} from "../components/npcs/NPCs";

const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Cover />} />
        <Route path={"/registration"} element={<Registration />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/history"} element={<History />} />
        <Route path={"/logout"} element={<Logout />} />
        <Route path={"/ammos"} element={<Ammos />} />
        <Route path={"/armors"} element={<Armors />} />
        <Route path={"/ashesOfWar"} element={<AshesOfWar />} />
        <Route path={"/bosses"} element={<Bosses />} />
        <Route path={"/classes"} element={<Classes />} />
        <Route path={"/incantations"} element={<Incantations />} />
        <Route path={"/location"} element={<Location />} />
        <Route path={"/mainPage"} element={<MainPage />} />
        <Route path={"/npcs"} element={<NPCs />} />
        <Route path={"/shields"} element={<Shields />} />
        <Route path={"/sorceries"} element={<Sorceries />} />
        <Route path={"/spirits"} element={<Spirits />} />
        <Route path={"/talismans"} element={<Talismans />} />
        <Route path={"/weapons"} element={<Weapons />} />
      </Routes>
    </div>
  );
};

export default Main;
