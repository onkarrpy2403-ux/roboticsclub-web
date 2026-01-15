import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl text-center font-semibold mb-2">
            Connect with Us
          </h3>
          <div className="flex space-x-4">
            <Link
              to="https://facebook.com/robonitp"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <span className="text-4xl">
                <FaFacebook />
              </span>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              to="https://www.youtube.com/@roboticsclubnitp8637"
              target="_blank"
              className="text-rose-600 hover:text-rose-700 transition-colors"
            >
              <span className="text-4xl">
                <FaYoutube />
              </span>
              <span className="sr-only">Youtube</span>
            </Link>
            <Link
              to="https://www.instagram.com/robotics_club_nitp/"
              target="_blank"
              className="text-pink-400 hover:text-pink-500 transition-colors"
            >
              <span className="text-4xl">
                <IoLogoInstagram />
              </span>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              to="https://www.linkedin.com/company/robotics-club-nit-patna/"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <span className="text-4xl">
                <IoLogoLinkedin />
              </span>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="mb-2">
            <b>Email: </b>
            <Link to="mailto:roboticsclub@nitp.ac.in">
              roboticsclub@nitp.ac.in
            </Link>
          </p>
          <p className="mb-2">
            <b>Phone: </b>
            <Link to="tel:0612-2371715">0612-2371715</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
