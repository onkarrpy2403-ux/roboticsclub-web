import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//here we call apis in future and get data from backend.
const projectsData = [
  {
    id: 1,
    title: "SELF BALANCING BOT",
    year: 2023,
    type: "Robot",
    image:
      "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
    description:
      "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge, this inverted pendulum cannot stay balanced on its own. It will simply fall over. Then how do we balance it? Consider balancing a broomstick on our index finger which is a classic example of balancing an inverted pendulum. We move our finger in the direction in which the stick is falling. Similar is the case with a self-balancing robot, only that the robot will fall either forward or backward. Just like how we balance a stick on our finger, we balance the robot by driving its wheels in the direction in which it is falling. What we are trying to do here is to keep the center of gravity of the robot exactly above the pivot point. To drive the motors we need some information on the state of the robot. We need to know the direction in which the robot is falling, how much the robot has tilted and the speed with which it is falling. All these information can be deduced from the readings obtained from MPU6050. We combine all these inputs and generate a signal which drives the motors and keeps the robot balanced.",
    technologies: [
      "Arduino",
      "MPU6050 IMU",
      "DC Motors",
      "L298N H-Bridge",
      "PID Controller",
      "Python",
    ],
    teamMembers: ["Rajesh Kumar", "Ashutosh Kumar", "Raja Kumar"],
  },
  {
    id: 2,
    title: "MARK 1.6",
    year: 2022,
    type: "Robotic Arm",
    image:
      "https://cdn.sanity.io/images/58siqeyu/production/a77f77b0fc454f1533352df261c9b5982f93be80-556x413.png",
    description:
      "Mark 1.6 is basically a fully wireless Bluetooth controlled robotic arm which is mounted on a 4WD chassis in this the arm is made using 3D printer and used NRF modules.",
    technologies: [
      "3D Printer",
      "4WD Chassis",
      "Robotic Arm",
      "NRF Modules",
      "Arduino",
      "Servos",
      "DC Motors",
      "Bluetooth Module",
    ],
    teamMembers: ["Rajeshwari", "Shekar Kumar"],
  },
  {
    id: 3,
    title: "LINE FOLLOWER BOT",
    year: 2023,
    type: "Mobile Machine",
    image:
      "https://cdn.sanity.io/images/58siqeyu/production/da6f5fa1e22bfee348b662e1b658016b549fcb76-547x378.png",
    description:
      "The line follower robot is a mobile machine that can detect and follow the line drawn on the floor. Generally, the path is predefined and can be either visible like a black line on a white surface with a high contrasted color or it can be invisible like a magnetic filed. Definitely, this kind of robot should sense the line with its infrared ray (IR) sensors that installed under the robot. After that, the data is transmitted to the processor by specific transition buses. Hence, the processor is going to decide the proper commends and then it sends them to the driver and thus the path will be followed by the line follower robot. In this Paper, we have illustrated the process of design, implementation and testing TABAR, a small line follower robot designed for the line follower robots competition.",
    technologies: [
      "IR Sensors",
      "Arduino Microcontroller",
      "Motor Drivers",
      "Communication Buses",
    ],
    teamMembers: ["Punam Kumari", "Riya Raj", "Afzal khan"],
  },
  {
    id: 4,
    title: "PLUTOX",
    year: 2021,
    type: "Drone",
    image:
      "https://cdn.sanity.io/images/58siqeyu/production/77df4fa77f001a804841728f39f7e6cba89abd20-1260x945.png",
    description:
      "PlutoX is an open-source programmable nano drone, by an IIT Bombay based Indian company Drona Aviation. It comes with a 720p 1MP wifi camera that can do ROS based image processing. The scope of application of the drone is limitless. It can be used to make image-processing based projects like traffic monitoring drone, or a trespasser detection drone. Also it can be used to collect data from places beyond human reach like mines. The drone can be controlled manually using the pluto controller application and can be operated in either tilt mode or joystick mode. It can also be controlled automatically by a script running on ROS which uses live data from camera.",
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "Sensors", "Node.js"],
    teamMembers: ["Ramesh Kumar", "Raj Kumar"],
  },
  {
    id: 5,
    title: "3D PRINTING",
    year: 2022,
    type: "Autonomous Vehicle",
    image:
      "https://cdn.sanity.io/images/58siqeyu/production/108d9922f0080aba8e92691ce26014a95a1aec73-933x1113.png",
    description:
      "3D printing is a process of making three dimensional solid objects from a digital file. The creation of a 3D printed object is achieved using additive processes. In an additive process an object is created by laying down successive layers of material until the object is created. Each of these layers can be seen as a thinly sliced cross-section of the object. 3D printing is the opposite of subtractive manufacturing which is cutting out / hollowing out a piece of metal or plastic with for instance a milling machine.",
    technologies: [
      "Python",
      "ROS",
      "LIDAR",
      "Cameras",
      "Reinforcement Learning",
    ],
    teamMembers: ["Aman Kumar", "Sikha Bharti", "Sonam Kumari"],
  },
  {
    id: 6,
    title: "AUTOMATED BOT",
    year: 2023,
    type: "Humanoid Robot",
    image:
      "https://cdn.sanity.io/images/58siqeyu/production/f8737e5f7ea0b3cdb58a59397304c93389299353-1244x913.png",
    description:
      "An automated bot that moves in the vicinity of a wall maintaining a constant distance from it, and keeping a count of the number of laps covered and the number of boxes found. It uses two sharp laser sensors to find the distance from the wall and implements a closed-loop feedback mechanism to correct the alignment and its distance from the wall. The same sensor is used to sense any box(parcel) on either side of it. The finishing end of a lap is marked by a black strip on the ground, which the bot senses using IR sensors and subsequently marks the lap complete and increments its count. The lap count and the box count is then displayed on a 16x2 LCD installed at the rear of the bot. The microcontroller used is Arduino uno. DM for source code/ schematic.",
    technologies: [
      "Python",
      "Servo Motors",
      "Speech Recognition",
      "Computer Vision",
      "Arduino",
    ],
    teamMembers: ["Puspam kumar", "Aryan Kumar", "Sikha Kiran"],
  },
  {
    id: 7,
    title: "RADAR NAVIGATION",
    year: 2021,
    type: "Drone",
    image:
      "https://cdn.sanity.io/images/58siqeyu/production/bf6334e40844220de62271a513618eeb5a0acdfd-1251x675.png",
    description:
      "The Radar Navigation is used in identifying, tracking (with integrated ARPA) and positioning of vessels (including one’s own vessel) among other things in order to adhere to the COLREGs so as to safely navigate a ship from one point to another. The marine radar is classified under the x-band (10 GHz) or S-band (3GHz) frequencies. The x-band, being of higher frequency is used for a sharper image and better resolution whereas the S-band is used especially when in rain or fog as well as for identification and tracking.",
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "Sensors", "Node.js"],
    teamMembers: ["Mantu Raj", "Rajesh Khan"],
  },
  {
    id: 8,
    title: "HEXAPOD",
    year: 2022,
    type: "Autonomous Vehicle",
    image:
      "https://cdn.sanity.io/images/58siqeyu/production/98692b60938c57c401b5b5523fc753da476d5ca5-1225x705.png",
    description:
      "Hexapods are used for moving and precision positioning, aligning and displacing loads in all six degrees of freedom, i.e., three linear and three rotational axes. components used: microcontroller board Arduino nano, servo motor SG90, servo driver PCA9685, 3D printed body and moving components.",
    technologies: [
      "Python",
      "ROS",
      "LIDAR",
      "Cameras",
      "Reinforcement Learning",
    ],
    teamMembers: ["Riya Kumari", "Mohan Kumar", "Sohan"],
  },
  {
    id: 9,
    title: "DRONE",
    year: 2023,
    type: "Humanoid Robot",
    image:
      "https://cdn.sanity.io/images/58siqeyu/production/5ab92834a52e63a1a0270e9e23d9e904bb308e01-1060x515.png",
    description:
      "Air quality monitoring drone. It is a manually controlled drone that acquires data about the concentration of various gases in the atmosphere and reflects the same on google firebase. It can be used to monitor the pollution level across the city sitting from the control room or can be even used to detect the presence of toxic gases at unreachable places like mines. The aviation unit of the project consists of KK 2.1.5 Multirotor Flight Control Board, 4 1000 KV Brushless Motor (BLDC) and propellers, 4 Electronic Speed Controllers (ESC), a 6-channel tansmitter+receiver, and the 3D printed frame. The flight controlled board takes signals from the radio controller(Tx) (via the receiver(Rx)) and data of current state from the onboard accelerometer/ gyroscope sensor and passes both of them to the Atmega324PA processor, which processes and instructs the Electronic Speed Controllers (ESCs) to adjust the rotational speed of each motor to control flight orientation (up, down, backward, forward, left, right, rotation about the vertical axis). The MQ2 gas sensor detects the concentration of gasses like LPG, Alcohol, Propane, Hydrogen, CO, and methane. This data is pushed into Firebase using an ESP8266 NodeMCU which is connected to a secure wi-fi network(if available) or we can attach a portable hotspot on the drone.",
    technologies: [
      "Python",
      "Servo Motors",
      "Speech Recognition",
      "Computer Vision",
      "Arduino",
    ],
    teamMembers: ["Nitish Kumar", "Sajan Kumar", "Nilesh Kumar"],
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

const projectTypes = [
  "All",
  "Drone",
  "Robotic Arm",
  "AI",
  "IoT",
  "Autonomous Vehicle",
  "Humanoid Robot",
];

const years = ["All", 2021, 2022, 2023];

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [filterType, setFilterType] = useState("All");
  const [filterYear, setFilterYear] = useState("All");

  useEffect(() => {
    document.title = "Projects | Robotics Club | NITP";
  }, []);
  // Filter projects
  useEffect(() => {
    let filtered = projectsData.filter((project) => {
      const typeMatch = filterType === "All" || project.type === filterType;
      const yearMatch = filterYear == "All" || project.year == filterYear;
      return typeMatch && yearMatch;
    });
    setFilteredProjects(filtered);
  }, [filterType, filterYear]);

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white pt-16 pb-8">
      {/* Header */}
      <section className="px-4 pt-12 text-center">
        <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
          Explore our innovative projects that push the boundaries of robotics
          and technology.
        </p>
      </section>
      {/* Filters */}
      <section className=" p-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center space-x-4 mb-8">
          <div className="flex items-center space-x-2 py-2">
            <label className="text-gray-200">Filter by Type:</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 hover:scale-105 transition-all duration-300"
            >
              {projectTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-gray-800 text-white"
                >
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-gray-200">Filter by Year:</label>
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="px-3 py-2 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 hover:scale-105 transition-all duration-300"
            >
              {years.map((year) => (
                <option
                  key={year}
                  value={year}
                  className="bg-gray-800 text-white"
                >
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredProjects.length === 0 ? (
            <p className="text-red-600 text-xl md:text-2xl">No projects found.</p>
          ) : (filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-80 bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl border border-gray-700 hover:shadow-cyan-500/50"
              onClick={() =>
                navigate(`../roboticsclub-web/projects/${project.id}`)
              }
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl text-white font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-cyan-400 mb-2">
                  <span className="text-gray-300 font-semibold">Year: </span>{" "}
                  {project.year} <span className="text-gray-500"> | </span>
                  <span className="text-gray-300 font-semibold">
                    {" "}
                    Type:{" "}
                  </span>{" "}
                  {project.type}
                </p>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="text-gray-200 font-semibold">
                    Technologies:
                  </span>{" "}
                  {project.technologies.join(", ")}
                </p>
                {project.teamMembers && (
                  <p className="text-sm text-gray-400">
                    <span className="text-gray-200 font-semibold">Team:</span>{" "}
                    {project.teamMembers.join(", ")}
                  </p>
                )}
              </div>
            </div>
          )))}
        </div>
      </section>
      {/* Ongoing Projects Section */}
      <section className="p-4 pt-8">
        <div className="max-w-6xl mx-auto mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white pb-4">
            Ongoing Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjectsData.map((project) => (
              <div
                key={project.id}
                onClick={() =>
                  navigate(`../roboticsclub-web/ongoingprojects/${project.id}`)
                }
                className="bg-gray-900 text-white hover:scale-105 rounded-lg p-6 transition-all duration-300 cursor-pointer shadow-2xl border border-gray-700 hover:shadow-blue-500/50"
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-cyan-400 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  {project.progress}% Completed
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
