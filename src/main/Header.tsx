import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout, useAppDispatch, useAppMainSelector } from 'reduxEntities';
import style from './Header.module.css';

export const Header = () => {
  const authorized = useAppMainSelector(state => state.userInfo.authorized);
  const user = useAppMainSelector(state => state.userInfo.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div className={style.container}>
      <NavLink to="/">Back</NavLink>
      {authorized ? (
        <div className={style.navLinks}>
          <div className={style.name}>{user.name}</div>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/history">History</NavLink>
          <button onClick={logoutHandler} className={style.btn}>
            Logout
          </button>
        </div>
      ) : (
        <div className={style.navLinks}>
          <NavLink to="/registration">Registration</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </div>
  );
};
