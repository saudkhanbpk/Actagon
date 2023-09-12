import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from './components/Logo/Logo'
import Signup from './components/Signup/Signup'
import Phonelogin from "./components/Phonelogin/Phonelogin";
import Textcode from "./components/Textcode/Textcode";
function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/phone" element={<Phonelogin />}/>
        <Route path="/text" element={<Textcode />}/>

      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
