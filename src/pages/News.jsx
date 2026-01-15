import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import

// here we call api and get data from backend in future
const newsData = [
  // Club News
  {
    id: 1,
    category: "Tech Innovations",
    title: "5G Technology",
    date: "20 Dec 2025",
    source: "Robotics",
    summary:
      "“The 5G World will be a collaborative ecosystem, and the role of what each of us will do in that remains to be thought through.” Borje Ekholm. The introduction of first 5G network was developed by 3GPP by South Korea Wireless Technologies have been growing actively all around the World. As you all know that today the mobile technologies 4G or LTE which has been rolled out in India, the next evolution of the technology called 5G is a game changer. It is much different from 4G because 4G was only for mobile but 5G is going to be for industrial development. 5G is going to be basically driving all future industries, the future driverless car, the robotics, the mass production in all the automated factories or even the drones that will fly all of that is going to be driven by the fact GSMA expects India to have 920 million mobile subscribers by 2025. 5G will open a door for new wireless architecture and smart services. According to the reports download speeds will be 10 to 20 times faster than 4G, this is going to be a significant step towards revolutionising the tech world. Bharti Airtel and Huawei were first to conduct a demo on India’s first 5G network. How 5G will benefit us ? Video buffering during a streaming session should virtually disappear as data transmission would happen at lightening speeds. Your 3 hour HD films can be downloaded in few seconds. We will enable smart homes that help us be more energy efficient save time on housekeeping and shopping and enjoy safer and more efficient public and private transportation. 5G is great news for the IOT markets. This is primarily due to the fact that 5G networks will go along the way towards improving the performance and reliability of these devices. It will enable enhanced traffic management by supporting a massive number of IOT connections .",
    link: "#",
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
  },
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate(); // Add this hook
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    document.title = "News | Robotics Club | NITP";
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription (replace with actual API call)
      console.log("Subscribed with email:", email);
      setSubscribed(true);
      setShowMessage(true);
      setEmail("");
    }
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  const categories = [
    "All",
    "Club News",
    "Competition News",
    "Tech Innovations",
    "Research Breakthroughs",
  ];

  const filteredNews =
    selectedCategory === "All"
      ? newsData
      : newsData.filter((n) => n.category === selectedCategory);

  const handleShare = (news) => {
    if (navigator.share) {
      navigator
        .share({
          title: news.title,
          text: news.summary.substring(0, 100) + "...", // Truncate summary for sharing
          url: news.link,
        })
        .catch(console.error);
    } else {
      // Fallback: Copy to clipboard
      const shareText = `${news.title}\n${news.summary.substring(0, 100)}...\n${
        news.link
      }`;
      navigator.clipboard
        .writeText(shareText)
        .then(() => {
          alert("News details copied to clipboard!");
        })
        .catch(() => {
          alert("Sharing not supported on this device.");
        });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="p-4 pt-12 text-center mb-6">
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Club updates, competitions, and latest trends in robotics.
          </p>
        </section>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 hover:cursor-pointer hover:scale-105 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className="w-2xs bg-gray-900 text-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50 border border-gray-800"
            >
              <div className="p-6 h-60">
                <span className="inline-block bg-cyan-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                  {news.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {news.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {news.date} | {news.source}
                </p>
                <p className="text-gray-300 mb-4 line-clamp-3 min-h-15">
                  {news.summary}
                </p>
              </div>
              <div className="flex justify-between items-center p-6 border-t border-gray-800">
                <button
                  className="text-cyan-400 hover:text-cyan-300 font-semibold hover:cursor-pointer transition-colors"
                  onClick={() =>
                    navigate(`../roboticsclub-web/news/${news.id}`)
                  } // Navigate to detail page
                >
                  Read More →
                </button>
                <button
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 rounded-md shadow-lg transition duration-200 hover:cursor-pointer flex items-center justify-center hover:scale-105"
                  onClick={() => handleShare(news)}
                >
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <section className="p-4 pt-10">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:shadow-blue-500/50 transition-all duration-300 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest robotics news and club
              updates.
            </p>
            {subscribed && showMessage ? (
              <div className="bg-green-600 text-white p-4 font-semibold rounded-lg mb-4 shadow-md relative">
                Thank you for subscribing! Check your email for confirmation.
                <button
                  onClick={closeMessage}
                  className="absolute top-2 right-2 text-white hover:text-gray-300 hover:cursor-pointer text-3xl font-bold"
                >
                  ×
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors hover:scale-105 duration-300"
                />
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 font-semibold text-white px-4 py-2 rounded-lg transition duration-200 hover:cursor-pointer shadow-md hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
