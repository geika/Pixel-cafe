import React from 'react';
import PropTypes from 'prop-types';

import './menu.scss';

const ImgBox = ({ side, name }) => (
  <div className="food-img-box">
    <img src={`src/images/${name}.jpg`} alt="videogames" />
    <div className="food">
      <div className={`food-triangle${side}`} />
      <p className="food-type">{name}</p>
    </div>
  </div>
);

ImgBox.propTypes = {
  name: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
};

export default ImgBox;
