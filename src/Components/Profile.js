import React from "react";

const Profile = props => {
  return <h1>{props.isAuth ? "Authenticated" : "Not authenticated"}</h1>;
};

export default Profile;
