import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo/Logo";
// import Signup from './components/Signup/Signup'
import Phonelogin from "./components/Phonelogin/Phonelogin";
import Textcode from "./components/Textcode/Textcode";
import Signup from "./components/Signup-for-number/Signup";
import SignupCode from "./components/Signup-cod-number/Signup";
import PwdResetEmail from "./components/Email-reset-password/PwdResetEmail";
import User from "./components/UserName/User";
import ChangeUserName from "./components/ChangeUserName/ChangeUserName";
import UpdateProfilePicture from "./components/updateProfilePic/UpdateProfilePicture";
import Profile from "./components/profile/Profile";
import BottomNavigation from "./components/bottomNavigation/BottomNavigation";
import Friends from "./components/friends/Friends";
import Search from "./components/search/Search";
import ProfileView from "./components/profileView/ProfileView";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <BottomNavigation /> */}
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/phone" element={<Phonelogin />} />
          <Route path="/text" element={<Textcode />} />
          <Route path="/signup-code" element={<SignupCode />} />
          <Route path="/reset-password" element={<PwdResetEmail />} />
          <Route path="/user" element={<User />} />
          <Route path="/changeUserName" element={<ChangeUserName />} />
          <Route path="/updateProfilePic" element={<UpdateProfilePicture />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profileView/:id" element={<ProfileView />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
