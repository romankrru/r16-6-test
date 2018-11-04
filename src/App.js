import React, { Component, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";
import Welcome from "./Components/Welcome";
import User from "./Components/User";
// import Posts from "./Components/Posts";

const Posts = React.lazy(() => import("./Components/Posts"));

console.log(Suspense);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User page</NavLink>
            <NavLink to="/posts">Posts page</NavLink>
          </nav>
          <Route component={Welcome} path="/" exact />
          <Route component={User} path="/user" />
          <Route
            render={() => (
              <Suspense fallback={<div>Loading....</div>}>
                <Posts />
              </Suspense>
            )}
            path="/posts"
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
