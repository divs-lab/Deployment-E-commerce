import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "../styles/login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-container">
              <input
                type={visible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              {visible ? (
                <AiOutlineEyeInvisible
                  className="icon"
                  onClick={() => setVisible(false)}
                  size={20}
                />
              ) : (
                <AiOutlineEye
                  className="icon"
                  onClick={() => setVisible(true)}
                  size={20}
                />
              )}
            </div>
          </div>
          <div className="options">
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="register-link">
          Not a user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
