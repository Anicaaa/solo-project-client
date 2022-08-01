import React from "react";
import { useState } from "react";

const apiUrl = "http://localhost:4000";

const initialUser = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const [userData, setUserData] = useState(initialUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    };
    console.log(opts);
    await fetch(`${apiUrl}/user/register`, opts)
      .then((res) => res.json())
      .then((createdUser) => console.log("USER CREATED", createdUser));
  };

  function handleChange(event) {
    const { name, type, value, checked } = event.target;

    if (name === "name" && type === "text") {
      setUserData({ ...userData, name: value });
    }
    if (name === "email" && type === "email") {
      setUserData({ ...userData, email: value });
    }
    if (name === "password" && type === "password") {
      setUserData({ ...userData, password: value });
    }
    if (name === "confirmPassword" && type === "password") {
      setUserData({ ...userData, confirmPassword: value });
    }
  }

  return (
    <div>
      <form className="account-form" onSubmit={handleSubmit}>
        <h1 className="center">Register</h1>
        <div className="input-space">
          <input
            className="input-size"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
            value={userData.name}
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
            onChange={handleChange}
            value={userData.email}
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
            onChange={handleChange}
            value={userData.password}
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
            onChange={handleChange}
            value={userData.confirmPassword}
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
