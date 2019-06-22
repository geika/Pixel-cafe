//npm import
import { connect } from 'react-redux';


//action creators
import { submitNewUser } from 'src/store/reducer';

//component
import Register from 'src/components/LoginPage/Register';

//=== State ===
const mapStateToProps = state => ({
  messageSubmit: state.messageSubmit
});

//===Dispatch ===
const mapDispatchToProps = dispatch => ({
  submitNewUser: (newUserRegister) => {
    dispatch(submitNewUser(newUserRegister));
  },
});

//Container
const RegisterContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);

export default RegisterContainer;
