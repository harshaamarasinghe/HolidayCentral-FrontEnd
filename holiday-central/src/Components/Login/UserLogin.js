import React from "react";

const UserLogin = (props) => {
  const addLoginHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addLoginHandler}>
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" /> <br />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" /> <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
