import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavData from 'src/data/nav';
import HamburgerMenu from './HamburgerMenu';
import './nav.scss';

const uuid = require('uuid-v4');

const Nav = ({ path, isConnected, setConnected }) => {
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
  };
  return (
    <nav>
      <div className="nav">
        <Link key="home-link1111" to="/">
          <img className="logo" alt="pixel-café" src="src/images/logo.png" />
        </Link>
        <HamburgerMenu />
        <ul className="nav-link">
          {NavData.map(nav => (
            <li key={uuid()}>
              <NavLink
                key={nav.label}
                to={nav.route}
              >
                {nav.label}
              </NavLink>
            </li>
          ))}
          <div className={`login-block${path} ripple`}>
            { isConnected === false
              ? (
                <li className={`nav-login${path} ripple`}><NavLink key="login" to="login">login</NavLink></li>)
              : (
                <li className="nav-login ripple" onClick={disconnect}>deconnexion</li>)
            }
          </div>
        </ul>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  path: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
  setConnected: PropTypes.func.isRequired,
};


export default Nav;
