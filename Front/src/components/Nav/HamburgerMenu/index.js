import React, { useState } from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import MenuContent from 'src/containers/HamburgerMenu';


const Hamburger = () => {
  const [menuOpen, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="slide-menu">
      <CheeseburgerMenu
        isOpen={menuOpen}
        closeCallback={() => closeMenu()}
      >
        <MenuContent
          closeCallback={() => closeMenu()}
          closeMenu={closeMenu}
        />
      </CheeseburgerMenu>
      <HamburgerMenu
        isOpen={menuOpen}
        menuClicked={() => openMenu()}
        width={32}
        height={24}
        strokeWidth={4}
        rotate={0}
        color="white"
        borderRadius={5}
        animationDuration={0.5}
      />
    </div>
  );
};

export default Hamburger;
