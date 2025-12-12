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
    link: "/department",
  },
  {
    icon: <FaCogs />,
    title: "Mechanical Engineering",
    description:
      "End-to-end guidance in design, thermal engineering, robotics, CAD/CAM, manufacturing systems, and energy optimization projects.",
    linkText: "Explore",
    link: "/department",
  },
  {
    icon: <FaMicrochip />,
    title: "Electronics & Communication Engineering (ECE)",
    description:
      "Cutting-edge solutions in VLSI, Embedded Systems, IoT, Wireless Communication, and Signal Processing for research scholars.",
    linkText: "Explore",
    link: "/department",
  },
  {
    icon: <FaBolt />,
    title: "Electrical & Electronics Engineering (EEE)",
    description:
      "Project and publication support in Power Systems, Renewable Energy, Smart Grids, Electric Vehicles, and AI-driven power forecasting.",
    linkText: "Explore",
    link: "/department",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Civil Engineering",
    description:
      "Expert project support in Structural Engineering, Smart Cities, Construction Management, and Sustainable Design methodologies.",
    linkText: "Explore",
    link: "/department",
  },
  {
    icon: <FaUniversity />,
    title: "Other Specialized Departments",
    description:
      "Customized support for interdisciplinary and upcoming domains. (Details will be updated soon).",
    linkText: "Explore",
    link: "/department",
  },
];

const Departments = () => {
  return (
    <>
      {/* ===================== Departments Section ===================== */}
      <section className="departments-section">
        <div className="departments-container">
          <h2 className="departments-heading">🏫 Academic Departments</h2>
          <p className="departments-subtext">
            <strong>Comprehensive Research & Project Support</strong>
            <br />
            At <strong>Narpavi Research Institute</strong>, we assist students
            and researchers across multiple engineering and technology domains.
          </p>

          <button className="read-more-btn">Read More</button>

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

      {/* ===================== New Services Container & Button Only ===================== */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="services-heading">✨ Our Services</h2>
          <p className="services-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nemo, perferendis dignissimos necessitatibus dicta eum magnam suscipit reprehenderit harum veniam commodi consequuntur amet omnis impedit iusto provident quaerat qui officiis laudantium. Inventore recusandae ex tempore minima omnis rem, expedita in. Iure omnis recusandae vel a inventore rerum corrupti, tempora nihil, reiciendis explicabo illo amet dolore praesentium! In autem dolorem consequatur, nesciunt nisi dolorum culpa labore magni, repellendus sint, architecto molestias consequuntur ad nihil. Similique dolore pariatur perferendis mollitia beatae aliquid quibusdam iste fuga ut, suscipit a debitis earum reprehenderit! Quidem dolore dicta voluptas accusamus, molestiae quo consequuntur nemo culpa vel?
          </p>

          {/* ⭐ Only Button (As you requested) */}
          <a href="/service" className="services-button">
            View All Services
          </a>
        </div>
      </section>
    </>
  );
};

export default Departments;
