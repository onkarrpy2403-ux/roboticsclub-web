import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaQuoteLeft,
  FaTrophy,
  FaBriefcase,
  FaUserTie,
  FaChalkboardTeacher,
  FaUsers,
  FaStar,
  FaMicrochip,
  FaCode,
  FaRobot,
  FaPalette,
} from "react-icons/fa";

export default function Team() {
  useEffect(() => {
    document.title = "Our Teams | Robotics Club | NITP";
  }, []);

  // here we call api and get data from backend in future
  const poi = {
    name: "Dr. Gagan Deep Meena",
    designation: "Assistant Professor",
    department: "Electrical Engineering",
    photo: "../roboticsclub-web/gagandeepmeena.jpg",
    quote:
      "Robotics is not just technology, it's the future of innovation. Let's build it together.",
  };

  const facultyAdvisor = {
    name: "Prof. Bharat Gupta",
    designation: "Professor",
    department: "Electronics and Communication Engineering",
    photo: "https://roboticsnitp.co.in/bharat.png",
    quote:
      "Robotics is not just technology, it's the future of innovation. Let's build it together.",
  };

  const coreTeam = [
    {
      name: "Darshan Jain",
      role: "President",
      photo:
        "https://cdn.sanity.io/images/58siqeyu/production/8a1596e659aab4b3c99ce55739b844d0ee72b3fd-1080x1250.jpg",
      linkedin: "",
      github: "",
      bio: "Passionate about AI and robotics. Leading the club towards innovative projects.",
    },
    {
      name: "Deepu Kumar Gupta",
      role: "Captain",
      photo:
        "https://cdn.sanity.io/images/58siqeyu/production/1939295594d4c8d1ee90fa235ab7e09556366ed6-1080x1360.jpg",
      linkedin: "https://www.linkedin.com/in/deepu-kumar-gupta-445413225/",
      github: "",
      bio: "Expert in embedded systems. Coordinates technical workshops and competitions.",
    },
    {
      name: "Kapish Varshney",
      role: "Vice Captain",
      photo:
        "https://cdn.sanity.io/images/58siqeyu/production/e30cd2e5940fcbca81aadbb1f018dce6dcf3dbbd-618x669.jpg",
      linkedin: "https://www.linkedin.com/in/kapish-varshney/",
      github: "",
      bio: "Specializes in computer vision. Manages project timelines and team collaboration.",
    },
    {
      name: "Niharika Rathod",
      role: "Secretary",
      photo:
        "https://cdn.sanity.io/images/58siqeyu/production/ad45453e9bac4ec5e9068cecb7b7eaea70a6e0d1-810x1440.jpg",
      linkedin: "",
      github: "",
      bio: "Handles club finances and sponsors. Ensures smooth operations.",
    },
    {
      name: "Amit Kumar Singh",
      role: "Treasurer",
      photo:
        "https://cdn.sanity.io/images/58siqeyu/production/9ec35a417223388d0ece255232c19258498bb238-2250x4000.jpg?rect=0,0,2250,3000",
      linkedin: "https://www.linkedin.com/in/amit-kumar-singh-67231323a/",
      github: "",
      bio: "Passionate about AI and robotics. Leading the club towards innovative projects.",
    },
    {
      name: "Veemlesh Meena",
      role: "Joint Secretary",
      photo:
        "https://cdn.sanity.io/images/58siqeyu/production/318b40af975f4dac89b48096a33649cd8fcaf3b1-1280x1280.jpg",
      linkedin: "https://www.linkedin.com/in/vimlesh-meena-4a9965298",
      github: "",
      bio: "Specializes in computer vision. Manages project timelines and team collaboration.",
    },
  ];

  const teamMembers = {
    Hardware: [
      { name: "Rohit Sharma", role: "Hardware Lead" },
      { name: "Ankit Gupta", role: "Circuit Designer" },
      { name: "Saurabh Patel", role: "Mechanical Engineer" },
    ],
    Software: [
      { name: "Neha Jain", role: "Software Lead" },
      { name: "Pooja Singh", role: "Backend Developer" },
      { name: "Kunal Verma", role: "Frontend Developer" },
    ],
    AI: [
      { name: "Aditya Kumar", role: "AI Specialist" },
      { name: "Shivam Tiwari", role: "ML Engineer" },
    ],
    Design: [
      { name: "Riya Sharma", role: "UI/UX Designer" },
      { name: "Simran Kaur", role: "Graphic Designer" },
    ],
  };

  const alumni = [
    {
      name: "Dr. Priya Sharma",
      achievement: "Research Scientist at ISRO",
      icon: <FaBriefcase className="text-cyan-400" />,
    },
    {
      name: "Rahul Mehta",
      achievement: "Senior Engineer at DRDO",
      icon: <FaBriefcase className="text-green-400" />,
    },
    {
      name: "Anjali Gupta",
      achievement: "Product Manager at Google",
      icon: <FaTrophy className="text-purple-400" />,
    },
    {
      name: "Vikram Singh",
      achievement: "Founder, RoboTech Startups",
      icon: <FaTrophy className="text-orange-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-16 pb-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <section className="p-4 pt-12 text-center mb-6">
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Meet the passionate individuals driving innovation in robotics.
          </p>
        </section>

        {/* Professor Of Incharge */}
        <section className="py-4 px-4 mb-4">
          <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl p-5 shadow-xl border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <FaUserTie className="text-cyan-400" /> Professor of Incharge
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <img
                src={poi.photo}
                alt={poi.name}
                className="w-36 h-36 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-cyan-300">
                  {poi.name}
                </h3>
                <p className="text-base text-gray-400 mb-1">
                  {poi.designation}
                </p>
                <p className="text-base text-gray-400 mb-4">{poi.department}</p>
                <div className="relative">
                  <FaQuoteLeft className="text-3xl text-gray-500 absolute -top-1 -left-1" />
                  <blockquote className="text-lg italic text-gray-300 pl-6">
                    "{poi.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Advisor */}
        <section className="py-4 px-4 mb-4">
          <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <FaChalkboardTeacher className="text-purple-400" /> Faculty
              Advisor
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <img
                src={facultyAdvisor.photo}
                alt={facultyAdvisor.name}
                className="w-36 h-36 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-purple-300">
                  {facultyAdvisor.name}
                </h3>
                <p className="text-base text-gray-400 mb-1">
                  {facultyAdvisor.designation}
                </p>
                <p className="text-base text-gray-400 mb-4">
                  {facultyAdvisor.department}
                </p>
                <div className="relative">
                  <FaQuoteLeft className="text-3xl text-gray-500 absolute -top-1 -left-1" />
                  <blockquote className="text-lg italic text-gray-300 pl-6">
                    "{facultyAdvisor.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-4 px-4 mb-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <FaUsers className="text-green-400" /> Core Team
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className="w-80 md:w-96 bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl border border-gray-700 group hover:shadow-blue-500/50"
                >
                  <div className="p-6 text-center">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-lg font-semibold mb-1 text-cyan-300">
                      {member.name}
                    </h3>
                    <p className="text-green-400 font-semibold mb-3 text-sm">
                      {member.role}
                    </p>
                    <div className="flex justify-center space-x-3 mb-3">
                      {member.linkedin && (
                        <Link
                          to={member.linkedin}
                          className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-110 duration-300"
                        >
                          <FaLinkedin size={20} />
                        </Link>
                      )}
                      {member.github && (
                        <Link
                          to={member.github}
                          className="text-gray-400 hover:text-gray-300 transition-colors hover:scale-110 duration-300"
                        >
                          <FaGithub size={20} />
                        </Link>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 text-center">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-6 px-4 mb-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <FaRobot className="text-pink-400" /> Team Members
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(teamMembers).map(([specialization, members]) => (
                <div
                  key={specialization}
                  className="w-80 md:w-96 bg-gray-900 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl border border-gray-700 hover:shadow-cyan-500/50"
                >
                  <div className="flex items-center justify-center mb-3">
                    {specialization === "Hardware" && (
                      <FaMicrochip className="text-cyan-400 text-2xl mr-2 group-hover:animate-spin" />
                    )}
                    {specialization === "Software" && (
                      <FaCode className="text-purple-400 text-2xl mr-2 group-hover:animate-spin" />
                    )}
                    {specialization === "AI" && (
                      <FaRobot className="text-green-400 text-2xl mr-2 group-hover:animate-spin" />
                    )}
                    {specialization === "Design" && (
                      <FaPalette className="text-pink-400 text-2xl mr-2 group-hover:animate-spin" />
                    )}
                    <h3 className="text-lg font-semibold text-cyan-300">
                      {specialization}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {members.map((member, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center text-sm hover:bg-gray-800 p-2 rounded-lg transition-colors duration-300"
                      >
                        <span className="font-medium text-gray-300">
                          {member.name}
                        </span>
                        <span className="text-gray-500">{member.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni */}
        <section className="py-6 px-4">
          <div className="max-w-7xl mx-auto bg-gray-900 rounded-2xl p-5 shadow-xl border border-gray-700 hover:shadow-cyan-500/50 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <FaStar className="text-yellow-400" /> Notable Alumni
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {alumni.map((alum, index) => (
                <div
                  key={index}
                  className="flex items-center p-6 bg-gray-800 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  <div className="text-2xl mr-3 group-hover:animate-bounce">
                    {alum.icon}
                  </div>
                  <div>
                    <h3 className="text-base text-white font-semibold">
                      {alum.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{alum.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
