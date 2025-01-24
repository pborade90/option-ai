// rrd imports
import { Routes, Route } from "react-router-dom";

// pages and componenets
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import OptionsPage from "./pages/OptionsPage";
import AboutPage from "./pages/AboutPage";
import TermsPage from "./pages/TermsPage";
import ContactPage from "./pages/ContactPage";
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
