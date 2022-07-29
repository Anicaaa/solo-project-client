import React from "react";
// import { useState } from "react";

const RegisterPage = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  /* You need a useEffect to get the http POST request */

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   const opts = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name, email, password, confirmPassword }),
  //   };
  //   console.log(opts);
  //   await fetch(`${apiUrl}/register`, opts)
  //     .then((res) => res.json())
  //     .then((createdUser) => console.log("USER CREATED", createdUser));
  // };

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
