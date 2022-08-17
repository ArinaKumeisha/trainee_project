import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppMainSelector } from 'reduxEntities';
import style from './Header.module.css';
import useMatchMedia from 'use-match-media-hook';
import { slide as Menu } from 'react-burger-menu';
import { AuthorizedPages } from 'main/AuthorizedPages';
import { UnAuthorizedPages } from 'main/UnAuthorizedPages';
import { styles } from 'main/styles_burger_menu';
import { useState } from 'react';

export const Header = () => {
  const queries = ['(max-width: 400px)', '(min-width: 800px)'];
  const [mobile, desktop] = useMatchMedia(queries);
  const authorized = useAppMainSelector(state => state.userInfo.authorized);

  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {mobile ? (
        <Menu
          styles={styles}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
          isOpen={isOpen}
        >
          <NavLink to="/" className={style.link}>
            Back
          </NavLink>
          <div onClick={() => setOpen(false)}>
            {authorized ? <AuthorizedPages /> : <UnAuthorizedPages />}
          </div>
        </Menu>
      ) : (
        <div className={style.container}>
          <NavLink to="/" className={style.link}>
            Back
          </NavLink>
          {authorized ? <AuthorizedPages /> : <UnAuthorizedPages />}
        </div>
      )}
    </>
  );
};
