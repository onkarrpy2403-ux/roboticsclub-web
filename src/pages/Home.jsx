import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { FaFacebook, FaYoutube } from "react-icons/fa";

// here we call api and get data from backend in future
const data_achievement = [
  {
    title: "1st Place in National Robotics Challenge",
    desc: "Our team secured the top spot with an innovative autonomous robot design.",
  },
  {
    title: "Published Research in Robotics Journal",
    desc: "Our members' paper on AI-driven robotics was featured in a leading journal.",
  },
];

const upcomingevents = [
  {
    title: "Annual Robotics Competition",
    desc: "Join us for an exciting day of robotics battles and innovation!",
    date: "October 13, 2026",
  },
  {
    title: "Robotics Workshop Series",
    desc: "Hands-on sessions on Arduino and AI fundamentals.",
    date: "November 5, 2026",
  },
];

const club_highlight = [
  {
    title: "Competitions",
    desc: "Participate in thrilling robotics challenges.",
    icon: "🏆",
  },
  {
    title: "Workshops",
    desc: "Learn cutting-edge robotics skills.",
    icon: "🛠️",
  },
  {
    title: "Projects",
    desc: "Build innovative robots and gadgets.",
    icon: "🔧",
  },
  {
    title: "Community",
    desc: "Connect with fellow robotics enthusiasts.",
    icon: "👥",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [currentEvent, setCurrentEvent] = useState(0);
  const [direction, setDirection] = useState("");

  const handleJoinUs = () => {
    navigate("../roboticsclub-web/contacts");
  };

  const handleNext = () => {
    setDirection("right");
    setTimeout(() => {
      setCurrentEvent((prev) => (prev + 1) % upcomingevents.length);
      setDirection("");
    }, 200);
  };

  const handleBack = () => {
    setDirection("left");
    setTimeout(() => {
      setCurrentEvent(
        (prev) => (prev - 1 + upcomingevents.length) % upcomingevents.length
      );
      setDirection("");
    }, 200);
  };

  useEffect(() => {
    document.title = "Home | Robotics Club | NITP";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('../roboticsclub-web/background.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-5 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-blue-500">
            Robotics Club
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-200">
            Building the Future with Robotics
          </p>
          <button 
          onClick={handleJoinUs}
          class="px-6 py-3 bg-blue-600 cursor-pointer text-white font-semibold rounded-full shadow-xl shadow-blue-600/50 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700/50 transition duration-300 ease-in-out">
            Join Us
          </button>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
            Club Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {club_highlight.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-900 hover:scale-105 text-white rounded-md shadow-2xl p-6 text-center transition-all duration-300 border border-gray-700 hover:shadow-blue-500/50"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl text-cyan-300 font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-300">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-black text-white relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
            Upcoming Event
          </h2>
          <div className="relative flex items-center justify-between">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="text-cyan-400 font-bold py-2 md:px-4 rounded-full hover:bg-cyan-500/50 hover:scale-125 cursor-pointer transition duration-300 disabled:opacity-50 disabled:cursor-normal z-10"
              disabled={upcomingevents.length <= 1}
            >
              <MdOutlineKeyboardDoubleArrowLeft size={25} />
            </button>

            {/* Event Card with Transition */}
            <div
              className={`bg-gray-900 min-h-20 rounded-lg py-8 px-4 text-white hover:scale-105 flex-1 mx-4 shadow-2xl transition-all duration-300 ease-in-out border border-gray-700 hover:shadow-cyan-500/50 ${
                direction === "right"
                  ? "transform -translate-x-full opacity-0"
                  : direction === "left"
                  ? "transform translate-x-full opacity-0"
                  : "transform translate-x-0 opacity-100"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-400">
                {upcomingevents[currentEvent].title}
              </h3>
              <p className="text-lg text-gray-300">
                {upcomingevents[currentEvent].desc}
              </p>
              <p className="text-lg text-gray-400 mb-6">
                <strong>Date: </strong> {upcomingevents[currentEvent].date}
              </p>
              <Link
                to="/roboticsclub-web/events"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-2xl cursor-pointer transition duration-300 hover:scale-105 shadow-lg"
              >
                Learn More
              </Link>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="text-cyan-400 font-bold py-2 md:px-4 rounded-full hover:bg-cyan-500/50 hover:scale-125 cursor-pointer transition duration-300 disabled:opacity-50 disabled:cursor-default z-10"
              disabled={upcomingevents.length <= 1}
            >
              <MdOutlineKeyboardDoubleArrowRight size={25} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
            Recent Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data_achievement.map((achieveData, index) => (
              <div
                key={index}
                className="bg-gray-900 hover:scale-105 rounded-md p-6 shadow-2xl transition-all duration-300 border border-gray-700 hover:shadow-blue-500/50"
              >
                <h3 className="text-xl text-cyan-300 font-semibold mb-2">
                  {achieveData.title}
                </h3>
                <p className="text-gray-300">{achieveData.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl text-center font-semibold mb-2 text-cyan-400">
              Connect with Us
            </h3>
            <div className="flex space-x-4">
              <Link
                to="https://facebook.com/robonitp"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-110 duration-300"
              >
                <span className="text-4xl">
                  <FaFacebook />
                </span>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to="https://www.youtube.com/@roboticsclubnitp8637"
                target="_blank"
                className="text-red-400 hover:text-red-300 transition-colors hover:scale-110 duration-300"
              >
                <span className="text-4xl">
                  <FaYoutube />
                </span>
                <span className="sr-only">Youtube</span>
              </Link>
              <Link
                to="https://www.instagram.com/robotics_club_nitp/"
                target="_blank"
                className="text-pink-400 hover:text-pink-300 transition-colors hover:scale-110 duration-300"
              >
                <span className="text-4xl">
                  <IoLogoInstagram />
                </span>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to="https://www.linkedin.com/company/robotics-club-nit-patna/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400 transition-colors hover:scale-110 duration-300"
              >
                <span className="text-4xl">
                  <IoLogoLinkedin />
                </span>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-2 text-gray-300">
              <b>Email: </b>
              <Link
                to="mailto:roboticsclub@nitp.ac.in"
                className="text-cyan-400 hover:text-cyan-300"
              >
                roboticsclub@nitp.ac.in
              </Link>
            </p>
            <p className="mb-2 text-gray-300">
              <b>Phone: </b>
              <Link
                to="tel:0612-2371715"
                className="text-cyan-400 hover:text-cyan-300"
              >
                0612-2371715
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
