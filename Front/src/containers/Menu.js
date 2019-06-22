import { connect } from 'react-redux';

import Menu from 'src/components/Menu';

// Action Creators
import { getDataMenu } from 'src/store/reducer';

const mapStateToProps = state => ({
  data: state.dataMenu,
});

const mapDispatchToProps = dispatch => ({
  getDataMenu: () => {
    dispatch(getDataMenu());
  },
});

// Container
const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

export default MenuContainer;
