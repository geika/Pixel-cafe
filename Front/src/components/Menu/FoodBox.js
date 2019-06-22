import React from 'react';
import PropTypes from 'prop-types';

import './menu.scss';

const FoodBox = ({ data }) => (
  <div className="menu-box">
    <ul className="food-list">
      {data.map(product => (
        <li className="food-list-food">
          <p className="food-list-food-title">{product.name} : {product.price} €</p>
          <p className="food-list-food-description">{product.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

FoodBox.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FoodBox;
