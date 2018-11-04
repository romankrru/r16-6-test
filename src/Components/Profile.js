import React from "react";
import AuthContext from "../auth-context";

const Profile = () => {
  return (
    <AuthContext.Consumer>
      {authContext => {
        return (
          <h1>
            {authContext.isAuth ? "You are logged in" : "You are logged out"}
          </h1>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Profile;
