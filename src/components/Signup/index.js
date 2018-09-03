import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import createUser from '../../containers/actions/signup';
// import error_message from '../../containers/actions/signup';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      user: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      },
    };

    this.props.createUser(user);
  }

  handleLoader(e) {
    e.preventDefault();
    isFetching = this.props.signup.isFetching;
    if (isFetching === false) {
      this.setState('Sign up for free');
    }
    this.setState('Signing up...');
  }

  render() {
    const error = this.props.signup.error;

    return (
      <div>
        <div className="container">
          <div className="box" id="sign-up">
            <h2 className="title"> Sign up now </h2>
          </div>
          <div className="form">
            <form>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Your username"
                  required
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <div>{error.username}</div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <div>{error.email}</div>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Create your password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <div>{error.password}</div>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm your password"
                  required
                />
                <div>{error.password}</div>
              </div>
              <button type="submit" name="signup" onClick={this.handleSubmit}>
                Sign up for free
              </button>
              <div>
                Already have an account?
                {' '}
                <a href="#signin">Signin here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Signup.propTypes = {
  createUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ signup, }) => ({
  signup,
});
export default connect(
  mapStateToProps,
  { createUser, }
)(Signup);
