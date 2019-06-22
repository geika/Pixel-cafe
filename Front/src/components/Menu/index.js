import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ImgBox from './ImgBox';
import FoodBox from './FoodBox';
import './menu.scss';

const Menu = ({ getDataMenu, data }) => {
  useEffect(() => {
    getDataMenu();
  }, []);

  return (
    <div id="food-menu">
      {data.map(type => (
        <div>
          {type.id % 2 === 0
            ? (
              <div className="pair">
                <ImgBox side="right" name={type.name} />
                <FoodBox data={type.products} />
              </div>
            )
            : (
              <div className="inpair">
                <ImgBox side="left" name={type.name} />
                <FoodBox data={type.products} />
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

Menu.propTypes = {
  getDataMenu: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Menu;
