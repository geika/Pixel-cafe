import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavData from 'src/data/nav';
import './menuContent.scss';

const uuid = require('uuid-v4');

const MenuContent = ({
  closeMenu,
  setConnected,
  isConnected,
  path,
}) => {
  const toggle = () => {
    if (localStorage.getItem('userName') !== null) {
      setConnected(true);
    }
  };

  useEffect(() => {
    toggle();
  }, [isConnected, path]);

  const disconnect = () => {
    localStorage.clear();
    setConnected(false);
    closeMenu();
  };

  return (
    <ul className="menu">
      {NavData.map(nav => (
        <li
          key={uuid()}
          onClick={() => closeMenu()}
          className="menu-item"
        >
          <NavLink
            to={nav.route}
          >
            {nav.label}
          </NavLink>
        </li>
      ))}
      { isConnected === false
        ? (
          <li className="menu-item"><NavLink onClick={() => closeMenu()} key="login" to="login">login</NavLink></li>)
        : (
          <li className="menu-item" onClick={disconnect}>Déconnèxion</li>)
          }
    </ul>
  );
};

MenuContent.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
  setConnected: PropTypes.func.isRequired,
};


export default MenuContent;
