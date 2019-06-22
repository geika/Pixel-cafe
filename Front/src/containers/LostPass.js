import { connect } from 'react-redux';


import LostPass from 'src/components/LoginPage/LostPass';

import { submitEmail } from 'src/store/reducer';

const mapStateToProps = state => ({
  message: state.message,
});


const mapDispatchToProps = dispatch => ({
  submitEmail: (sendEmail) => {
    dispatch(submitEmail(sendEmail));
  },
});

const LostPassContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LostPass);

export default LostPassContainer;
