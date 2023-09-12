import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from './components/Logo/Logo'
// import Signup from './components/Signup/Signup'
import Phonelogin from "./components/Phonelogin/Phonelogin";
import Textcode from "./components/Textcode/Textcode";
import Signup from './components/Signup-for-number/Signup'
import SignupCode from "./components/Signup-cod-number/Signup";
import User from "./components/UserName/User";
import ChangeUserName from "./components/ChangeUserName/ChangeUserName";
import Profile from "./components/profile/Profile";
import SignupEmail from "./components/SignupEmail/SignupEmail";
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
        <Route path="/signup-email" element={<SignupEmail />} />
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
