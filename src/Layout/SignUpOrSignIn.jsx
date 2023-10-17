import React, { useState } from "react";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import { Helmet } from "react-helmet-async";

const SignUpOrSignIn = () => {
  const [signuporsignin, setSignuporsignin] = useState("SignUp");
  console.log(signuporsignin);

  return (
    <div>
        <Helmet>
        <title>SignUp Or SignIn</title>
      </Helmet>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setSignuporsignin("SignUp")}
          className={signuporsignin == "SignUp" ? "btn btn-primary" : "btn"}
        >
          SignUP
        </button>
        <button
          onClick={() => setSignuporsignin("SignIn")}
          className={signuporsignin == "SignIn" ? "btn btn-primary" : "btn"}
        >
          SignIn
        </button>
      </div>
      {signuporsignin == "SignUp" ? <SignUp handleClick={setSignuporsignin}/> : <SignIn handleClick={setSignuporsignin}/>}
    </div>
  );
};

export default SignUpOrSignIn;
