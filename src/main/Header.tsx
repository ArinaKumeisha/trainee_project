import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import { useAppMainSelector } from 'reduxEntities';

export const Header = () => {
  const initialized = useAppMainSelector(state => state.registrationReducer.initialized);
  const users = useAppMainSelector(state => state.registrationReducer.users);
  const user = users[users.length - 1];

  return (
    <div className={style.container}>
      {initialized ? (
        <div className={style.navLinks}>
          {user.name}
          <NavLink to="/history">History</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </div>
      ) : (
        <div className={style.navLinks}>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/">Back</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </div>
  );
};
