import { connect } from 'react-redux';
import { login } from '../../actions/authentication.actions';
import Login from './Login';

const mapStateToProps = state => ({
  auth: state.authData.auth
});

const mapDispatchToProps = dispatch => ({
  handleLoginSubmit: (email, password) => {
    return dispatch(login(email, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
