import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ResumeForm from "../components/Resume/ResumeForm";
import History from "../components/History/History";
function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* MAIN ATS FEATURE */}
        <Route path="/analysis" element={<ResumeForm />} />
        <Route path="/history" element={<History />} />
        </Routes>
        );
    }
    export default AppRoutes;

