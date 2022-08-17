import React from 'react';
import { NavLink } from 'react-router-dom';
import style from 'main/Header.module.css';

export const UnAuthorizedPages = () => {
  return (
    <>
      <NavLink to="/registration" className={style.link}>
        Registration
      </NavLink>
      <NavLink to="/login" className={style.link}>
        Login
      </NavLink>
    </>
  );
};
