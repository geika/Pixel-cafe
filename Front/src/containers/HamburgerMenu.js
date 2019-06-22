import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import HamburgerMenu from 'src/components/Nav/HamburgerMenu/MenuContent';

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
const HamburgerMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HamburgerMenu);

export default withRouter(HamburgerMenuContainer);
