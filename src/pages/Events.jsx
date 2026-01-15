import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

//here we call api and get data from backend.
const upcomingEventsData = [
  {
    id: 1,
    name: "Robotics Workshop: Introduction to Arduino",
    date: "2023-10-15",
    time: "10:00 AM - 4:00 PM",
    venue: "Engineering Lab, Room 101",
    description:
      "Learn the basics of Arduino programming and build your first robot.",
    category: "Workshops",
    registrationLink: "/register/arduino-workshop",
  },
  {
    id: 2,
    name: "Robotics Competition: RoboRace 2023",
    date: "2023-10-22",
    time: "9:00 AM - 6:00 PM",
    venue: "Main Auditorium",
    description: "Compete in a thrilling robot racing event with prizes.",
    category: "Competitions",
    registrationLink: "/register/roborace",
  },
  {
    id: 3,
    name: "Guest Lecture: AI in Robotics",
    date: "2023-10-30",
    time: "2:00 PM - 4:00 PM",
    venue: "Lecture Hall B",
    description: "Dr. Jane Smith discusses the future of AI-driven robotics.",
    category: "Guest Lectures",
    registrationLink: "/register/ai-lecture",
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
    registrationLink: "/register/networking-mixer",
  },
  {
    id: 5,
    name: "Workshop: Advanced Drone Building",
    date: "2023-11-12",
    time: "11:00 AM - 3:00 PM",
    venue: "Drone Lab",
    description: "Build and program advanced drones for aerial robotics.",
    category: "Workshops",
    registrationLink: "/register/drone-workshop",
  },
];

const pastEventsData = [
  {
    id: 1,
    name: "Robotics Workshop: Basics of Sensors",
    date: "2023-09-10",
    description: "Hands-on session on sensor integration in robots.",
    category: "Workshops",
    photos: [
      "https://m.media-amazon.com/images/I/91Kie2Sjt0L._SX445_.jpg",
      "https://mahatmainternational.ac.in/wp-content/uploads/2025/07/Robotics-Workshop-for-Students-Teachers-1.png",
    ],
  },
  {
    id: 2,
    name: "Robotics Competition: Bot Battle",
    date: "2023-08-20",
    description: "Exciting robot battles with custom-built bots.",
    category: "Competitions",
    photos: [
      "https://www.sjsreview.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-16-at-10.44.50-AM-e1523914554247.png",
    ],
  },
  {
    id: 3,
    name: "Guest Lecture: Robotics Ethics",
    date: "2023-07-15",
    description: "Discussion on ethical implications of robotics.",
    category: "Guest Lectures",
    photos: [
      "https://www.jct.ac.in/engineering/wp-content/uploads/2021/01/img_20200211-1-scaled.jpg",
      "https://cdn.shopify.com/s/files/1/0014/4313/5560/files/unnamed_2_baddf1f7-c7ff-477e-bae9-7dee7fbc7c9b.png?v=1739900729",
    ],
  },
];

const categories = [
  "All",
  "Workshops",
  "Competitions",
  "Guest Lectures",
  "Social Events",
];

const Events = () => {
  useEffect(() => {
    document.title = "Events | Robotics Club | NITP";
  }, []);

  const [upcomingEvents, setUpcomingEvents] = useState(upcomingEventsData);
  const [sortBy, setSortBy] = useState("date");
  const [filterCategory, setFilterCategory] = useState("All");
  const navigate = useNavigate();

  // Sort and filter upcoming events
  useEffect(() => {
    let filtered = upcomingEventsData.filter(
      (event) => filterCategory === "All" || event.category === filterCategory
    );
    if (sortBy === "date") {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    setUpcomingEvents(filtered);
  }, [sortBy, filterCategory]);

  return (
    <div className="min-h-screen bg-black text-white relative pt-16 pb-8">
      {/* Header */}
      <section className="p-4 pt-12 text-center">
        <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
          Creating the next generation of innovators and change makers.
        </p>
      </section>

      {/* Upcoming Events Section */}
      <section className=" py-4">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white pb-8">
            Upcoming Events
          </h2>

          {/* Sorting and Filtering */}
          <div className="flex flex-wrap justify-center items-center mb-8 space-x-4">
            <div className="flex items-center space-x-2">
              <label className="text-gray-200">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 mb-2 md:mb-0 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 hover:scale-105 transition-all duration-300"
              >
                <option value="date" className="bg-gray-800 text-white">
                  Date
                </option>
                <option value="name" className="bg-gray-800 text-white">
                  Name
                </option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-gray-200">Filter by Category:</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 hover:scale-105 transition-all duration-300"
              >
                {categories.map((cat) => (
                  <option
                    key={cat}
                    value={cat}
                    className="bg-gray-800 text-white"
                  >
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="w-xs bg-gray-900 text-white hover:scale-105 rounded-lg p-6 shadow-2xl transition-all duration-300 border border-gray-700 hover:shadow-cyan-500/50"
              >
                <h3 className="text-xl font-bold mb-2 min-h-15 text-cyan-400">
                  {event.name}
                </h3>
                <div className="min-h-65 hover:scale-105 rounded-lg transition duration-200">
                  <img
                    src="https://cdn.sanity.io/images/58siqeyu/production/1c73972370e08724bbb7e15d22f7a1ca31e1ef2b-640x640.jpg"
                    alt=""
                    className="rounded-lg hover:cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="min-h-52">
                  <p className="text-gray-200 mb-1">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="text-gray-200 mb-1">
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p className="text-gray-200 mb-1">
                    <strong>Venue:</strong> {event.venue}
                  </p>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <p className="text-sm text-cyan-400 font-semibold mb-4">
                    Category: {event.category}
                  </p>
                </div>

                <center>
                  <Link
                    to={`/roboticsclub-web${event.registrationLink}`}
                    className="inline-block text-center bg-cyan-500 text-white px-4 py-2 shadow-lg rounded-lg hover:bg-cyan-600 transition duration-200 hover:scale-105"
                  >
                    Register Interest
                  </Link>
                </center>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-8 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white pb-8">
            Past Events
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {pastEventsData.map((event) => (
              <div
                key={event.id}
                onClick={() =>
                  navigate(`../roboticsclub-web/pastevents/${event.id}`)
                } // Fixed: Wrap in arrow function
                className="w-sm bg-gray-900 hover:scale-105 text-white rounded-lg p-6 shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700 hover:shadow-blue-500/50" // Added cursor-pointer for better UX
              >
                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                  {event.name}
                </h3>
                <p className="text-gray-200 mb-1">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <p className="text-sm text-cyan-400 mb-4">
                  Category: {event.category}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {event.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Event Photo ${index + 1}`}
                      className="w-full h-32 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
