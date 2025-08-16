import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <img src="/kpmg-logo.svg" alt="KPMG" className="logo" />
        <h2>Welcome to Knitspace</h2>
        <p className="subtitle">Sign in to your account</p>
        <form>
          <label htmlFor="email">Enter your email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label htmlFor="password">Enter your password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          <button type="submit" className="login-btn">Login</button>
          <button type="button" className="sso-btn">SSO Login</button>
          <a href="#" className="forgot">Forgot password?</a>
        </form>
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default Login;
