import "./Home.scss";
import Logo from "./Logo";
import PhDresearch from "./PhDresearch";
import Grid from "./Grid";
//import Fact from "./Factandstats"
import FacilitiesSection from "./FacilitiesSection"
import ContactSection from "./ContactSection"
import ResearchProposalServices from "./Researchproposalservices";
import LeadingResearchServices from "./LeadingResearchServices"
import PublicationServices from "./PublicationServices";
import Departments from "./Departments";
 
const Home =() => {
return(
    <div className="home"> 
        <Logo/>
        <PhDresearch/>
        <Grid/>   
        <ResearchProposalServices/>
        <LeadingResearchServices/>
        <PublicationServices/> 
        <Departments/>
        <FacilitiesSection/>
        <ContactSection/>
    </div>
    );
};
export default Home;