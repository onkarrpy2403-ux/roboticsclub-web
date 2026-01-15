import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// here we call api and get data from backend in future
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
    teamMembers: ["Ramesh Kumar", "Raj Kumar"],
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
    teamMembers: ["Puspam Kuamr", "Aryan Kumar", "Sikha Kiran"],
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

const ProjectDetails = () => {
  const { pid } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id == pid);
    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.title} | Robotics Club | NITP`;
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
    <div className="min-h-screen p-4 pt-16 bg-black text-white">
      {/* Back Button */}
      <div className="text-center pt-12">
        <button
          onClick={() => navigate("/roboticsclub-web/projects")}
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-lg hover:cursor-pointer transition duration-200"
        >
          Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative ">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-5xl mx-auto h-80 md:h-100 lg:h-110 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-left">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-transparent text-cyan-400 mb-2">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-500">
                <strong>Year: </strong>
                {project.year} | <strong>Type: </strong>
                {project.type}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="p-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">
              Project Overview
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-300 flex items-center">
                  <span className="mr-2">⚙️</span> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-white rounded-xl text-sm font-medium shadow-md hover:bg-gray-600 transition duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.teamMembers && (
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-300 flex items-center">
                    <span className="mr-2">👥</span> Team Members
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.teamMembers.map((member, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-white rounded-xl text-sm font-medium shadow-md hover:bg-gray-600 transition duration-200"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
