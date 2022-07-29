import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <form className="account-form">
        <h1 className="center">Register</h1>
        <div className="input-space">
          <input
            className="input-size"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          ></input>
        </div>
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
          <input
            className="input-size"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          ></input>
        </div>
        <div className="input-space">
          <input
            className="account-button"
            type="submit"
            value="Register"
          ></input>
        </div>
        <div className="center">
          <a href="/">Already registered?</a>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
