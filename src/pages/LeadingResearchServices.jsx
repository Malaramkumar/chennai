
import React from "react";
import "./LeadingResearchServices.scss";
import {
  FileText,
  Globe,
  Microscope,
  BarChart3,
} from "lucide-react";


const services = [
  {
    icon: <FileText size={30} strokeWidth={1.8} />,
    title: "IEEE Conference Paper Writing",
    description:
      "Craft high-impact IEEE papers with technical precision and reviewer-ready formatting.",
    cta: "Read More",
    link: "/leading-research-services/ieee-conference-paper-writing ",
  },
  {
    icon: <Microscope size={30} strokeWidth={1.8} />,
    title: "SCI Journal Paper Writing",
    description:
      "Scientific and technical articles tailored for high-impact SCI-indexed journals.",
    cta: "Read More",
    link: "/leading-research-services/sci-journal-paper-writing",
  },
  {
    icon: <Globe size={30} strokeWidth={1.8} />,
    title: "Scopus Journal Paper Writing",
    description:
      "Customized manuscripts that meet Scopus standards with proper referencing and formatting.",
    cta: "Read More",
    link: "/leading-research-services/scopus-journal-paper-writing",
  },
  {
    icon: <BarChart3 size={30} strokeWidth={1.8} />,
    title: "Review Article Writing",
    description:
      "Well-structured, literature-rich review articles showing domain expertise and scholarly depth.",
    cta: "Read More",
    link: "/leading-research-services/review-article-writing",
  },
];

const ResearchServices = () => {
  return (
    <section className="research-services">
      <div className="container">
        <h2 className="main-heading">Leading Research Paper, Journal and Manuscript Writing Services<br />– Full Support till Publication</h2>
        <p className="subtext">
            📌 Empowering scholars and researchers with expert manuscript writing, end-to-end editing, journal selection, and seamless publication guidance across top international and SCI/Scopus-indexed journals.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="cta-btn">

                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchServices;
