import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-medium text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 Options AI. All rights reserved.</p>
          </div>

          <div className="flex space-x-6 text-sm">
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-6 text-sm text-primary-light">
          Designed with ❤️ by the Options AI team.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
