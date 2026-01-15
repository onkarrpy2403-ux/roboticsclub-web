import { useState, useEffect } from "react";
import { FaFacebook, FaPhone, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Robotics Club | NITP";
  }, []);

  const initialValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
    purpose: "General Inquiry",
  };
  const [formData, setFormData] = useState(initialValue);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(initialValue);
    setTimeout(() => setSubmitted(false), 3000);
  };

  //here we call apis and get data from backend in future.
  const faqs = [
    {
      question: "How can I join the Robotics Club?",
      answer:
        "Attend our weekly meetings or contact us via the form. Membership is open to all students interested in robotics.",
    },
    {
      question: "What skills do I need to participate?",
      answer:
        "No prior experience required! We welcome beginners and provide training in hardware, software, and AI.",
    },
    {
      question: "Are there any membership fees?",
      answer:
        "No, membership is free. We only ask for your enthusiasm and commitment to learning.",
    },
    {
      question: "What projects do you work on?",
      answer:
        "We work on autonomous robots, AI applications, and participate in national and international competitions.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="p-4 pt-12 text-center mb-6">
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Get in touch with the Robotics Club. We'd love to hear from you!
          </p>
        </section>

        {/* Contact Details */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:shadow-cyan-500/50 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center pb-4">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center bg-gray-800 p-4 rounded-lg hover:scale-103 transition-all duration-300 shadow-md hover:shadow-blue-500/50">
                <MdEmail className="text-4xl text-green-400 mr-4" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">roboticsclub@nitp.ac.in</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-800 p-4 rounded-lg hover:scale-103 transition-all duration-300 shadow-md hover:shadow-blue-500/50">
                <FaPhone className="text-4xl text-blue-400 mr-4" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-300">0612-2371715</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-800 p-4 rounded-lg hover:scale-103 transition-all duration-300 shadow-md hover:shadow-blue-500/50">
                <MdLocationOn className="text-4xl text-red-400 mr-4" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-300">
                    Incubation Center 3rd Floor <br /> National Institute of
                    Technology Patna <br /> Ashok Rajpath, Patna -800005
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-800 p-4 rounded-lg hover:scale-103 transition-all duration-300 shadow-md hover:shadow-blue-500/50">
                <IoMdTime className="text-4xl text-purple-400 mr-4" />
                <div>
                  <p className="font-semibold text-white">Meeting Times</p>
                  <p className="text-gray-300">Every Saturday, 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:shadow-blue-500/50 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center pb-4">
              Our Location
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                alt="Club Location Map"
                className="w-full h-64 rounded-lg border-4 border-gray-700"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6862.58690711107!2d85.16787810371124!3d25.621094841121028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dcc9444eb3%3A0xec52b6c29c14db88!2s00%2C%20Patna%20University%20Campus%2C%20Patna%2C%20Bihar%20800005!5e0!3m2!1sen!2sin!4v1767721403168!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:shadow-cyan-500/50 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center pb-4">
              Get In Touch
            </h2>
            {submitted ? (
              <div className="bg-green-600 text-white p-4 font-semibold rounded-lg mb-4 shadow-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors hover:scale-102 duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors hover:scale-102 duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="purpose"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Purpose
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors hover:scale-102 duration-300"
                  >
                    <option className="bg-gray-800 text-white">
                      General Inquiry
                    </option>
                    <option className="bg-gray-800 text-white">
                      Join Club
                    </option>
                    <option className="bg-gray-800 text-white">
                      Event Question
                    </option>
                    <option className="bg-gray-800 text-white">
                      Collaboration
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors hover:scale-102 duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your Queries in your words."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors hover:scale-102 duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 cursor-pointer text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-200 mx-auto block shadow-md hover:scale-103 duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:shadow-blue-500/50 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center pb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-400 hover:scale-103 transition-all duration-300 shadow-md hover:shadow-blue-500/50"
                >
                  <h3 className="text-xl text-white font-semibold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="pb-8">
          <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:shadow-cyan-500/50 transition-all duration-300 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-4">
              Follow Us
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://facebook.com/robonitp"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 hover:scale-110 duration-300"
              >
                <FaFacebook className="text-4xl" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@roboticsclubnitp8637"
                target="_blank"
                className="text-red-400 hover:text-red-300 transition-colors duration-200 hover:scale-110 duration-300"
              >
                <FaYoutube className="text-4xl" />
                <span className="sr-only">Youtube</span>
              </a>
              <a
                href="https://www.instagram.com/robotics_club_nitp/"
                target="_blank"
                className="text-pink-400 hover:text-pink-300 transition-colors duration-200 hover:scale-110 duration-300"
              >
                <IoLogoInstagram className="text-4xl" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/robotics-club-nit-patna/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400 transition-colors duration-200 hover:scale-110 duration-300"
              >
                <IoLogoLinkedin className="text-4xl" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
