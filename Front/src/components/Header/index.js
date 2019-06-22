import React from 'react';
import PropTypes from 'prop-types';

import HeaderTitle from './HeaderTitle';


const Header = ({ path, displayName, displaySubtitle }) => (
  <div className={`header${path}`}>
    <HeaderTitle title={displayName} subtitle={displaySubtitle} />
  </div>
);

Header.propTypes = {
  path: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  displaySubtitle: PropTypes.string.isRequired,
};

export default Header;
