import React from 'react';
import PropTypes from 'prop-types';

import './games.scss';

const uuid = require('uuid-v4');

const GamesBox = ({ data }) => (
  <div className="games-box">
    <ul className="game-list">
      {data.games.map(game => (
        <li key={uuid} className="game-list-game">
          <p className="game-list-game-title">{game.name} :</p>
          <p className="game-list-game-description">{game.description.substring(0, 180)} ...</p>
        </li>
      ))}
    </ul>
  </div>
);

GamesBox.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GamesBox;
