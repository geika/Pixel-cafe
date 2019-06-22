import { connect } from 'react-redux';

import WatchEvent from 'src/components/Event/WatchEvent';

// Action Creators
import { getDataEvents, sendMsg, sendVote } from 'src/store/reducer';

const mapStateToProps = state => ({
  data: state.dataEvents,
  isConnected: state.isConnected,
});

const mapDispatchToProps = dispatch => ({
  getDataEvents: () => {
    dispatch(getDataEvents());
  },

  sendMsg: (data) => {
    dispatch(sendMsg(data));
  },

  sendVote: (data, eventId, token) => {
    dispatch(sendVote(data, eventId, token));
  },

});

// Container
const WatchEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchEvent);

export default WatchEventContainer;
