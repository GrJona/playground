import { connect } from 'react-redux';
import { register } from '../../actions/authentication.actions';
import Register from './Register';

const mapStateToProps = state => ({
  auth: state.authData.auth
});

const mapDispatchToProps = dispatch => ({
  handleRegisterSubmit: (name, email, password, password2) => {
    return dispatch(register(name, email, password, password2));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
