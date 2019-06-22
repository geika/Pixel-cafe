import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import App from 'src/components/App';

// Action Creators
import { setMenuName, setDisplayNane, setDisplaySubtitle } from 'src/store/reducer';


const mapStateToProps = state => ({
  pathName: state.pathName,
});


const mapDispatchToProps = dispatch => ({
  sendUrl: (match, label, subtitle) => {
    const pathName = match.url.substr(1);
    dispatch(setMenuName(pathName));
    dispatch(setDisplayNane(label));
    dispatch(setDisplaySubtitle(subtitle));
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


export default withRouter(AppContainer);
