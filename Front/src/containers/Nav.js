import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Nav from 'src/components/Nav';

import { setConnected } from 'src/store/reducer';

// Action Creators

const mapStateToProps = state => ({
  path: state.pathName,
  displayName: state.displayName,
  displaySubtitle: state.displaySubtitle,
  isConnected: state.isConnected,
});

const mapDispatchToProps = dispatch => ({
  setConnected: (toggle) => {
    dispatch(setConnected(toggle));
  },

});

// Container
const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default withRouter(NavContainer);
