import { connect } from 'react-redux';

import LoginView from 'src/components/LoginPage/LoginView';

import { submitLogins } from 'src/store/reducer';

const mapStateToProps = state => ({
  message: state.message,
  usernameIsConnected: state.usernameIsConnected,
});


const mapDispatchToProps = dispatch => ({
  submitLogins: (logins) => {
    dispatch(submitLogins(logins));
  },
});

const LoginViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);

export default LoginViewContainer;
