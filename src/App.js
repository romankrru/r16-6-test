import React, { Component } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import AuthContext from "./auth-context";

class App extends Component {
  state = {
    isAuth: false
  };

  toggleAuth = () =>
    this.setState(prevState => ({
      isAuth: !prevState.isAuth
    }));

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          toggleAuth: this.toggleAuth
        }}
      >
        <div className="App">Hello</div>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

export default App;
