import React from 'react';
import style from 'main/Header.module.css';
import { NavLink } from 'react-router-dom';
import { useAppMainSelector } from 'reduxEntities/index';
import { logout } from 'reduxEntities/index';
import { useAppDispatch } from 'reduxEntities/index';
import { useNavigate } from 'react-router-dom';

export const AuthorizedPages = () => {
  const user = useAppMainSelector(state => state.userInfo.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <div className={style.link} id="page-wrap">
        {user.name}
      </div>
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
  );
};
