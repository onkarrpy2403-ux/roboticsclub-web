import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowUp,
  FaCalendarAlt,
  FaImages,
  FaInfoCircle,
} from "react-icons/fa";

// here we call api and get data from backend in future
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

const PastEventDetails = () => {
  const { eventid } = useParams(); // Get the event ID from the URL params
  const event = pastEventsData.find((e) => e.id === parseInt(eventid)); // Find the event by ID
  const navigate = useNavigate();

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-8 text-cyan-400">
            Sorry, Event Not Found!
          </h1>
          <button
            onClick={() => navigate("../roboticsclub-web/events")}
            className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all duration-300 border border-red-600 hover:shadow-red-500/50"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 pt-16 bg-black text-white relative">
      {/* Back Button */}
      <div className="text-center pt-12">
        <button
          onClick={() => navigate("../roboticsclub-web/events")}
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all duration-300 border border-gray-600 hover:shadow-cyan-500/50"
        >
          Back to Events
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-8xl mx-auto text-center">
          <div className="relative">
            {event.photos.length > 0 && (
              <img
                src={event.photos[0]}
                alt={event.name}
                className="w-full max-w-6xl mx-auto h-80 md:h-100 lg:h-110 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-600"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-left">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                {event.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                <strong>Date: </strong>
                {event.date} | <strong>Category: </strong>
                {event.category}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="p-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-600 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-103">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
              <FaInfoCircle className="text-cyan-400" /> Event Overview
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg">
              {event.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-300 flex items-center gap-2">
                  <FaCalendarAlt className="text-cyan-400" /> Event Details
                </h3>
                <p className="text-gray-200 mb-2">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-200 mb-2">
                  <strong>Category:</strong> {event.category}
                </p>
                <p className="text-gray-400 text-sm">
                  This event was a great success, bringing together enthusiasts
                  and experts in the field of robotics.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-300 flex items-center gap-2">
                  <FaImages className="text-cyan-400" /> Photo Gallery
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {event.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Event Photo ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-blue-500/50 border border-gray-600"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastEventDetails;
