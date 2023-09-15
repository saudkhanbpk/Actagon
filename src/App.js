import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo/Logo";
// import Signup from './components/Signup/Signup'
import Phonelogin from "./components/Phonelogin/Phonelogin";
import Textcode from "./components/Textcode/Textcode";
import Signup from "./components/Signup-for-number/Signup";
import SignupCode from "./components/Signup-cod-number/Signup";
import LoginCode from "./components/Login-code/LoginCode";
import EmailCode from "./components/Emailed-Code/EmailCode";
import ActivityScreen from "./components/ActivityScreen/ActivityScreen";
import SignupEmail from "./components/SignupEmail/SignupEmail";
import User from "./components/UserName/User";
import ChangeUserName from "./components/ChangeUserName/ChangeUserName";
import UpdateProfilePicture from "./components/updateProfilePic/UpdateProfilePicture";
import Profile from "./components/profile/Profile";
import BottomNavigation from "./components/bottomNavigation/BottomNavigation";
import Friends from "./components/friends/Friends";
import Search from "./components/search/Search";
import YouUserName from "./components/YourUserName/YourUserName";
import PaymentsEmpty from "./components/Payments/PaymentsEmpty/PaymentsEmpty";
import Transition from "./components/Payments/Transactions/Transactions";
import ProfileView from "./components/profileView/ProfileView";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";
function App() {
  const [token, setToken] = useState(null)
  const getToken = () => {
    const tokenString = localStorage.getItem('loginToken')
    setToken(tokenString)
  }
  useEffect(() => {
    getToken()
  }, [])

  return <div>
    <BrowserRouter>
      {/* <BottomNavigation /> */}
      <Routes>
        {
          token ? <Route path="/" element={<BottomNavigation />} /> : <Route path="/" element={<Logo />} />
        }
        {/* <Route path="/" element={<Logo />} />
        <Route path="/home" element={<BottomNavigation />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/phone" element={<Phonelogin />} /> */}
        {/* <Route path="/text" element={<Textcode />} /> */}
        {/* <Route path="/signup-code" element={<SignupCode />} /> */}
        {/* <Route path="/logincode" element={<LoginCode />} /> */}
        {/* <Route path="/emailedcode" element={<EmailCode />} /> */}
        <Route path="/activity" element={<ActivityScreen />} />
        <Route path="/user" element={<User />} />
        <Route path="/changeUserName" element={<ChangeUserName />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profileView/:id" element={<ProfileView />} />
        <Route path="/signup-email" element={<SignupEmail />} />
        <Route path="/paymentsEmpty" element={<PaymentsEmpty />} />
        <Route path="/yourUserName" element={<YouUserName />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
