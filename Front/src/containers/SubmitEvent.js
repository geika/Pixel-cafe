import { connect } from 'react-redux';

import SubmitEvent from 'src/components/Event/SubmitEvent';

// Action Creators
import { sendData, setEventSubmited } from 'src/store/reducer';

const mapStateToProps = state => ({
  data: state.dataEvents,
  viewForm: state.eventSubmitView,
  username: state.usernameIsConnected,
  isConnected: state.isConnected,
});

const mapDispatchToProps = dispatch => ({
  sendData: (data) => {
    dispatch(sendData(data));
  },

  reloadEventView: () => {
    dispatch(setEventSubmited());
  },

});

// Container
const SubmitEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubmitEvent);

export default SubmitEventContainer;
