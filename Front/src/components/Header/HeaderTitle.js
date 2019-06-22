import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const HeaderTitle = ({ title, subtitle }) => (
  <div id="title">
    <h1 className="sub-title1">{title}</h1>
    <div className="line" />
    <p className="sub-title2">{subtitle}</p>
  </div>
);

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default HeaderTitle;
