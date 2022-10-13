import { Component } from "react";
import "./AuthPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default class AuthPage extends Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <div className="AuthPage">
        <div>
          <h3
            onClick={() => this.setState({ showLogin: !this.state.showLogin })}
          >
            {this.state.showLogin ? "SIGN UP" : "LOG IN"}
          </h3>
        </div>
        {this.state.showLogin ? (
          <LoginForm setUserInState={this.props.setUserInState} />
        ) : (
          <SignUpForm setUserInState={this.props.setUserInState} />
        )}
      </div>
    );
  }
}
