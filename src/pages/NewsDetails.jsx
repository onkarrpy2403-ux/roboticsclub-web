import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

//here we can call API and get data from backend in future.
const newsData = [
  {
    id: 1,
    category: "Tech Innovations",
    title: "5G Technology",
    date: "20 Dec 2025",
    source: "Robotics",
    summary:
      "“The 5G World will be a collaborative ecosystem, and the role of what each of us will do in that remains to be thought through.” Borje Ekholm. The introduction of first 5G network was developed by 3GPP by South Korea Wireless Technologies have been growing actively all around the World. As you all know that today the mobile technologies 4G or LTE which has been rolled out in India, the next evolution of the technology called 5G is a game changer. It is much different from 4G because 4G was only for mobile but 5G is going to be for industrial development. 5G is going to be basically driving all future industries, the future driverless car, the robotics, the mass production in all the automated factories or even the drones that will fly all of that is going to be driven by the fact GSMA expects India to have 920 million mobile subscribers by 2025. 5G will open a door for new wireless architecture and smart services. According to the reports download speeds will be 10 to 20 times faster than 4G, this is going to be a significant step towards revolutionising the tech world. Bharti Airtel and Huawei were first to conduct a demo on India’s first 5G network. How 5G will benefit us ? Video buffering during a streaming session should virtually disappear as data transmission would happen at lightening speeds. Your 3 hour HD films can be downloaded in few seconds. We will enable smart homes that help us be more energy efficient save time on housekeeping and shopping and enjoy safer and more efficient public and private transportation. 5G is great news for the IOT markets. This is primarily due to the fact that 5G networks will go along the way towards improving the performance and reliability of these devices. It will enable enhanced traffic management by supporting a massive number of IOT connections .",
    link: "https://telecom.economictimes.indiatimes.com/tag/5g",
    image:
      "https://cdn.sanity.io/images/58siqeyu/production/0c7e076d3169e7320700592a9e084da7f16b0cb1-1126x550.jpg",
  },
  {
    id: 2,
    category: "Club News",
    title: "New Membership Drive Announced",
    date: "15 Dec 2025",
    source: "Robotics Club",
    summary:
      "The Robotics Club is excited to announce a new membership drive for the upcoming semester. We welcome students from all disciplines who are passionate about robotics and technology. New members will have access to workshops, mentorship programs, and hands-on projects. Join us to be part of an innovative community that pushes the boundaries of robotics engineering and research.",
    link: "#",
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg",
  },
  // Competition News
  {
    id: 3,
    category: "Competition News",
    title: "Indian Team Qualifies for International Robotics Challenge",
    date: "12 Dec 2025",
    source: "The Hindu",
    summary:
      "An Indian university robotics team qualified for an international competition after showcasing excellence in autonomous navigation and obstacle handling. Their success highlights the growing robotics talent and innovation ecosystem in India. The team demonstrated advanced algorithms for real-time path planning and collaborative robot behaviors, earning recognition from global judges.",
    link: "https://www.thehindu.com",
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg",
  },
  {
    id: 4,
    category: "Competition News",
    title: "Robotics Club Wins Regional Engineering Fair",
    date: "5 Dec 2025",
    source: "University News",
    summary:
      "Our Robotics Club secured first place in the regional engineering fair with their innovative humanoid robot project. The competition featured teams from across the state, and our entry stood out for its sophisticated AI integration and precise mechanical design. This victory opens doors to national-level competitions and potential industry partnerships.",
    link: "#",
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg",
  },
  // Tech Innovations
  {
    id: 5,
    category: "Tech Innovations",
    title: "AI-Powered Robots Transform Warehouse Automation",
    date: "18 Dec 2025",
    source: "IEEE Spectrum",
    summary:
      "AI-powered robots are revolutionizing warehouse automation by enabling real-time object recognition, route optimization, and safe human-robot collaboration. These intelligent systems significantly reduce operational costs while increasing speed, efficiency, and workplace safety across industries. Recent advancements in computer vision and machine learning have made these robots more adaptable to dynamic environments.",
    link: "https://spectrum.ieee.org",
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg",
  },
  {
    id: 6,
    category: "Tech Innovations",
    title: "Breakthrough in Soft Robotics Materials",
    date: "10 Dec 2025",
    source: "MIT Technology Review",
    summary:
      "Researchers have developed new soft robotic materials that can change shape and stiffness on demand, opening up possibilities for more flexible and safer robotic applications. These materials use advanced polymers that respond to electrical stimuli, allowing robots to navigate complex terrains and interact gently with humans. This innovation could revolutionize fields from medical devices to disaster response.",
    link: "https://www.technologyreview.com",
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg",
  },
  {
    id: 7,
    category: "Tech Innovations",
    title: "Quantum Computing Accelerates Robot Learning",
    date: "3 Dec 2025",
    source: "Nature",
    summary:
      "Quantum computing is being harnessed to dramatically speed up machine learning algorithms used in robotics. This breakthrough allows robots to learn complex tasks in minutes rather than days, potentially transforming autonomous systems. Early experiments show quantum-enhanced robots outperforming traditional AI in pattern recognition and decision-making tasks.",
    link: "https://www.nature.com",
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg",
  },
  // Research Breakthroughs
  {
    id: 8,
    category: "Research Breakthroughs",
    title: "Soft Robotics Breakthrough in Medical Field",
    date: "15 Dec 2025",
    source: "Nature Robotics",
    summary:
      "Researchers have introduced soft robotic systems capable of performing delicate medical procedures. These robots adapt to human tissue, minimizing risk and improving precision. The innovation opens new doors in minimally invasive surgery and advanced rehabilitation solutions. Clinical trials are underway to test these systems in real-world medical environments.",
    link: "https://www.nature.com",
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg",
  },
  {
    id: 9,
    category: "Research Breakthroughs",
    title: "Brain-Computer Interfaces for Robotic Control",
    date: "8 Dec 2025",
    source: "Science Magazine",
    summary:
      "A new study demonstrates direct brain-to-robot communication, allowing users to control complex robotic systems with thought alone. This breakthrough in neural interfaces could revolutionize prosthetics and human-robot interaction. The research combines advanced EEG technology with AI algorithms to interpret brain signals in real-time.",
    link: "https://www.sciencemag.org",
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg",
  },
  {
    id: 10,
    category: "Research Breakthroughs",
    title: "Self-Healing Robots Inspired by Biology",
    date: "1 Dec 2025",
    source: "PLOS ONE",
    summary:
      "Scientists have created robots with self-healing capabilities inspired by biological organisms. These robots can repair damage autonomously using embedded microcapsules that release healing agents when cracks form. This technology could extend the lifespan of robots in harsh environments and reduce maintenance costs significantly.",
    link: "https://journals.plos.org",
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg",
  },
];
export default function NewsDetail() {
  const { newsid } = useParams();
  const navigate = useNavigate();
  const news = newsData.find((n) => n.id === parseInt(newsid));

  if (!news) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-8 text-cyan-400">
            No Such News Found!
          </h1>
          <button
            onClick={() => navigate("/roboticsclub-web/news")}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-lg hover:cursor-pointer transition duration-200"
          >
            Back to News
          </button>
        </div>
      </div>
    );
  }

  const handleShare = async (news) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.summary.substring(0, 100) + "...",
          url: news.link,
        });
        console.log("Content was shared successfully!");
      } catch (error) {
        console.log("Sharing failed:", error.message);
      }
    } else {
      alert(
        "Web Share API is not supported in this browser. \nYou can manually copy the link."
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Back to News Button - Repositioned to top center */}
      <div className="text-center mb-8">
        <button
          onClick={() => navigate("/roboticsclub-web/news")}
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-lg hover:cursor-pointer transition duration-200"
        >
          Back to News
        </button>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Image */}
        <div className="relative mb-8">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg border border-gray-800"
          />
          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-end p-6">
            <div>
              <span className="inline-block bg-cyan-500 text-white text-xs px-3 py-1 rounded-full mb-2">
                {news.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {news.title}
              </h1>
              <p className="text-gray-300 text-sm">
                {news.date} | {news.source}
              </p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-800">
          <p className="text-gray-300 leading-relaxed mb-8 text-lg">
            {news.summary}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to={news.link}
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-200 hover:cursor-pointer"
            >
              More Details
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold shadow-lg transition duration-200 hover:cursor-pointer flex items-center justify-center"
              onClick={() => handleShare(news)}
            >
              Share Article
            </button>
          </div>
        </div>

        {/* Related News Teaser */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            More from {news.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsData
              .filter((n) => n.category === news.category && n.id !== news.id)
              .slice(0, 2)
              .map((related) => (
                <div
                  key={related.id}
                  className="bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-200 cursor-pointer"
                  onClick={() => navigate(`/roboticsclub-web/news/${related.id}`)}
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {related.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{related.date}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
