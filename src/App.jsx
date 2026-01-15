import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import News from "./pages/News";
import AboutUs from "./pages/AboutUs";
import Achievements from "./pages/Achievements";
import Contacts from "./pages/Contacts";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import NewsDetail from "./pages/NewsDetails.jsx";
import EventRegistration from "./pages/EventRegistration.jsx";
import PastEventDetails from "./pages/PastEventDetails.jsx";
import OngoingProjectDetails from "./pages/OngoingProjectDetails.jsx";

// Function to scroll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function GotoTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 text-white bg-blue-600 rounded-full shadow-3xl hover:bg-blue-700 hover:cursor-pointer transition-all duration-300 hover:scale-110 border border-cyan-500 hover:shadow-cyan-500/50"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
}

function PageNotFound() {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-cyan-400">
          404 - Page Not Found!
        </h1>
        <p className="p-5 text-xl text-gray-300">
          The resource you are looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <GotoTop />
      <Routes>
        <Route path="/roboticsclub-web/" element={<Home />} />
        <Route path="/roboticsclub-web/about" element={<AboutUs />} />
        <Route path="/roboticsclub-web/projects" element={<Projects />} />
        <Route
          path="/roboticsclub-web/projects/:pid"
          element={<ProjectDetails />}
        />
        <Route
          path="/roboticsclub-web/ongoingprojects/:pid"
          element={<OngoingProjectDetails />}
        />
        <Route path="/roboticsclub-web/events" element={<Events />} />
        <Route
          path="/roboticsclub-web/register/:eventid"
          element={<EventRegistration />}
        />
        <Route
          path="/roboticsclub-web/pastevents/:eventid"
          element={<PastEventDetails />}
        />
        <Route path="/roboticsclub-web/team" element={<Team />} />
        <Route
          path="/roboticsclub-web/achievements"
          element={<Achievements />}
        />
        <Route path="/roboticsclub-web/news" element={<News />} />
        <Route path="/roboticsclub-web/news/:newsid" element={<NewsDetail />} />
        <Route path="/roboticsclub-web/contacts" element={<Contacts />} />
        <Route path="/roboticsclub-web/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
