import React, { useState } from "react";
import Signup from "../../components/Signup-for-number/Signup";
import SignupCode from "../../components/Signup-cod-number/Signup";
import SignupEmail from "../../components/SignupEmail/SignupEmail";
import User from "../../components/UserName/User";
import YouUserName from "../../components/YourUserName/YourUserName";
import UpdateProfilePicture from "../../components/updateProfilePic/UpdateProfilePicture";
import {
  phoneAuth,
  verifyOtp,
  updateAllData
} from "../../service/Auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [registerData, setRegisterData] = useState({
    number: "",
    code: "",
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    profilePic: "",
  });

  console.log(registerData);
  const handlePhoneAuth = async () => {
    try {
      const { data } = await phoneAuth({
        phone: registerData.number,
      });
      console.log(data);
      setStep(2);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyPhoneOtp = async () => {
    try {
      const { data } = await verifyOtp({
        phone: registerData.number,
        otp: registerData.code,
      });
      console.log(data);
      setStep(3);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateAllData = async () => {
    try {
      const { data } = await updateAllData({
        phone: registerData.number,
        email: registerData.email,
        otp: registerData.code,
        username: registerData.username,
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        profile_img: registerData.profilePic,
      });
      console.log(data);
      navigate("/login")
      // setStep(6);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {step === 1 && (
        <Signup
          setStep={setStep}
          step={step}
          setNumber={(number) => setRegisterData({ ...registerData, number })}
          number={registerData.number}
          handlePhoneAuth={handlePhoneAuth}
        />
      )}
      {step === 2 && (
        <SignupCode
          setStep={setStep}
          step={step}
          verifyPhoneOtp={verifyPhoneOtp}
          code={registerData.code}
          setCode={(code) => setRegisterData({ ...registerData, code })}
        />
      )}
      {step === 3 && (
        <SignupEmail
          setStep={setStep}
          step={step}
          setEmail={(email) => setRegisterData({ ...registerData, email })}
          email={registerData.email}

        />
      )}
      {step === 4 && (
        <User
          setStep={setStep}
          step={step}

          setFirstName={(firstName) => setRegisterData({ ...registerData, firstName })}
          firstName={registerData.firstName}
          setLastName={(lastName) => setRegisterData({ ...registerData, lastName })}
          lastName={registerData.lastName}

        />
      )}
      {step === 5 && <YouUserName setStep={setStep} step={step}
        setUserName={(username) => setRegisterData({ ...registerData, username })} username={registerData.username}
        firstName={registerData.firstName}
      />}
      {step === 6 && <UpdateProfilePicture setStep={setStep} step={step}

        handleUpdateAllData={handleUpdateAllData}
        profilePic={registerData.profilePic}
        setProfilePic={(profilePic) => setRegisterData({ ...registerData, profilePic })}

      />}
    </>
  );
}

export default Register;
