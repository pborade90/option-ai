// rrd imports
import { Routes, Route } from "react-router-dom";

// pages and componenets
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import OptionsPage from "./pages/OptionsPage";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/options" element={<OptionsPage />} />
      </Routes>
    </Layout>
  );
};

export default App;