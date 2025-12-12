import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSettings,
  FiCpu,
  FiAperture,
  FiRadio,
  FiZap,
  FiCode,
  FiGrid,
  FiLayers,
  FiChevronRight,
} from "react-icons/fi";
import "./DepartmentList.scss";

const DepartmentPage = () => {
  const navigate = useNavigate();

  const domains = {
cse: [
  { name: "Static Web Application Development", path: "/department/static-web-application" },
  { name: "Dynamic Web Application Development", path: "/department/dynamic-web-applications" },
  { name: "Mobile App Development", path: "/department/mobile-app" },
  { name: "Animation Project Development", path: "/department/animations-project" },
  { name: "Artificial Intelligence", path: "/department/ai-project" },
  { name: "Data Science", path: "/department/data-science" },
  { name: "Big Data", path: "/department/big-data" },
  { name: "Blockchain", path: "/department/blockchain" },
  { name: "DevOps", path: "/department/devops" },
  { name: "Networking", path: "/department/networking" },
  { name: "Image Processing", path: "/department/image-processing" },
  { name: "Natural Language Processing", path: "/department/nlp" },
  { name: "Cloud Computing", path: "/department/cloud-computing" },
  { name: "Cybersecurity", path: "/department/cybersecurity" },
],

ece: [
  { name: "Biomedical Electronics", path: "/department/biomedical-electronics" },
  { name: "Communication Systems", path: "/department/communication-systems" },
  { name: "Control Systems & Robotics", path: "/department/control-systems-robotics" },
  { name: "Cryptography & Security", path: "/department/cryptography-security" },
  { name: "Embedded Systems", path: "/department/embedded-systems" },
  { name: "Internet of Things (IoT)", path: "/department/iot-projects" },
  { name: "Signal Processing", path: "/department/signal-processing" },
  { name: "VLSI Design", path: "/department/vlsi-design" },
  { name: "Wireless Sensor Networks", path: "/department/wireless-sensor-networks" },
  { name: "Satellite Communication", path: "/department/satellite-communication" },
  { name: "Antennas", path: "/department/antenna-design" },
],

eee: [
  { name: "Power Systems", path: "/department/power-systems" },
  { name: "Electrical Machines", path: "/department/electrical-machines" },
  { name: "Power Electronics", path: "/department/power-electronics" },
  { name: "Renewable Energy Systems", path: "/department/renewable-energy-systems" },
  { name: "Embedded Systems", path: "/department/embedded-systems-electrical" },
  { name: "High Voltage Engineering", path: "/department/high-voltage-engineering" },
  { name: "Smart Grid / Microgrid", path: "/department/smart-grid-microgrid" },
  { name: "Control Systems", path: "/department/control-systems-electrical" },
  { name: "Industrial Automation", path: "/department/industrial-automation" },
  { name: "Electric Vehicles", path: "/department/electric-vehicles" },
  { name: "AI for Electrical Engineering", path: "/department/ai-electrical-engineering" },
  { name: "IoT for Electrical Systems", path: "/department/iot-electrical-systems" },
  { name: "Energy Management Systems", path: "/department/energy-management-systems" },
],


 civil: [
  { name: "Construction Project Management", path: "/department/construction-project-management" },
  { name: "Environmental Engineering", path: "/department/environmental-engineering" },
  { name: "Geotechnical Engineering", path: "/department/geotechnical-engineering" },
  { name: "Remote Sensing & GIS", path: "/department/remote-sensing-gis" },
  { name: "Structural Engineering", path: "/department/structural-engineering" },
  { name: "Transportation Engineering", path: "/department/transportation-engineering" },
],


   mech: [
  { name: "Thermal Engineering", path: "/department/thermal-engineering" },
  { name: "Fluid Mechanics & Fluid Dynamics", path: "/department/fluid-mechanics-dynamics" },
  { name: "Manufacturing & Production Engineering", path: "/department/manufacturing-production" },
  { name: "Design Engineering (CAD/CAE)", path: "/department/design-engineering-cad" },
  { name: "Robotics & Mechatronics", path: "/department/robotics-mechatronics" },
  { name: "Renewable & Thermal Energy", path: "/department/renewable-thermal-energy" },
  { name: "Automotive & Vehicle Engineering", path: "/department/automotive-vehicle-engineering" },
  { name: "Mechatronics & Control Systems", path: "/department/mechatronics-control-systems" },
  { name: "Mechanical Properties & Materials", path: "/department/mechanical-properties-materials" },
  { name: "Industrial & Production Optimization", path: "/department/industrial-production-optimization" },
],
 
    other: [
    ],
  };

  const departments = [
    {
      id: "mech",
      title: "Mechanical Engineering",
      desc: "Design, analyze, and manufacture mechanical systems.",
      icon: FiSettings,
    },
    {
      id: "cse",
      title: "Computer Science",
      desc: "Software development, AI, algorithms, and data systems.",
      icon: FiCpu,
    },
    {
      id: "civil",
      title: "Civil Engineering",
      desc: "Infrastructure design, construction, and environmental systems.",
      icon: FiAperture,
    },
    {
      id: "ece",
      title: "Electronics & Comm.",
      desc: "Electronic circuits, communication networks, and signal processing.",
      icon: FiRadio,
    },
    {
      id: "eee",
      title: "Electrical & Electronics",
      desc: "Power generation, electrical machines, and control systems.",
      icon: FiZap,
    },
    {
      id: "other",
      title: "Other Departments",
      desc: "Biotech, Chemical, Aerospace, and interdisciplinary fields.",
      icon: FiGrid,
    },
  ];

  const [activeDept, setActiveDept] = useState("cse"); // default like your screenshot

  const handleDeptClick = (id) => {
    setActiveDept(id);
  };

  const activeDeptObj = departments.find((d) => d.id === activeDept);

  return (
    <div className="dept-page-wrapper">
      <div className="dept-page-inner">
        {/* LEFT SIDE */}
        <div className="dept-left">
          <div className="dept-left-header">
            <div className="dept-left-icon">
              <FiLayers />
            </div>
            <div>
              <h2>Select Department</h2>
            </div>
          </div>

          <div className="dept-card-grid">
            {departments.map((dept) => {
              const Icon = dept.icon;
              const isActive = dept.id === activeDept;
              return (
                <div
                  key={dept.id}
                  className={`dept-card dept-card--${dept.id} ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => handleDeptClick(dept.id)}
                >
                  <div className="dept-card-top-row">
                    <div className="dept-card-icon-wrap">
                      <Icon className="dept-card-icon" />
                    </div>
                    {isActive && <span className="dept-active-pill">Active</span>}
                  </div>
                  <div className="dept-card-title">{dept.title}</div>
                  <div className="dept-card-desc">{dept.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="dept-right">
          <h2 className="dept-right-title">
            {activeDeptObj?.title} <span>Domains</span>
          </h2>
          <p className="dept-right-subtitle">
            Tap any domain below to open the detailed project development center
            for that area.
          </p>

          <div className="dept-right-divider" />

          <div className="domain-list">
            {domains[activeDept]?.map((domain, index) => (
              <div
                key={domain.path}
                className="domain-item"
                onClick={() => navigate(domain.path)}
              >
                <div className="domain-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="domain-text">{domain.name}</div>
                <div className="domain-arrow">
                  <FiChevronRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;