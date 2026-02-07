import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import LandingPage from "./pages/landing.jsx";
import Authentication from "./pages/authentication.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path='/auth' element={<Authentication/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

