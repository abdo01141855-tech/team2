import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<HomeLayout />} />
    </Routes>
  );
}

export default App;