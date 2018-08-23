import { connect } from 'react-redux';
import App from './App';
import { setCurrentUser } from './actions/users.actions';
import { logoutUser, loginSuccess } from './actions/authentication.actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleSetCurrentUser: decodedUserData => {
    return dispatch(setCurrentUser(decodedUserData));
  },
  handleLogout: () => {
    return dispatch(logoutUser());
  },
  handleLoginInWithValidToken: email => {
    return dispatch(loginSuccess(email));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
