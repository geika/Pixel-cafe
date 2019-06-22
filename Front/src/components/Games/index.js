import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ImgBox from './ImgBox';
import GamesBox from './GamesBox';
import './games.scss';

const uuid = require('uuid-v4');

const Games = ({ getDataGames, data }) => {

  useEffect(() => {
    getDataGames();
  }, []);

  return (
    <div id="games">
      {data.map(console => (
        <div key={uuid()}>
          {console.id % 2 === 0
            ? (
              <div className="pair">
                <ImgBox side="right" data={console} />
                <GamesBox data={console} />
              </div>
            )
            : (
              <div className="inpair">
                <ImgBox side="left" data={console} />
                <GamesBox data={console} />
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

Games.propTypes = {
  getDataGames: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Games;
