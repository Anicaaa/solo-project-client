import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiUrl = "http://localhost:4000";

const initialUser = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [userData, setUserData] = useState(initialUser);
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };
    console.log(opts);
    await fetch(`${apiUrl}/user/login`, opts)
      .then((res) => res.json())
      .then((token) => {
        localStorage.setItem("token", token.data);
        console.log(`token for ${userData.email} is ${token.data}`);
        navigate("/country");
      });
  };

  function handleChange(event) {
    const { name, type, value } = event.target;

    if (name === "email" && type === "email") {
      setUserData({ ...userData, email: value });
    }
    if (name === "password" && type === "password") {
      setUserData({ ...userData, password: value });
    }
  }

  return (
    <div>
      <form className="account-form" onSubmit={handleLogin}>
        <h1 className="center">Login</h1>
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
