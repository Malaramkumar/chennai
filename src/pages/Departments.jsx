import "./Departments.scss";
import {
  FaLaptopCode,
  FaCogs,
  FaMicrochip,
  FaBolt,
  FaDraftingCompass,
  FaUniversity,
} from "react-icons/fa";

const departments = [
  {
    icon: <FaLaptopCode />,
    title: "Computer Science & Engineering (CSE)",
    description:
      "Advanced research and project development support in AI, Machine Learning, Cloud Computing, Cybersecurity, and Data Science.",
    linkText: "Explore",
    link: "/departments/cse",
  },
  {
    icon: <FaCogs />,
    title: "Mechanical Engineering",
    description:
      "End-to-end guidance in design, thermal engineering, robotics, CAD/CAM, manufacturing systems, and energy optimization projects.",
    linkText: "Explore",
    link: "/departments/mechanical",
  },
  {
    icon: <FaMicrochip />,
    title: "Electronics & Communication Engineering (ECE)",
    description:
      "Cutting-edge solutions in VLSI, Embedded Systems, IoT, Wireless Communication, and Signal Processing for research scholars.",
    linkText: "Explore",
    link: "/departments/ece",
  },
  {
    icon: <FaBolt />,
    title: "Electrical & Electronics Engineering (EEE)",
    description:
      "Project and publication support in Power Systems, Renewable Energy, Smart Grids, Electric Vehicles, and AI-driven power forecasting.",
    linkText: "Explore",
    link: "/departments/eee",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Civil Engineering",
    description:
      "Expert project support in Structural Engineering, Smart Cities, Construction Management, and Sustainable Design methodologies.",
    linkText: "Explore",
    link: "/departments/civil",
  },
  {
    icon: <FaUniversity />,
    title: "Other Specialized Departments",
    description:
      "Customized support for interdisciplinary and upcoming domains. (Details will be updated soon).",
    linkText: "Explore",
    link: "/departments/others",
  },
];

const Departments = () => {
  return (
    <section className="departments-section">
      <div className="departments-container">
        <h2 className="departments-heading">🏫 Academic Departments</h2>
        <p className="departments-subtext">
          <strong>Comprehensive Research & Project Support</strong>
          <br />
          At <strong>Narpavi Research Institute</strong>, we assist students and researchers across multiple engineering and technology domains.
        </p>

        <button>Read More</button>

        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div className="departments-card" key={index}>
              <div className="departments-icon">{dept.icon}</div>
              <h3>{dept.title}</h3>
              <p>{dept.description}</p>
              <a href={dept.link} className="departments-cta">
                🔗 {dept.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
