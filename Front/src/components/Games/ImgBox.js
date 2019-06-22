import React from 'react';
import PropTypes from 'prop-types';

import './games.scss';

const ImgBox = ({ data, side }) => (
  <div className="img-box">
    <img src={`src/images/${data.name}.jpg`} alt="videogames" />
    <div className="console">
      <div className={`triangle${side}`} />
      <p className="console-brand">{data.brand}</p>
      <p className="console-name">{data.name}</p>
      <p className="console-year">{data.releaseDate.date.substring(0, 4)}</p>
    </div>
  </div>
);

ImgBox.propTypes = {
  data: PropTypes.object.isRequired,
  side: PropTypes.string.isRequired,
};

export default ImgBox;
