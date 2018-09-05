import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../login/login-styles';

class Register extends React.PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  handleInputOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    if (this.props.auth.loggedIn) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('in compwillreceiveprops register', nextProps);
    if (nextProps.auth.loggedIn) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleRegisterFormSubmit = e => {
    e.preventDefault();
    this.props
      .handleRegisterSubmit(this.state.name, this.state.email, this.state.password, this.state.password2)
      .then(() => this.props.history.push('/login'))
      .catch(error => console.log(`Registeration Error: ${error}`));
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Sign in</Typography>
            <form className={classes.form} onSubmit={this.handleRegisterFormSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  data-hook="register-name-input"
                  id="name"
                  name="name"
                  autoComplete="name"
                  onChange={this.handleInputOnChange}
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  data-hook="register-email-input"
                  id="email"
                  name="email"
                  autoComplete="email"
                  onChange={this.handleInputOnChange}
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  data-hook="register-password-input"
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleInputOnChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password2">Confirm Password</InputLabel>
                <Input
                  data-hook="register-password2-input"
                  name="password2"
                  type="password"
                  id="password2"
                  autoComplete="confirm-password"
                  onChange={this.handleInputOnChange}
                />
              </FormControl>
              <Button
                data-hook="register-submit-button"
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
