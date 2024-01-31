import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";
import TestPage from "./pages/Test";
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
      </Routes>
    </>
  );
}
