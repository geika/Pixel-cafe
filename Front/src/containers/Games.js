import { connect } from 'react-redux';

import Games from 'src/components/Games';

// Action Creators
import { getDataGames } from 'src/store/reducer';

const mapStateToProps = state => ({
  data: state.dataGames,
});

const mapDispatchToProps = dispatch => ({
  getDataGames: () => {
    dispatch(getDataGames());
  },
});

// Container
const GamesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Games);

export default GamesContainer;
