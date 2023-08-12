import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using 'username' and 'password' states
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="desktop">
      <div className="login-box">
        <h1 className="login-heading">Login</h1>
        <div className="input-container">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="input-field"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter Username"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Password"
          />
        </div>
        <button className="login-button" onClick={handleFormSubmit}>
          LOGIN
        </button>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
