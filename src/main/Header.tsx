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
      <NavLink to="/" className={style.link}>
        Back
      </NavLink>
      {authorized ? (
        <>
          <div className={style.link}>{user.name}</div>
          <NavLink to="/favorites" className={style.link}>
            Favorites
          </NavLink>
          <NavLink to="/history" className={style.link}>
            History
          </NavLink>
          <div onClick={logoutHandler} className={style.link}>
            Logout
          </div>
        </>
      ) : (
        <>
          <NavLink to="/registration" className={style.link}>
            Registration
          </NavLink>
          <NavLink to="/login" className={style.link}>
            Login
          </NavLink>
        </>
      )}
    </div>
  );
};
