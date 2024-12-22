import landingPage from "../assets/landing-page.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-primary-background min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="container mx-auto p-8 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-primary-dark leading-tight">
            Welcome to <span className="text-primary-medium">Options AI</span>
          </h1>
          <p className="text-primary-medium mt-6 text-lg">
            Your ultimate platform for options trading predictions powered by
            cutting-edge machine learning.
          </p>
          <Link
            to="signup"
            className="mt-8 inline-block px-8 py-4 bg-primary-dark text-white font-bold text-lg rounded hover:bg-primary-light transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src={landingPage}
            alt="Options Trading Illustration"
            className="max-w-full w-3/4 lg:w-full"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto mt-16 px-8">
        <h2 className="text-3xl font-bold text-primary-dark text-center">
          Why Choose Options AI?
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-dark">AI-Powered Predictions</h3>
            <p className="text-primary-medium mt-4">
              Leverage machine learning to make informed trading decisions and
              stay ahead of the market.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-dark">User-Friendly Dashboard</h3>
            <p className="text-primary-medium mt-4">
              A clean, intuitive interface that lets you focus on what matters most: trading.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-dark">Comprehensive Insights</h3>
            <p className="text-primary-medium mt-4">
              Get detailed analysis of options trends, market movements, and price predictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
