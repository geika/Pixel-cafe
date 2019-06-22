import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Header from 'src/components/Header';

// Action Creators

const mapStateToProps = state => ({
  path: state.pathName,
  displayName: state.displayName,
  displaySubtitle: state.displaySubtitle,
});

const mapDispatchToProps = {};

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default withRouter(HeaderContainer);
