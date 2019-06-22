import { connect } from 'react-redux';

import Reservation from 'src/components/Reservation';

// Action Creators
import { doSomething } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  doSomething: () => {
    dispatch(doSomething('Coucou'));
  },
});

// Container
const ReservationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reservation);

export default ReservationContainer;
