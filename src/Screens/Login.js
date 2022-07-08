import React, { useState } from "react";
import "../styles/Login.css";
import SignInScreen from "./SignInScreen";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          alt="logo"
          src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
        />
        <button className="loginScreen_btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="logoScreen_gradient"></div>
        <div className="loginScreen_body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h1>Unlimited Flims, TV programmes and more</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart the
                membership
              </h3>
              <div>
                <form>
                  <input
                    className="loginScreen_input"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="loginScreen_button"
                    onClick={() => setSignIn(true)}
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
