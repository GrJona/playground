import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authentication.actions';
import Dashboard from './Dashboard';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    return dispatch(logoutUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
