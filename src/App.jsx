import Navigation from "./components/navigation/Navigation";
import House from "./pages/3D/House";
import Inside from "./pages/3D/Inside";
import Home from "./pages/Home";
import TestPage from "./pages/Test";
import Board from "./pages/board/Board";
import Signin from "./pages/sign/Signin";
import Signup from "./pages/sign/Signup";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/inside" element={<Inside />} />
        <Route path="/house" element={<House />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </>
  );
}
