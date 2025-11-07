import "./PublicationServices.scss";
import {
  FaBookOpen,
  FaRegNewspaper,
  FaMicroscope,
  FaUniversity,
  FaEdit,
  FaBook,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMicroscope />,
    title: "Conference Paper Publication Services",
    description:
      "Professional writing, formatting, and submission support for IEEE, Springer, Elsevier, and National Conference papers.",
    linkText: "Read More",
    link: "/publication-services/conference-paper-publication-services",
  },
  {
    icon: <FaRegNewspaper />,
    title: "SCI Journal Publication Services",
    description:
      "Specialized writing and submission services for Science Citation Indexed (SCI) journals, including peer-reviewed support, plagiarism correction, and rebuttal assistance.",
    linkText: "Read More",
    link: "/publication-services/SCIJournal",
  },
  {
    icon: <FaBookOpen />,
    title: "Scopus Journal Publication Services",
    description:
      "Customized research papers for Scopus-indexed journals, aligned with editorial scope, referencing styles, and technical requirements.",
    linkText: "Read More",
    link: "publication-services/scopus-journal-publication-services",
  },
  {
    icon: <FaUniversity />,
    title: "UGC Care Journal Publication Services",
    description:
      "High-quality academic writing and submission support for UGC Care listed journals, ideal for faculty, PhD scholars, and academic professionals.",
    linkText: "Read More",
    link: "#",
  },
  {
    icon: <FaEdit />,
    title: "Review Article Publication",
    description:
      "We craft in-depth, literature-rich review articles with a strong analytical framework and critical insights—targeted for SCI, Scopus, and other indexed journals.",
    linkText: "Read More",
    link: "#",
  },
  {
    icon: <FaBook />,
    title: "Book ISBN Publication Support",
    description:
      "From academic book writing to ISBN registration and publisher coordination, we provide comprehensive support for individual authors and institutions.",
    linkText: "Read More",
    link: "#",
  },
];

const PublicationServices = () => {
  return (
    <section className="publication-section">
      <div className="publication-container">
        <h2 className="publication-heading">
          📚 Research Journals, Review Articles, Conference Papers & Book Publication Services
        </h2>
        <p className="publication-subtext">
          <strong>Excellent and Confidential Support – From Writing to Publication</strong>
          <br />
          At <strong>Narpavi Research Institute</strong>, we offer trusted, expert-backed academic publication services tailored for researchers, PhD scholars, and academicians.
        </p>

        <button>Read More</button>

        <div className="publication-grid">
          {services.map((service, index) => (
            <div className="publication-card" key={index}>
              <div className="publication-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="publication-cta">
                🔗 {service.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationServices;
