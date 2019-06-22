import React from 'react';
import AboutUs from 'src/components/Home/AboutUs';
import HomeEvent from 'src/components/Home/HomeEvent';
import RowImages from 'src/components/Home/RowImages';
import Info from 'src/components/Home/Info';

import './home.scss';

const Home = () => (
  <div id="app">
    <AboutUs />
    <HomeEvent />
    <RowImages />
    <Info />
  </div>
);

export default Home;
