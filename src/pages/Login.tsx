import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <section className="login-form">
        <img src="/kpmg-logo.svg" alt="KPMG" className="logo" />
        <h1 className="title">Welcome to Knitspace</h1>
        <p className="subtitle">Sign in to your account</p>
        <form className="form">
          <label htmlFor="email">Enter your email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          <label htmlFor="password">Enter your password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
          <button type="submit" className="login-btn">Login</button>
          <button type="button" className="sso-btn">SSO Login</button>
          <a href="#" className="forgot">Forgot password?</a>
        </form>
      </section>
      <section className="login-image" aria-hidden="true" />
    </div>
  );
};

export default Login;
