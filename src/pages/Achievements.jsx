import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTrophy,
  FaBook,
  FaAward,
  FaProjectDiagram,
  FaCalendarAlt,
  FaMedal,
  FaNewspaper,
} from "react-icons/fa"; // Importing icons from react-icons

export default function Achievements() {
  const [counters, setCounters] = useState({
    competitions: 0,
    publications: 0,
    awards: 0,
    projects: 0,
  });

  useEffect(() => {
    document.title = "Achievements | Robotics Club | NITP";
  }, []);

  useEffect(() => {
    // Animate counters
    const targetCounters = {
      competitions: 15,
      publications: 8,
      awards: 12,
      projects: 25,
    };

    const interval = setInterval(() => {
      setCounters((prev) => {
        const newCounters = { ...prev };
        let allReached = true;
        Object.keys(targetCounters).forEach((key) => {
          if (newCounters[key] < targetCounters[key]) {
            newCounters[key] += Math.ceil(targetCounters[key] / 50);
            if (newCounters[key] > targetCounters[key])
              newCounters[key] = targetCounters[key];
            allReached = false;
          }
        });
        if (allReached) clearInterval(interval);
        return newCounters;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  //here we call apis in future and get data from backend.
  const competitions = [
    {
      name: "International Robotics Competition",
      year: 2023,
      prize: "1st Place - ₹ 10,000",
      members: ["Madhukar Kumar", "Rahul Verma", "Sneha Singh"],
      photo:
        "https://tecnico.ulisboa.pt/files/2023/07/competi-o-de-robots..jpg",
    },
    {
      name: "National AI Challenge",
      year: 2022,
      prize: "2nd Place - ₹ 5,000",
      members: ["Aman Kumar", "Neha", "Aditya"],
      photo:
        "https://itag.ie/wp-content/uploads/2025/07/Screenshot-2025-07-08-at-16.22.10-1024x504.png.webp",
    },
    {
      name: "RoboCup Junior",
      year: 2021,
      prize: "3rd Place - ₹ 2,500",
      members: ["Rohit", "Pooja", "Shivam"],
      photo:
        "https://ai.sony/wp-content/uploads/2021/06/thumbnail_image002.jpg",
    },
  ];

  const publications = [
    {
      title: "Advancements in Autonomous Navigation for Industrial Robots",
      venue: "IEEE International Conference on Robotics and Automation",
      year: 2023,
      authors: ["Dr. Sharma", "Mahesh Kumar", "Rahul Verma"],
    },
    {
      title: "Machine Learning Applications in Soft Robotics",
      venue: "Journal of Robotics Research",
      year: 2022,
      authors: ["Sneha Singh", "Aman Kumar", "Dr. Sharma"],
    },
    {
      title: "Human-Robot Collaboration in Manufacturing Environments",
      venue: "Robotics and Autonomous Systems Journal",
      year: 2021,
      authors: ["Neha", "Aditya", "Dr. Sharma"],
    },
  ];

  const awards = [
    {
      name: "Innovation Grant for Robotics Research",
      organization: "Ministry of Education",
      year: 2023,
      amount: "₹ 50,000",
    },
    {
      name: "Best Student Project Award",
      organization: "Indian Robotics Society",
      year: 2022,
      amount: "₹ 10,000",
    },
    {
      name: "Young Innovator Award",
      organization: "Tech Excellence Foundation",
      year: 2021,
      amount: "₹ 15,000",
    },
  ];

  const timeline = [
    {
      year: 2023,
      events: [
        "Won 1st place in International Robotics Competition",
        "Received Innovation Grant from Ministry of Education",
        "Published paper in IEEE ICRA",
      ],
    },
    {
      year: 2022,
      events: [
        "2nd place in National AI Challenge",
        "Best Student Project Award from Indian Robotics Society",
        "Published paper in Journal of Robotics Research",
      ],
    },
    {
      year: 2021,
      events: [
        "3rd place in RoboCup Junior",
        "Young Innovator Award from Tech Excellence Foundation",
        "Published paper in Robotics and Autonomous Systems Journal",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16 pb-8 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <section className="p-4 pt-12 text-center mb-6">
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Celebrating our milestones, victories, and groundbreaking
            contributions to the world of robotics.
          </p>
        </section>

        {/* Statistics Counter */}
        <section className="py-6 px-4 mb-6">
          <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:shadow-cyan-500/50 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
              <FaTrophy className="text-cyan-400" /> Achievement Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="text-5xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.competitions}+
                </div>
                <div className="text-gray-400 font-medium">
                  Competitions Won
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.publications}
                </div>
                <div className="text-gray-400 font-medium">Publications</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.awards}
                </div>
                <div className="text-gray-400 font-medium">Awards & Grants</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counters.projects}+
                </div>
                <div className="text-gray-400 font-medium">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Timeline */}
      <section className="py-8 px-4 mb-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:shadow-cyan-500/50 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaCalendarAlt className="text-purple-400" /> Achievement Timeline
          </h2>
          <div className="relative">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex mb-6 last:mb-0">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full shadow-lg animate-pulse"></div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-12 bg-cyan-400 mt-2 rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2 text-cyan-300">
                    {item.year}
                  </h3>
                  <ul className="space-y-1">
                    {item.events.map((event, eventIndex) => (
                      <li
                        key={eventIndex}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <FaMedal className="text-yellow-400 text-sm" />
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Wins */}
      <section className="py-8 px-4 mb-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaTrophy className="text-cyan-400" /> Competition Wins
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((comp, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-700 hover:scale-105 transition-all duration-300 group hover:shadow-blue-500/50"
              >
                <img
                  src={comp.photo}
                  alt={`${comp.name} ${comp.year}`}
                  className="w-full h-32 object-cover rounded-xl mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-2 text-cyan-300 group-hover:text-cyan-200">
                  {comp.name} ({comp.year})
                </h3>
                <p className="text-green-400 font-medium mb-2 text-lg">
                  {comp.prize}
                </p>
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">Team: </strong>
                  {comp.members.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section className="py-8 px-4 mb-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:shadow-cyan-500/50 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaBook className="text-purple-400" /> Research Publications
          </h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="border-b border-gray-600 pb-4 last:border-b-0 hover:bg-gray-800 p-3 rounded-lg transition-colors duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-1 text-cyan-300">
                  {pub.title}
                </h3>
                <p className="text-gray-400 mb-2">
                  {pub.venue} ({pub.year})
                </p>
                <p className="text-sm text-purple-400">
                  <strong>Authors: </strong>
                  {pub.authors.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Grants/Awards */}
      <section className="py-6 px-4 mb-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaAward className="text-green-400" /> Innovation Grants & Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-6 text-center shadow-xl border border-gray-700 hover:scale-105 transition-all duration-300 group hover:shadow-blue-500/50"
              >
                <FaAward className="text-4xl text-yellow-400 mb-3 mx-auto group-hover:animate-bounce" />
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                  {award.name}
                </h3>
                <p className="text-gray-400 mb-2">
                  {award.organization} ({award.year})
                </p>
                <p className="text-green-400 font-bold text-lg">
                  {award.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Media Coverage */}
      <section className="py-6 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaNewspaper className="text-pink-400" /> Recognition & Media
            Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/50">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                Featured in Tech Magazine
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                "Rising Stars in Robotics: University Club Makes Waves" - Tech
                Today, 2023
              </p>
              <Link
                to="https://technologymagazine.com/"
                target="_blank"
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
              >
                Read Article <span className="text-lg">→</span>
              </Link>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/50">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                Interview on Innovation Podcast
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Club president discusses AI in robotics - Future Tech Podcast,
                Episode 45, 2022
              </p>
              <Link
                to="https://open.spotify.com/show/4gDobzQkpG04UwqRlz6Rzb"
                target="_blank"
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
              >
                Listen Now <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
