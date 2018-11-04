import React from "react";

const Login = props => {
  console.log(props);
  return (
    <div>
      <button onClick={props.login}>login</button>
      <button onClick={props.logout}>logout</button>
    </div>
  );
};

export default React.memo(Login);
