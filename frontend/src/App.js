import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import LandingPage from "./pages/landing.jsx";
import Authentication from "./pages/authentication.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import VideoMeet from "./pages/VideoMeet.jsx";
function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/:url' element={<VideoMeet/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

