import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './College.scss';
import Subsidebar from './Subsidebar';

const College1 = [ 

   {
    title: 'Periyar University',
    description: 'Learn more',
    link: '/periyar-university',
  },
  {
    title: 'Dr. M.G.R. Educational And Research Institute, Maduravoyal',
    description: 'Explore now',
    link: '/mgr-institute',
  },
  {
    title: 'Vels Institute of Science, Technology & Advanced Studies (VISTAS)',
    description: 'Visit page',
    link: '/vistas',
  },
  {
    title: 'Bharath Institute of Higher Education And Research (BIHER)',
    description: 'Discover',
    link: '/biher',
  },
  {
    title: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    description: 'Check it out',
    link: '/amrita',
  },
  {
    title: 'Hindustan Institute of Technology & Science (HITS), Chennai',
    description: 'Details',
    link: '/hits',
  },
 
  {
    title: 'Alagappa University',
    description: 'See info',
    link: '/alagappa-university',
  },
  {
    title: 'Manonmaniam Sundaranar University',
    description: 'Navigate',
    link: '/manonmaniam-university',
  },
  {
    title: 'Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology',
    description: 'Go to page',
    link: '/vel-tech-rangarajan', 
  },
    {
    title: 'Kalasalingam Academy of Research and Education, Krishnankoil ',
    description: 'See info',
    link: '/kalasalingam-academy',
  }, {
    title: 'Karpagam Academy of Higher Education, Coimbatore',
    description: 'See info',
    link: '/karpagam-academy',
  }, {
    title: 'Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya, Kanchipuram',
    description: 'See info',
    link: '/sri-chandrasekharendra-saraswathi',
  }, {
    title: 'St.Peter’s Institute of Higher Education and Research, Chennai',
    description: 'See info',
    link: '/st.peter’s-institute',
  }, {
    title: 'Periyar Maniammai Institute of Science & Technology, Thanjavur',
    description: 'See info',
    link: '/periyar-maniammai-university',
  },
  {
    title: 'Vinayaka Missions Research Foundation, Salem',
    description: 'See info',
    link: '/vinayaka-missions',
  },{
    title: 'SNS College of Technology',
    description: 'See info',
    link: '/sns',
  },
  {
    title: 'Sri Ramakrishna Engineering College, Coimbatore',
    description: 'See info',
    link: '/sri-ramakrishna-engineering',
  },
  {
    title: 'PSG College Of Technology',
    description: 'See info',
    link: '/psg',
  },
  {
    title: 'Coimbatore Institute of Technology',
    description: 'See info',
    link: '/coimbatore-institute',
  },
  {
    title: 'Ponnaiyah Ramajayam Institute of Science & Technology',
    description: 'See info',
    link: '/prist-university',
  },
  {
    title: 'Karunya Institute of Technology and Sciences (Deemed University)',
    description: 'See info',
    link: '/karunya',
  },
];

const College = () => {
  useEffect(() => {
    document.title = "Top PhD Colleges in Tamil Nadu";
  }, []);

  return (
    <div className="main">
      <Subsidebar />
      <div className="college-wrapper">
        <div className="college-container">
          {College1.map((item, index) => (
            <div className="college-card" key={index}>
              <h3>{item.title}</h3>
              <Link to={item.link} className="college-learn-more-btn">
                {item.description} <span>➜</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default College;
      