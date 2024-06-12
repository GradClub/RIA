// src/LoginPage.js

import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="left-side">
        <div className="center-box">
          <img src="/assets/logo.svg" class="card-img" alt="..." />
        </div>
      </div>
      <div className="right-side">
        <form className="login-form">
          <h1 className="login-heading">Login</h1>
          <div className="form-group">
            <label htmlFor="username" className="email">Email id</label>
            <input type="text" id="username" name="username" placeholder="Enter your email id here" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password here" />
          </div>
          <button type="submit" className="login-button">Login</button>
          <a href="#" className="forgot-password">Forgot password?</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
