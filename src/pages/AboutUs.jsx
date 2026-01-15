import { useEffect } from "react";
import {
  FaRocket,
  FaTrophy,
  FaTools,
  FaGlobe,
  FaBrain,
  FaHistory,
  FaEye,
  FaBullseye,
  FaCogs,
  FaFlask,
  FaMicrochip,
  FaCalendarAlt,
} from "react-icons/fa"; // Importing icons for visual appeal
import { GiArcheryTarget, GiTargetArrows } from "react-icons/gi";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Robotics Club | NITP";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-16">
      <div className="relative z-10">
        {/* Header */}
        <section className="p-4 pt-12 md:px-8 text-center">
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Discover our journey, mission, and the exciting world of robotics we
            build together.
          </p>
        </section>

        {/* Club History */}
        <section className="px-4 md:px-8 pb-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <FaHistory className="text-cyan-400" /> Our History
            </h2>
            <div className="bg-gray-900 rounded-2xl p-5 shadow-2xl border border-gray-700 hover:shadow-cyan-500/50 transition-all duration-300">
              <p className="text-lg leading-relaxed mb-3 text-gray-300">
                <strong>Robotics Club</strong> has been the embodiment of
                innovation at NIT Patna. Founded in 2015-16 by Nripendra Saroj
                Sir, our club boasts a glorious legacy. With members ranging
                from seasoned coders to brilliant designers to hardware
                scientists, we've represented our college at Smart India
                Hackathon, led by our current Captain Dheeraj Kumar Sir. We
                constantly enhance students’ technical skills and raise
                awareness of the fascinating world of automation, robotics, and
                electronics. Our techno-cultural fest this year was an
                exhilarating rollercoaster ride.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                We focus on fostering innovation through exciting events and
                hands-on experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Objectives */}
        <section className="py-6 px-4 md:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <GiTargetArrows className="text-purple-400" /> Mission, Vision &
              Objectives
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-full sm:w-80 bg-gray-900 rounded-2xl p-4 hover:scale-105 transition-all duration-300 shadow-2xl border border-gray-700 group hover:shadow-blue-500/50">
                <FaEye className="text-3xl text-cyan-400 mb-3 mx-auto group-hover:animate-bounce" />
                <h3 className="text-2xl font-semibold mb-2 text-cyan-300">
                  Vision
                </h3>
                <p className="text-gray-300 text-base">
                  To be a leading force in robotics innovation, inspiring the
                  next generation of engineers and scientists to solve
                  real-world problems through technology.
                </p>
              </div>
              <div className="w-full sm:w-80 bg-gray-900 rounded-2xl p-4 hover:scale-105 transition-all duration-300 shadow-2xl border border-gray-700 group hover:shadow-blue-500/50">
                <FaBullseye className="text-3xl text-purple-400 mb-3 mx-auto group-hover:animate-bounce" />
                <h3 className="text-2xl font-semibold mb-2 text-purple-300">
                  Mission
                </h3>
                <p className="text-gray-300 text-base">
                  Empower students to explore, learn, and excel in robotics
                  through hands-on projects, competitions, and collaborative
                  research.
                </p>
              </div>
              <div className="w-full sm:w-80 bg-gray-900 rounded-2xl p-4 hover:scale-105 transition-all duration-300 shadow-2xl border border-gray-700 group hover:shadow-blue-500/50">
                <GiArcheryTarget className="text-3xl text-green-400 mb-3 mx-auto group-hover:animate-bounce" />
                <h3 className="text-2xl font-semibold mb-2 text-green-300">
                  Objectives
                </h3>
                <ul className="text-gray-300 text-base text-left list-disc list-inside space-y-1">
                  <li>Foster innovation in robotics</li>
                  <li>Provide cutting-edge training</li>
                  <li>Promote interdisciplinary collaboration</li>
                  <li>Compete at the highest levels</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Club Activities and Focus Areas */}
        <section className="py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <FaCogs className="text-pink-400" /> Club Activities & Focus Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-full sm:w-72 bg-gray-900 rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-2xl border border-gray-700 group hover:shadow-cyan-500/50">
                <FaTrophy className="text-4xl text-yellow-400 mb-3 mx-auto group-hover:animate-spin" />
                <h3 className="text-xl text-cyan-300 font-semibold mb-2">
                  Competitions
                </h3>
                <p className="text-gray-400 text-base">
                  Participate in thrilling robotics challenges, from local
                  hackathons to international tournaments, showcasing our skills
                  and creativity.
                </p>
              </div>
              <div className="w-full sm:w-72 bg-gray-900 rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-2xl border border-gray-700 group hover:shadow-cyan-500/50">
                <FaTools className="text-4xl text-blue-400 mb-3 mx-auto group-hover:animate-spin" />
                <h3 className="text-xl text-purple-300 font-semibold mb-2">
                  Workshops
                </h3>
                <p className="text-gray-400 text-base">
                  Hands-on sessions covering robotics fundamentals, advanced
                  programming, and emerging technologies like AI and IoT.
                </p>
              </div>
              <div className="w-full sm:w-72 bg-gray-900 rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-2xl border border-gray-700 group hover:shadow-cyan-500/50">
                <FaFlask className="text-4xl text-green-400 mb-3 mx-auto group-hover:animate-spin" />
                <h3 className="text-xl text-pink-300 font-semibold mb-2">
                  Research
                </h3>
                <p className="text-gray-400 text-base">
                  Conduct cutting-edge research in areas like autonomous
                  systems, human-robot interaction, and sustainable robotics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure and Lab Facilities */}
        <section className="py-6 px-4 md:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <FaMicrochip className="text-teal-400" /> Infrastructure & Lab
              Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  alt: "Robotics Lab",
                  title: "Advanced Robotics Lab",
                  desc: "Equipped with state-of-the-art robotic arms, sensors, and prototyping tools for hands-on experimentation.",
                  icon: <FaCogs className="text-cyan-400" />,
                },
                {
                  img: "https://as2.ftcdn.net/v2/jpg/11/45/48/69/1000_F_1145486972_XOgIbcMBihaFUbFJvwwnBduC5XM1VRC6.jpg",
                  alt: "3D Printing Facility",
                  title: "3D Printing & Prototyping",
                  desc: "High-precision 3D printers and CNC machines for rapid prototyping and custom part fabrication.",
                  icon: <FaTools className="text-purple-400" />,
                },
                {
                  img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  alt: "AI Research Center",
                  title: "AI & Simulation Lab",
                  desc: "Powerful computing resources for AI development, virtual reality simulations, and algorithm testing.",
                  icon: <FaBrain className="text-green-400" />,
                },
              ].map((facility, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl border border-gray-700 group hover:shadow-blue-500/50"
                >
                  <img
                    src={facility.img}
                    alt={facility.alt}
                    className="w-full h-36 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      {facility.icon}
                      <h3 className="text-xl text-cyan-300 font-semibold ml-2">
                        {facility.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-base">{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Club Timeline/Milestones */}
        <section className="py-6 px-4 md:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <FaCalendarAlt className="text-cyan-400" /> Club Timeline &
              Milestones
            </h2>
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cyan-400 shadow-lg hidden md:block"></div>

              {[
                {
                  year: "2015",
                  event: "Club Founded",
                  desc: "Established by visionary students at NIT Patna.",
                  icon: <FaRocket className="text-cyan-400" />,
                },
                {
                  year: "2017",
                  event: "First Competition Win",
                  desc: "Secured 1st place in regional robotics challenge.",
                  icon: <FaTrophy className="text-yellow-400" />,
                },
                {
                  year: "2019",
                  event: "Lab Expansion",
                  desc: "Upgraded facilities with advanced robotics equipment.",
                  icon: <FaTools className="text-blue-400" />,
                },
                {
                  year: "2021",
                  event: "International Recognition",
                  desc: "Team represented at global robotics summit.",
                  icon: <FaGlobe className="text-green-400" />,
                },
                {
                  year: "2023",
                  event: "Research Breakthrough",
                  desc: "Published groundbreaking paper on AI-driven robotics.",
                  icon: <FaBrain className="text-purple-400" />,
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-6 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0
                        ? "pr-4 md:pr-8 text-right"
                        : "pl-4 md:pl-8 text-left"
                    }`}
                  >
                    <div className="bg-gray-900 rounded-lg p-8 shadow-xl border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/50">
                      <div className="flex items-center mb-2">
                        {milestone.icon}
                        <div className="ml-3">
                          <h3 className="text-xl font-bold text-white">
                            <span className="text-cyan-400">
                              {milestone.year}
                            </span>
                            : {milestone.event}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="w-5 h-5 bg-cyan-400 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-lg animate-pulse hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
