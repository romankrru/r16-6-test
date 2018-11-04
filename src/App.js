import React, { Component } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

class App extends Component {
  state = {
    isAuth: false
  };

  login = () =>
    this.setState({
      isAuth: true
    });

  logout = () =>
    this.setState({
      isAuth: false
    });

  render() {
    return (
      <React.Fragment>
        <Login
          isAuth={this.state.isAuth}
          login={this.login}
          logout={this.logout}
        />
        <Profile isAuth={this.state.isAuth} />
      </React.Fragment>
    );
  }
}

export default App;
