import React from "react";
import "../styles/SignInScreen.css";
const SignInScreen = () => {
  return (
    <div className="signin_screen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signin__gray">New to Netflix? </span>
          <span className="signin__link">Sign Up now</span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
