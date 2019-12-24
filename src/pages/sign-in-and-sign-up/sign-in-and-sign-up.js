import React from "react";
import "./sign-in-and-sign-up.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/Signup";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
