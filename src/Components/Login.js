import React from "react";
import AuthContext from "../auth-context";

class Login extends React.Component {
  static contextType = AuthContext;

  render() {
    return (
      <button onClick={this.context.toggleAuth}>
        {this.context.isAuth ? "logout" : "login"}
      </button>
    );
  }
}

export default Login;
