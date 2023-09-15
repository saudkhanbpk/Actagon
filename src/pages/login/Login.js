import React, { useState } from "react";
import Phonelogin from "../../components/Phonelogin/Phonelogin";
import EmailCode from "../../components/Emailed-Code/EmailCode";
import { emailAuth, verifyEmailOtp } from "./../../service/Auth";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    otp: "",
  });
  const [step, setStep] = useState(1);

  const handleEmailAuth = async () => {
    await emailAuth({
      email: login.email,
    })
      .then((res) => {
        console.log("login line 17:", res);
        if (res) {
          setStep(2)
        }
      })

      .catch((e) => {
        console.log("login line 19:", e);
      });
  };

  const handleemailOtp = async () => {
    await verifyEmailOtp({
      email: login.email,
      otp: login.otp
    }).then((res) => {
      console.log("login line 33:", res)
      localStorage.setItem("loginToken", res.data.token)
    }).catch((error) => {
      console.log("login line 35:", error)
    })
  }

  return (
    <>
      {step === 1 && (
        <Phonelogin
          email={login.email}
          setEmail={(email) => setLogin({ ...login, email })}
          handleEmailAuth={handleEmailAuth}
          step={step}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <EmailCode
          otp={login.otp}
          setOtp={(otp) => setLogin({ ...login, otp })}
          handleemailOtp={handleemailOtp}
          step={step}
          setStep={setStep}
        />
      )}
    </>
  );
}

export default Login;
