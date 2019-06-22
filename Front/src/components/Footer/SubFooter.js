import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

const SubFooter = ({ color }) => (
  <div id={`sub-footer${color}`}>
    <p className="">Pixel Café &copy; 2019</p>
  </div>
);

SubFooter.propTypes = {
  color: PropTypes.string.isRequired,
};

export default SubFooter;
