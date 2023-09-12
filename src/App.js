import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from './components/Logo/Logo'
// import Signup from './components/Signup/Signup'
import Phonelogin from "./components/Phonelogin/Phonelogin";
import Textcode from "./components/Textcode/Textcode";
import Signup from './components/Signup-for-number/Signup'
import SignupCode from "./components/Signup-cod-number/Signup";
function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/phone" element={<Phonelogin />}/>
        <Route path="/text" element={<Textcode />}/>
        <Route path="/signup-code" element={<SignupCode />}/>

      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
