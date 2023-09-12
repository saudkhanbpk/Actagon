import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from './components/Logo/Logo'
// import Signup from './components/Signup/Signup'
import Phonelogin from "./components/Phonelogin/Phonelogin";
import Textcode from "./components/Textcode/Textcode";
import Signup from './components/Signup-for-number/Signup'
import SignupCode from "./components/Signup-cod-number/Signup";
import LoginCode from "./components/Login-code/LoginCode";
import EmailCode from "./components/Emailed-Code/EmailCode";
import ActivityScreen from "./components/ActivityScreen/ActivityScreen";
import SignupEmail from "./components/SignupEmail/SignupEmail";
import User from "./components/UserName/User";
import ChangeUserName from "./components/ChangeUserName/ChangeUserName";
import Profile from "./components/profile/Profile";
import YouUserName from "./components/YourUserName/YourUserName";
import PaymentsEmpty from "./components/Payments/PaymentsEmpty/PaymentsEmpty";
import Transition from "./components/Payments/Transactions/Transactions";
function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/phone" element={<Phonelogin />} />
        <Route path="/text" element={<Textcode />} />
        <Route path="/signup-code" element={<SignupCode />} />
        <Route path="/logincode" element={<LoginCode />}/>
        <Route path="/signup-email" element={<SignupEmail />} />
        <Route path="/emailedcode" element={<EmailCode />}/>
        <Route path="/activity" element={<ActivityScreen />}/>
        {/* <Route path="/reset-password" element={<PwdResetEmail />} /> */}
        <Route path="/user" element={<User />} />
        <Route path="/changeUserName" element={<ChangeUserName />} />
        <Route path="/yourUserName" element={<YouUserName />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/paymentsEmpty" element={<PaymentsEmpty />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
