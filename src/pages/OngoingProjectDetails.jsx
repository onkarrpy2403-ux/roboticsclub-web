import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowUp, FaUsers, FaCalendarAlt, FaImage } from "react-icons/fa";

//here we call API and get data from backend in future.
//we uses random inages here.
const ongoingProjectsData = [
  {
    id: 1,
    name: "Autonomous Vehicle Project",
    description: "Developing self-driving robots for urban navigation.",
    progress: 65,
    team: ["Alice Johnson", "Bob Smith", "Charlie Brown"],
    milestones: [
      "Initial design completed",
      "Prototype testing underway",
      "AI integration in progress",
    ],
    startDate: "2023-01-15",
    estimatedCompletion: "2024-06-30",
    images: [
      "https://images.squarespace-cdn.com/content/v1/61e9374e0434354049a258f9/a967d45e-3e74-4833-805f-f6ceacf0f101/Line+following+robot+.jpeg?format=2500w",
      "https://images.squarespace-cdn.com/content/v1/61e9374e0434354049a258f9/a967d45e-3e74-4833-805f-f6ceacf0f101/Line+following+robot+.jpeg?format=2500w",
    ],
  },
  {
    id: 2,
    name: "Humanoid Robot Development",
    description: "Building a humanoid robot for interactive applications.",
    progress: 37,
    team: ["Diana Prince", "Eve Adams"],
    milestones: ["Skeleton assembly done", "Motor integration started"],
    startDate: "2023-03-10",
    estimatedCompletion: "2024-12-15",
    images: [
      "https://images.squarespace-cdn.com/content/v1/61e9374e0434354049a258f9/a967d45e-3e74-4833-805f-f6ceacf0f101/Line+following+robot+.jpeg?format=2500w",
    ],
  },
  {
    id: 3,
    name: "AI-Powered Robotic Arm",
    description: "Creating an intelligent robotic arm for manufacturing.",
    progress: 89,
    team: ["Frank Miller", "Grace Lee", "Henry Wilson"],
    milestones: [
      "AI model trained",
      "Hardware assembly complete",
      "Final testing phase",
    ],
    startDate: "2022-11-01",
    estimatedCompletion: "2024-03-20",
    images: [
      "https://images.squarespace-cdn.com/content/v1/61e9374e0434354049a258f9/a967d45e-3e74-4833-805f-f6ceacf0f101/Line+following+robot+.jpeg?format=2500w",
      "https://images.squarespace-cdn.com/content/v1/61e9374e0434354049a258f9/a967d45e-3e74-4833-805f-f6ceacf0f101/Line+following+robot+.jpeg?format=2500w",
    ],
  },
];

const OngoingProjectDetails = () => {
  const { pid } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    const foundProject = ongoingProjectsData.find((p) => p.id == pid);
    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.name} | Robotics Club | NITP`;
      setError(false);
    } else {
      setError(true);
    }
  }, [pid]);

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-8 text-cyan-400">
            Sorry, Project Not Found!
          </h1>
          <button
            onClick={() => navigate("../roboticsclub-web/projects")}
            className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg hover:scale-105 cursor-pointer transition-all duration-300 shadow-2xl hover:shadow-red-500/50 border border-red-600"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Back Button */}
      <div className="text-center mb-8">
        <button
          onClick={() => navigate("/roboticsclub-web/projects")}
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all duration-300 border border-gray-600 hover:shadow-cyan-500/50"
        >
          Back to Projects
        </button>
      </div>

      {/* Header */}
      <section className="p-4 text-center">
        <h1 className="text-3xl pb-2 md:text-5xl font-bold mb-4 text-cyan-400">
          {project.name}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {project.description}
        </p>
      </section>

      {/* Project Details Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl transition-all duration-300 border border-gray-600 hover:shadow-cyan-500/50 hover:scale-105">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project Info */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                  <FaCalendarAlt className="text-cyan-400" /> Project Details
                </h2>
                <p className="text-gray-300 mb-2">
                  <strong>Start Date:</strong> {project.startDate}
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Estimated Completion:</strong>{" "}
                  {project.estimatedCompletion}
                </p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    Progress
                  </h3>
                  <div className="w-full bg-gray-700 rounded-full h-4 border border-gray-600">
                    <div
                      className="bg-cyan-500 h-4 rounded-full transition-all duration-500 shadow-lg"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {project.progress}% Completed
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                  <FaUsers className="text-cyan-400" /> Team Members
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  {project.team.map((member, index) => (
                    <li
                      key={index}
                      className="hover:text-cyan-300 transition-colors duration-300"
                    >
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Milestones and Images */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                  Milestones
                </h2>
                <ul className="text-gray-300 space-y-3 mb-6">
                  {project.milestones.map((milestone, index) => (
                    <li
                      key={index}
                      className="flex items-center hover:scale-105 transition-all duration-300 hover:text-cyan-300"
                    >
                      <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 shadow-lg"></span>
                      {milestone}
                    </li>
                  ))}
                </ul>
                {project.images && project.images.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                      <FaImage className="text-cyan-400" /> Project Images
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Project Image ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-blue-500/50 border border-gray-600"
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OngoingProjectDetails;
