import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// here we call api and get data from backend in future
const eventsData = [
  {
    id: 1,
    name: "Robotics Workshop: Introduction to Arduino",
    date: "2023-10-15",
    time: "10:00 AM - 4:00 PM",
    venue: "Engineering Lab, Room 101",
    description:
      "Learn the basics of Arduino programming and build your first robot.",
    category: "Workshops",
    registrationLink: "arduino-workshop",
  },
  {
    id: 2,
    name: "Robotics Competition: RoboRace 2023",
    date: "2023-10-22",
    time: "9:00 AM - 6:00 PM",
    venue: "Main Auditorium",
    description: "Compete in a thrilling robot racing event with prizes.",
    category: "Competitions",
    registrationLink: "roborace",
  },
  {
    id: 3,
    name: "Guest Lecture: AI in Robotics",
    date: "2023-10-30",
    time: "2:00 PM - 4:00 PM",
    venue: "Lecture Hall B",
    description: "Dr. Jane Smith discusses the future of AI-driven robotics.",
    category: "Guest Lectures",
    registrationLink: "ai-lecture",
  },
  {
    id: 4,
    name: "Social Event: Robotics Networking Mixer",
    date: "2023-11-05",
    time: "6:00 PM - 9:00 PM",
    venue: "Club Lounge",
    description:
      "Network with fellow robotics enthusiasts over drinks and demos.",
    category: "Social Events",
    registrationLink: "networking-mixer",
  },
  {
    id: 5,
    name: "Workshop: Advanced Drone Building",
    date: "2023-11-12",
    time: "11:00 AM - 3:00 PM",
    venue: "Drone Lab",
    description: "Build and program advanced drones for aerial robotics.",
    category: "Workshops",
    registrationLink: "drone-workshop",
  },
];

const ongoingProjectsData = [
  {
    id: 1,
    name: "Autonomous Vehicle Project",
    description: "Developing self-driving robots for urban navigation.",
    progress: 65,
  },
  {
    id: 2,
    name: "Humanoid Robot Development",
    description: "Building a humanoid robot for interactive applications.",
    progress: 37,
  },
  {
    id: 3,
    name: "AI-Powered Robotic Arm",
    description: "Creating an intelligent robotic arm for manufacturing.",
    progress: 89,
  },
];

export default function EventRegistration() {
  const { eventid } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNumber: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const event = eventsData.find((d) => d.registrationLink === eventid);

  useEffect(() => {
    if (isRegistered) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            navigate("../roboticsclub-web/events");
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRegistered, navigate]);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-8 text-cyan-500">
            No Such Event Currently Exists.
          </h1>
          <button
            onClick={() => navigate("../roboticsclub-web/events")}
            className="bg-red-600 text-white px-6 py-2 rounded-xl shadow-lg hover:cursor-pointer hover:bg-red-700 transition duration-200"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we will typically send the registration data to a server
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-green-400">
                Registration Successful!
              </h2>
              <p className="text-gray-300 mb-4">
                You have successfully registered for:
              </p>
              <p className="text-lg font-semibold text-cyan-400 mb-4">
                {event.name}
              </p>
              <p className="text-sm text-gray-300">
                Redirecting to events page in {countdown} seconds...
              </p>
            </div>
            <button
              onClick={() => navigate("../roboticsclub-web/events")}
              className="cursor-pointer bg-cyan-600/95 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition duration-300 w-full"
            >
              Back to Events
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mt-4">
        <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Register for Event</h1>
          <div className="mb-6">
            <h2 className="text-2xl text-cyan-500 font-semibold mb-2">
              {event.name}
            </h2>
            <p className="text-gray-400 text-sm mb-1">
              {event.date} | {event.time}
            </p>
            <p className="text-gray-400 text-sm">{event.venue}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 ml-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 ml-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 ml-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 ml-2">
                Roll Number
              </label>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your roll number"
              />
            </div>
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => navigate("../roboticsclub-web/events")}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 hover:cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white p-2 md:px-6 rounded-lg hover:bg-green-700 hover:cursor-pointer transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
