import React from "react";

const LoginPage = () => {
  return (
    <div>
      <form className="account-form">
        <h1 className="center">Login</h1>
        <div className="input-space">
          <input
            className="input-size"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          ></input>
        </div>
        <div className="input-space">
          <input
            className="input-size"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          ></input>
        </div>
        <div className="input-space">
          <input className="account-button" type="submit" value="Login"></input>
        </div>
        <div className="center">
          <a href="/register">Create Account</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
