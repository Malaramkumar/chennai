import { Routes, Route } from 'react-router-dom'
import React from "react";
//import ScrollToTop from './assets/ScrollToTop'
// import Fact from "./pages/Researchproposalservices"
import "./index.css"
import Home from './pages/Home'
import Subheading from "./pages/Subheading"
import College from "./pages/College" 
import Annamalaiuniversity from "./College/Annamalaiuniversity"
import Bharathiaruniversity from "./College/Bharathiaruniversity"
import Vituniversity from "./College/Vituniversity"
import Srm from "./College/Srm"
import Mgr from "./College/Mgr"
import Sathyabama from "./College/Sathyabama"
import Saveetha from "./College/Saveetha"
import Vels from "./College/Vels"
import Bharath from "./College/Bharath"
import Amrita from "./College/Amrita"
import Hindustan  from "./College/Hindustan"
import Alagappa  from "./College/Alagappa"
import Manonmaniam  from "./College/Manonmaniam"
import Periyar  from "./College/Periyar"
import MaduraiKamaraj  from "./College/MaduraiKamaraj"
import Bharathidasan  from "./College/Bharathidasan"
import Sastra  from "./College/Sastra"
import SriRamakrishna  from "./College/SriRamakrishna"
import Sns  from "./College/Sns"
import Cit  from "./College/Cit"
import Psg  from "./College/Psg"
import VinayakaMission  from "./College/VinayakaMission"
import PonnaiyahRamajayam  from "./College/PonnaiyahRamajayam"
import PeriyarManiammai from "./College/PeriyarManiammai"
import StPeters from "./College/StPeters"
import Srichandrasekharendra from "./College/Srichandrasekharendra";
import Karpagam from "./College/Karpagam";
import Karunya from "./College/Karunya";
import VelTech from "./College/VelTech";
import Kalasalingam from "./College/Kalasalingam";
//subsiderbar
import ReferGuide from './sidebar/ReferGuide'
import TopicSelection from './sidebar/TopicSelection'
import PhDApplication from './sidebar/PhDApplication'
import Proposal from './sidebar/Proposal'
import UniversitySelection from './sidebar/UniversitySelection'
import Service from './pages/Service'
/*service*/
import PhDAdmissionGuidance from './services/PhDAdmissionGuidance';
import Researchproposalwriting from './services/Researchproposalwriting';
import Researchpaperwriting from './services/Researchpaperwriting';
import Reviewpaperwriting from './services/Reviewpaperwriting';
import Annauniversityannexture from './services/Annauniversityannexture'
import ElsevierConference from './services/Elsevierconferencepaper'
import IEEEconferencepaper from './services/IEEEconferencepaper'
import Internationalconferencepaper from './services/Internationalconferencepaper'
import Phdprojectimplementation from './services/Phdprojectimplementation'
import Phdresearchfinalviva from './services/Phdresearchfinalviva'
import Phdresearchsynopsis from './services/Phdresearchsynopsis'
import Phdresearchthesis from './services/Phdresearchthesis'
import Researchpaperforsrm from './services/Researchpaperforsrm'
import Researchpaperpublication from './services/Researchpaperpublication'
import Researchpapersathyabama from './services/Researchpapersathyabama'
import Sciencecitationindexed from './services/Sciencecitationindexed'
import Springerconferencepaper from './services/Springerconferencepaper'
import VITuniversitypaper from './services/VITuniversitypaper'
import Webofsciencepaper from './services/Webofsciencepaper'
//Researchproposalservices
import EngineeringResearchProposalGuide from './Researchproposalservices/EngineeringResearchProposalGuide'
import TrendingResearchTopics from './Researchproposalservices/TrendingResearchTopics' 
import ResearchFundingGuide from './Researchproposalservices/ResearchFundingGuide'
import ProposalStepGuide from "./Researchproposalservices/ProposalStepGuide"
//leading research sevices
import ReviewArticleWriting from './LeadingResearchServices/ReviewArticleWriting'
import SCIPaperWriting from './LeadingResearchServices/SCIPaperWriting'
import ScopusPaperWriting from './LeadingResearchServices/ScopusPaperWriting'
import IEEEPaperWriting from './LeadingResearchServices/IEEEPaperWriting'

import EngineeringLiteratureGuide from './LeadingResearchServices/SubReviewAriticleWriting/EngineeringLiteratureGuide'
import MedicalReviewWriting from './LeadingResearchServices/SubReviewAriticleWriting/MedicalReviewWriting'
import LiteratureReviewGuide from "./LeadingResearchServices/SubReviewAriticleWriting/LiteratureReviewGuide"

// main publication services
import MainPublicationServices from './MainPublicationServices/MainPublicationServices'
      //ConferencePublication
      import ConferencePublication from './MainPublicationServices/ConferencePublication'
      import IEEEConference from './MainPublicationServices/ConferencePublication/IEEEConference'
      import SpringerConference from './MainPublicationServices/ConferencePublication/SpringerConference'
      import ElsevierConference1 from './MainPublicationServices/ConferencePublication/ElsevierConference'
      import NationalConference from './MainPublicationServices/ConferencePublication/NationalConference'
      import FastTrackConference from "./MainPublicationServices/ConferencePublication/FastTrackConference"
      import IEEEConferenceReview from "./MainPublicationServices/ConferencePublication/IEEEConferenceReview"
    
      //SCI Journal Publication Services
      import SCIJournal from './MainPublicationServices/SCIJournal'
      import SCIJournalSupport from './MainPublicationServices/SCIJournalPublication/SCIJournalSupport'
      import SCIJournalTargeting from './MainPublicationServices/SCIJournalPublication/SCIJournalTargeting'
      import SCIPublishingTimelines from './MainPublicationServices/SCIJournalPublication/SCIPublishingTimelines'
      import EthicalSCIPublication from './MainPublicationServices/SCIJournalPublication/EthicalSCIPublication'
      import OpenAccessVsSubscription from './MainPublicationServices/SCIJournalPublication/OpenAccessVsSubscription'
      import PostPublicationVisibility from './MainPublicationServices/SCIJournalPublication/PostPublicationVisibility'
      //ScopusJournalPublicationServices
      import ScopusJournalPublication from './MainPublicationServices/ScopusJournalPublicationServices'
      import Q1ScopusJournal from './MainPublicationServices/ScopusJournalPublicationServices/ScopusJournalQ1'
      import Q2Scopus from './MainPublicationServices/ScopusJournalPublicationServices/Q2Scopus'
      //Review Article Publication
      import ReviewArticlePublication from './MainPublicationServices/ReviewArticlePublication'
      import SystematicReviewArticlePublication from './MainPublicationServices/ReviewArticlePublication/SystematicReviewArticle'
      import NarrativeReviewArticlePublication from './MainPublicationServices/ReviewArticlePublication/NarrativeReviewArticle'
      import MetaAnalysisReviewPaperPublication from './MainPublicationServices/ReviewArticlePublication/MetaAnalysisReview'
      import ScopusIndexedReviewArticlePublication from './MainPublicationServices/ReviewArticlePublication/ScopusIndexedReview'
      import ReviewArticleJournalSelectionAssistance from './MainPublicationServices/ReviewArticlePublication/ReviewArticleJournal'
      import SCIJournalReviewArticlePublication from './MainPublicationServices/ReviewArticlePublication/SCIJournalReviewArticle'
      //UGCCareJournalPublicationServices
      import UGCCareJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublicationServices'
      import UGCCareIndexedJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCareIndexedJournal'
      import UGCCareArtsAndHumanitiesJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCareArtsAndHumanitiesJournal'
      import UGCCareFastTrackJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCareFastTrackJournal'
      import UGCCareOpenAccessJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCareOpenAccessJournal'
      import UGCCarePeerReviewedJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCarePeerReviewedJournal'
      import UGCCareScienceAndTechnologyJournalPublicationServices from './MainPublicationServices/UGCCareJournalPublication/UGCCareScienceAndTechnologyJournal'
      //BookISBNPublicationSupport
      import BookISBNPublicationSupport from './MainPublicationServices/BookISBNPublicationSupport'
      import AcademicBookISBNPublicationSupport from './MainPublicationServices/BookISBNPublicationSupport/AcademicBookISBNPublication'
      import EditedVolumeISBNPublicationSupport from "./MainPublicationServices/BookISBNPublicationSupport/EditedVolumeISBNPublication"
      import ISBNBarcodeAndMetadataPublicationSupport from './MainPublicationServices/BookISBNPublicationSupport/ISBNBarcodeAndMetadataPublication'
      import PrintAndEBookISBNPublicationSupport from './MainPublicationServices/BookISBNPublicationSupport/PrintAndEBookISBNPublication'
      import SelfPublishedBookISBNPublicationSupport from './MainPublicationServices/BookISBNPublicationSupport/SelfPublishedBookISBNPublication'


//SubScopusJournalPaperWriting
import ScopusPaperServices from './LeadingResearchServices/SubScopusJournalPaperWriting/ScopusPaperServices'
import EngineeringTopicsForScopus from './LeadingResearchServices/SubScopusJournalPaperWriting/EngineeringTopicsForScopus'
import WriteFreeScopusArticle from './LeadingResearchServices/SubScopusJournalPaperWriting/WriteFreeScopusArticle'
import ScopusJournalVsConference from './LeadingResearchServices/SubScopusJournalPaperWriting/ScopusJournalVsConference'
import ScopusPaperBenefits from './LeadingResearchServices/SubScopusJournalPaperWriting/ScopusPaperBenefits'
import ScopusPaperDrafting from './LeadingResearchServices/SubScopusJournalPaperWriting/ScopusPaperDrafting'

//ScipaperWriting
import SCIWritingGuide from './LeadingResearchServices/SubSCIPaperWriting/SCIWritingGuide'
import TrendingEngineeringTopicsForScopus from './LeadingResearchServices/SubSCIPaperWriting/TrendingEngineeringTopicsForScopus'
import NoveltyInEngineering from './LeadingResearchServices/SubSCIPaperWriting/NoveltyInEngineering'
import SCIvsScopus from './LeadingResearchServices/SubSCIPaperWriting/SCIvsScopu'
import SCIBenefits from './LeadingResearchServices/SubSCIPaperWriting/SCIBenefit'
import SCIJournalSelection from './LeadingResearchServices/SubSCIPaperWriting/SCIJournalSelection'

//kerala 
import UniversityOfKerala from './kerala/UniversityOfKerala'
import AmritaAmritapuri from './kerala/AmritaAmritapuri'
import AmritaKochi from './kerala/AmritaKochi'
import KtuThiruvananthapuram from './kerala/KtuThiruvananthapuram'
import ChinmayaVishwaVidypeeth from './kerala/ChinmayaVishwaVidypeeth'
import CusatKochi from './kerala/CusatKochi'
import IitPalakkad from './kerala/IitPalakkad'
import KannurUniversity from './kerala/KannurUniversity'
import MahatmaGandhiUniversity from './kerala/MahatmaGandhiUniversity'
import NitCalicut from './kerala/NitCalicut'
import UnivCalicut from './kerala/UnivCalicut'
import CentralUniversityKerala from './kerala/CentralUniversityKerala'
import DigitalUniversityKerala from './kerala/DigitalUniversityKerala'
import CvvErnakulam from './kerala/CvvErnakulam'
//telangana
import UniversityOfHyderabad from './Telangana/UniversityOfHyderabad'
import IIITHyderabad from './Telangana/IIITHyderabad'
import IITHyderabad from "./Telangana/IITHyderabad"
import KakatiyaUniversity from './Telangana/KakatiyaUniversity'
import JNTHyderabad from './Telangana/JNTHyderabad'
import NITWarangal from './Telangana/NITWarangal'
import IFHEHyderabad from './Telangana/IFHEHyderabad'
import MGUNalgonda from './Telangana/MGUNalgonda'
import SatavahanaUniversity from './Telangana/SatavahanaUniversity'
import PalamuruUniversity from './Telangana/PalamuruUniversity'
import TelanganaUniversity from './Telangana/TelanganaUniversity'
import AnuragUniversity from './Telangana/AnuragUniversity'
import BRAOU from './Telangana/BRAOU'
import ChaitanyaUniversity from './Telangana/ChaitanyaUniversity'
import OsmaniaUniversity from './Telangana/OsmaniaUniversity'
import RGUKTBasar from './Telangana/RGUKTBasar'
import BITSHyderabad from './Telangana/BITSHyderabad'
import MallaReddyUniversity from './Telangana/MallaReddyUniversity'
import SRUniversity from './Telangana/SRUniversity'
import AuroraHERAHyderabad from './Telangana/AuroraHERAHyderabad'
import TelanganaMahilaViswavidyalayam from './Telangana/TelanganaMahilaViswavidyalayam'
import WoxsenUniversity from './Telangana/WoxsenUniversity'
import MahindraUniversity from "./Telangana/MahindraUniversity"
//andhra
import AdikaviNannaya from './Andhra/AdikaviNannaya'
import GITAMVisakhapatnam from './Andhra/GITAMVisakhapatnam'
import IIITSriCity from "./Andhra/IIITSriCity"
import IITTirupati from "./Andhra/IITTirupati"
import JNTUKakinada from './Andhra/JNTUKakinada'
import JNTUAAnantapur from './Andhra/JNTUAAnantapur'
import KLEFPhDAdmission from './Andhra/KLEFUniversity'
import KrishnaUniversity from './Andhra/KrishnaUniversity'
import RGUKTNuzvid from './Andhra/RGUKTNuzvid'
import SriKrishnadevarayaUniversity from './Andhra/SriKrishnadevarayaUniversity'
import SRMUniversityGuntur from './Andhra/SRMUniversityGuntur'
import CentralUniversityAP from './Andhra/CentralUniversityAP'
import CentralTribalUniversityAP from './Andhra/CentralTribalUniversityAP'
import NITAndhraPradesh from './Andhra/NITAndhraPradesh'
import SSSIHLDoctoral from './Andhra/SSSIHLDoctoral'
import SiddharthaPhD from './Andhra/SiddharthaPhD'
import VignanUniversityPhD from './Andhra/VignanUniversity'
import MohanBabuUniversityPhD from './Andhra/MohanBabuUniversity'
import BestInnovationUniversityPhD from './Andhra/BestInnovationUniversity'
import SaveethaAmaravatiUniversityPhD from './Andhra/SaveethaAmaravatiUniversity'
//cs
import StaticWebApplication from './CS/WebApp/StaticWebAppDev'
import DynamicWebApplications from './CS/WebApp/DynamicWebAppDev'
import MobileApp from './CS/WebApp/MobileAppDev'
import AnimationsProject from './CS/WebApp/Animation'
import AIProject from './CS/Ai/Ai'
import DataScience from './CS/Data/DataScience'
import BigData from './CS/BigData/BigData'
import Blockchain from './CS/Blockchain/BlockChain'
import Cybersecurity from './CS/Cybersecurity/Cybersecurity'
import DevOps from './CS/DevOps/DevOps'
import Networking from './CS/Networking/Networking'
import ImageProcessing from './CS/Processing/Ipp'
import NLP from './CS/Processing/Nlp'
import CloudComputing from './CS/Cloud/Cloud'


 //ECE
import BiomedicalElectronicsProjectDevelopmentCenter from './ECE/BiomedicalElectronics'
       //sub
       import AIBiomedicalDiagnosticsProject from './ECE/BiomedicalElectronics/AIBiomedicalDiagnostics'
       import BiomedicalSignalAcquisitionProject from './ECE/BiomedicalElectronics/BiomedicalSignalAcquisition'
       import BrainComputerInterfaceProject from './ECE/BiomedicalElectronics/BrainComputerInterface'
       import IoTEnabledHealthcareDevicesProject from './ECE/BiomedicalElectronics/IoTenabledHealthcare'
       import ImplantableMedicalElectronicsProject from './ECE/BiomedicalElectronics/implantableMedicalElectronics'
       import WearableBiomedicalDevicesProject from './ECE/BiomedicalElectronics/WearableBiomedicalDevices'

import CommunicationSystemsProjectDevelopmentCenter from './ECE/CommunicationSystem'
        //sub
        import ECE5G6GWirelessCommunication from './ECE/Communication/5Gand6GWireless'
        import ECEErrorControlCoding from './ECE/Communication/ErrorControlCoding'
        import ECEMIMOMassiveMIMOAntennaTechniques from './ECE/Communication/MIMOAndMassiveMIMOAntenna'
        import ECEOpticalFiberCommunication from './ECE/Communication/OpticalFiberCommunication'
        import ECESoftwareDefinedRadio from './ECE/Communication/SoftwareDefinedRadio'
        import ECECognitiveRadioNetworks from './ECE/Communication/CognitiveRadioNetworks'

import ControlSystemsAndRoboticsProjectDevelopmentCenter from './ECE/ControlSysAndRobotics'
        //sub
        import ECEControlCyberPhysicalSystems from './ECE/ControlSystemsAndRobotics/ControlinCyberPhysical'
        import ECERoboticVisionSensorFusion from './ECE/ControlSystemsAndRobotics/RoboticVisionSensor'
        import ECEAdaptiveNonlinearControlSystems from './ECE/ControlSystemsAndRobotics/AdaptiveandNonlinearControl'  
        import ECEAIPoweredRoboticControlSystems from './ECE/ControlSystemsAndRobotics/AIPoweredRoboticControl'
        import ECEAutonomousRobotNavigationPathPlanning from './ECE/ControlSystemsAndRobotics/AutonomousRobotNavigation'
        import ECESwarmRoboticsMultiAgentSystems from './ECE/ControlSystemsAndRobotics/SwarmRoboticsandMulti-Agent'

import CryptographyAndSecurityProjectDevelopmentCenter from './ECE/CryptographyAndSecurity'
        //sub
        import BiometricSecuritySystems from './ECE/CryptographyAndSecurity/BiometricSecuritySystems'  
        import BlockchainSecureCommunication from './ECE/CryptographyAndSecurity/BlockchainSecureCommunication'
        import CryptographicAlgorithmsEmbedded from './ECE/CryptographyAndSecurity/CryptographicAlgorithmsforEmbeddedDevices'
        import SideChannelAttackResistance from './ECE/CryptographyAndSecurity/SideChannelAttackResistance'
        import HardwareSecurityTrustedComputing from './ECE/CryptographyAndSecurity/HardwareSecurityandTrustedComputing'
        import PostQuantumCryptography from './ECE/CryptographyAndSecurity/PostQuantumCryptographyinElectronics'

import EmbeddedSystemsProjectDevelopmentCenter from './ECE/Embedded'
        //sub
        import ECEARMRISCVSystem from './ECE/Embedded/ARMAndRISCVBasedSys'
        import ECEEmbeddedSystemSecurityCryptography from './ECE/Embedded/EmbeddedSysSecurityandCrypto'
        import ECEEnergyEfficientEmbedded from './ECE/Embedded/EnergyEfficientEmbedded'
        import ECEIoTEnabledEmbeddedDevices from './ECE/Embedded/IoTEnabledEmbedded'
        import ECEMachineLearningEmbeddedPlatforms from './ECE/Embedded/MachineLearninginEmbedded'
        import ECERTOSinEmbeddedApplications from './ECE/Embedded/RTOSinEmbedded'

import IoTProjectDevelopmentCenter from './ECE/IoT'
        //sub
        import ECEEdgeFogComputingIoT from './ECE/IoT/EdgeandFogComputing'
        import ECEIndustrialIoTIndustry4 from './ECE/IoT/IndustrialIoT(IIoT)forIndustry4'
        import ECEIoTPrecisionAgriculture from './ECE/IoT/IoTbasedPrecisionAgriculture'
        import ECEIoTHealthcareMonitoring from './ECE/IoT/IoTinHealthcareMonitoring'
        import ECESecureIoTArchitectures from './ECE/IoT/SecureIoTArch'
        import ECEIoTbasedSmartHome from "./ECE/IoT/IoTbasedSmartHome" 

import SignalProcessingProjectDevelopmentCenter from './ECE/SignalProcessing'
        //sub
        import ECEAdaptiveFilteringApplications from './ECE/SignalProcessing/AdaptiveFilteringApp'  
        import ECEAIDrivenSignalEnhancement from './ECE/SignalProcessing/AIdrivenSignal'
        import ECEBiomedicalSignalProcessing from './ECE/SignalProcessing/BiomedicalSignal'
        import ECECompressiveSensingSignalProcessing from './ECE/SignalProcessing/CompressiveSensingSignal'
        import ECEDigitalImageVideoSignalProcessing from './ECE/SignalProcessing/DigitalImage'
        import ECESpeechAudioSignalProcessing from './ECE/SignalProcessing/SpeechAudioSignal'

import VLSIDesignAndEmbeddedSystemsProjectDevelopmentCenter from './ECE/VLSIandEmbedded'
      //sub
      import ECELowPowerVLSI from './ECE/VLSIandEmbedded/LowPowerVLSI'
      import ECEFPGASystemPrototyping from './ECE/VLSIandEmbedded/FPGASystem'
      import ECEEmbeddedVLSISignalProcessing from './ECE/VLSIandEmbedded/EmbeddedVLSISignalProcessing'
      import ECEHardwareSoftwareCoDesign from './ECE/VLSIandEmbedded/HardwareSoftwareCoDesign'
      import ECENanoelectronicsEmergingDevices from './ECE/VLSIandEmbedded/NanoelectronicsAndEmergingDevices'
      import ECEVLSIAI from './ECE/VLSIandEmbedded/VLSIforAI'

import WirelessSensorNetworksProjectDevelopmentCenter from './ECE/WirelessSensorNetworks'
      //sub
        import ECEEnergyEfficientRoutingWSN from './ECE/WirelessSensorNetworks/EnergyEfficientRouting'
        import ECESecureDataTransmissionWSN from './ECE/WirelessSensorNetworks/SecureDataTransmission'
        import ECEIoTWSN from './ECE/WirelessSensorNetworks/IoTIntegration'
        import ECEWSNEnvironmentalDisasterMonitoring from './ECE/WirelessSensorNetworks/EnvironmentalAndDisasterMonitoring'
        import ECEUnderwaterWirelessSensorNetworks from './ECE/WirelessSensorNetworks/UnderwaterWSN'
        import ECEAiBasedWSNOptimizationProject from './ECE/WirelessSensorNetworks/AIbasedWSNOptimization'

import SatelliteSpaceCommunicationProjectDevelopmentCenter from './ECE/SatelliteSpaceCommunication'
        //sub
        import AntennaSystemsSpaceApplications from './ECE/SatelliteandSpaceCommunication/AntennaSystemSpaceApp'
        import CubeSatNanosatellite from './ECE/SatelliteandSpaceCommunication/CubeSatNanosatellite'
        import DeepSpaceCommunication from './ECE/SatelliteandSpaceCommunication/DeepSpaceCommunication'
        import GnssProject from './ECE/SatelliteandSpaceCommunication/GlobalNavigationSatelliteSystems'
        import SatelliteCommunication5G6G from './ECE/SatelliteandSpaceCommunication/SatelliteCommunication5G6GNetworks'
        import SatelliteIoTApplications from './ECE/SatelliteandSpaceCommunication/SatelliteIoTApp' 

import AntennasProjectDevelopmentCenter from "./ECE/Antennas"
      //sub
      import AntennasIoTWearableDevices from './ECE/Antennas/IoTAndWearableDevices'
      import MimoAntennaSystemsProject from './ECE/Antennas/MIMOAntennaSystems'
      import AntennaMiniaturizationProject from './ECE/Antennas/MiniaturizationTech'
      import ReconfigurableAntennaDesignProject from './ECE/Antennas/ReconfigurableAntenna'
      import SatelliteSpaceAntennaTechProject from './ECE/Antennas/SatelliteAndSpaceAntenna'
      import SmartAntennas5G6G from './ECE/Antennas/SmartAntennas5G6G'

//EEE
import EEEPowerSystemsProjectDevelopmentCenter from './EEE/PowerSystem'
        //sub
        import EEELoadFlowAnalysis from './EEE/PowerSystem/LoadFlowAnalysis'

import EEEElectricalMachinesProjectDevelopmentCenter from './EEE/ElectricalMachines'
        //sub

import EEEPowerElectronicsProjectDevelopmentCenter from './EEE/PowerElectronics'
import EEERenewableEnergySystemsProjectDevelopmentCenter from './EEE/RenewableEnergySystems'
        //sub
        import EEESolarPhotovoltaicSystems from './EEE/RenewableEnergySystems/SolarPhotovoltaicSystems'
        import EEEWindEnergyConversionSystems from './EEE/RenewableEnergySystems/WindEnergyConversion'

import EEEEmbeddedSystemsProjectDevelopmentCenter from './EEE/EmbeddedSystems'

import EEEHighVoltageEngineeringProjectDevelopmentCenter from './EEE/HighVoltageEngineering'
import EEESmartGridMicrogridProjectDevelopmentCenter from './EEE/SmartAndMicrogrid'
import EEEControlSystemsProjectDevelopmentCenter from './EEE/ControlSystems'
import EEEIndustrialAutomationProjectDevelopmentCenter from './EEE/IndustrialAutomation/IndustrialAutomation'
import EEEElectricVehiclesProjectDevelopmentCenter from './EEE/ElectricVehicles/ElectricVehicles'
import EEEArtificialIntelligenceProjectDevelopmentCenter from './EEE/AIEEE/AIEEE'
        //sub
        import EEEAiPowerLoadForecasting from './EEE/AIEEE/PowerLoadForecasting'
        import EEEMachineLearningforfault from './EEE/AIEEE/MachineLearningforFault' 
        import EEEDeepLearninginRenewable from './EEE/AIEEE/DeepLearninginRenewable'
        import EEEAIinsmartGrids from './EEE/AIEEE/AIinSmartGrids'
        import EEENeuralNetworksforMotor from './EEE/AIEEE/NeuralNetworksforMotor' 
        import EEEAIbasedEnergyOptimization from './EEE/AIEEE/AI-basedEnergyOptimization'

import EEEIoTProjectDevelopmentCenter from './EEE/IoTEEE/IoTEEE'
        //sub
        import EEEIoTforSmartGrids from './EEE/IoTEEE/IoTforSmartGrids'
        import EEEIoTRenewableEnergy from './EEE/IoTEEE/IoTinRenewableEnergy'
        import EEEIoTPredictiveMaintenance from './EEE/IoTEEE/IoTforPredictiveMaintenance'
        import EEESmartHomeAutomation from './EEE/IoTEEE/SmartHomeAutomation'
        import EEEIoTEnabledSmartMeters from './EEE/IoTEEE/IoTenabledSmartMeters'
        import EEEIoTBasedHealthMonitoring from './EEE/IoTEEE/IoTbasedHealthMonitoring'

import EEEEnergyManagementSystemsProjectDevelopmentCenter from './EEE/EnergyManagementSystems'
        //sub 
        import EEESmartBuildingEnergy from './EEE/EnergyManagementSystems/SmartBuildingEnergy'
        import EEEDemandSideManagement from './EEE/EnergyManagementSystems/DemandSideManagement' 
        import EEEEnergyEfficiencyinIndustries from './EEE/EnergyManagementSystems/EnergyEfficiencyinIndustries'
        import EEERenewableEnergyScheduling from './EEE/EnergyManagementSystems/RenewableEnergyScheduling'
        import EEEHomeEnergyManagement from './EEE/EnergyManagementSystems/HomeEnergyManagement'
        import EEEDataAnalyticsforEnergySavings from './EEE/EnergyManagementSystems/DataAnalyticsforEnergySavings'

import ConstructionProjectManagement from './Civil/ConstructionProjectManagement'
        //sub
        import SmartConstructionTechniques from './Civil/ConstructionProjectManagement/SmartConstructionTechniques'
        import CostOptimizationinProjects from './Civil/ConstructionProjectManagement/CostOptimizationinProjects'
        import ProjectSchedulingPlanning from './Civil/ConstructionProjectManagement/ProjectSchedulingPlanning'

import EnvironmentalEngineering from './Civil/EnvironmentalEngineering'
        //sub
        import WaterTreatmentRecycling from './Civil/EnvironmentalEngineering/WaterTreatmentRecycling'
        import AirPollutionModeling from './Civil/EnvironmentalEngineering/AirPollutionModeling'
        import WasteManagementSystem from './Civil/EnvironmentalEngineering/WasteManagementSystems'

import GeotechnicalEngineering from './Civil/GeotechnicalEngineering'
        //sub
        import SoilStabilizationTechniques from './Civil/GeotechnicalEngineering/SoilStabilizationTechniques'
        import FoundationDesign from './Civil/GeotechnicalEngineering/FoundationDesign'
        import SlopeStabilityAnalysis from './Civil/GeotechnicalEngineering/SlopeStabilityAnalysis'


import RemoteSensingGIS from './Civil/RemoteSensingGIS'
        //sub
        import GISbasedUrbanPlanning from './Civil/RemoteSensingGIS/GISbasedUrbanPlanning'
        //import RemoteSensingforDisaster from './Civil/RemoteSensingGIS/RemoteSensingforDisaster'

import StructuralEngineering from './Civil/StructuralEngineering'    
        //sub 
        import EarthquakeResistantStructures from './Civil/StructuralEngineering/EarthquakeResistantStructures'
        import SteelRCCDesignOptimization from './Civil/StructuralEngineering/SteelRCCDesignOptimization'
        import TallBuildingAnalysis from './Civil/StructuralEngineering/TallBuildingAnalysis'
        import BridgeDesignMonitoring from './Civil/StructuralEngineering/BridgeDesignMonitoring'

import TransportationEngineering from './Civil/TransportationEngineering'
        //sub
        import SmartTrafficManagement from './Civil/TransportationEngineering/SmartTrafficManagement'
        import PavementAnalysisDesign from './Civil/TransportationEngineering/PavementAnalysisDesign'
        import HighwaySafetyOptimization from './Civil/TransportationEngineering/HighwaySafetyOptimization'

import METhermalEngineeringHeat from './Mechanical/ThermalEngineeringHeatTransfer'
        //sub
        import HeatExchangerDesign  from './Mechanical/ThermalEngineeringHeatTransfer/HeatExchangerDesign'
        import SolarThermalSystems from './Mechanical/ThermalEngineeringHeatTransfer/SolarThermalSystems'
        import WasteHeatRecovery from './Mechanical/ThermalEngineeringHeatTransfer/WasteHeatRecovery'
        import HVACSystemAnalysis from './Mechanical/ThermalEngineeringHeatTransfer/HVACSystemAnalysis'
        import EnergyEfficiencyinThermal from './Mechanical/ThermalEngineeringHeatTransfer/EnergyEfficiencyinThermal'

import FluidMechanicsFluidDynamics from './Mechanical/FluidMechanicsFluidDynamics'
        //sub 
        import ComputationalFluidDynamics from './Mechanical/FluidMechanicsFluidDynamics/ComputationalFluidDynamics'
        import TurbomachineryDesign from './Mechanical/FluidMechanicsFluidDynamics/TurbomachineryDesign'
        import AerodynamicsWindTunnel from './Mechanical/FluidMechanicsFluidDynamics/AerodynamicsWindTunnel'
        import PumpValveOptimization from './Mechanical/FluidMechanicsFluidDynamics/PumpValveOptimization'
        import MicrofluidicsLab from './Mechanical/FluidMechanicsFluidDynamics/MicrofluidicsLab'

import ManufacturingProductionEngineering from './Mechanical/ManufacturingProductionEngineering'
        //sub 
        import CNCMachiningOptimization from './Mechanical/ManufacturingProductionEngineering/CNCMachiningOptimization'
        import AdditiveManufacturing from './Mechanical/ManufacturingProductionEngineering/AdditiveManufacturing'
        import IndustriaAutomationRobotics from './Mechanical/ManufacturingProductionEngineering/IndustriaAutomationRobotics'
        import SmartManufacturingSystems from './Mechanical/ManufacturingProductionEngineering/SmartManufacturingSystems'
        import ToolDesignProcess from './Mechanical/ManufacturingProductionEngineering/ToolDesignProcess'

import DesignEngineerCAD from './Mechanical/DesignEngineerCAD'
        //sub
        import FiniteElementAnalysis from './Mechanical/DesignEngineerCAD/FiniteElementAnalysis'
        import CADModelingSimulation from './Mechanical/DesignEngineerCAD/CADModelingSimulation'
        import MechanismDesign from './Mechanical/DesignEngineerCAD/MechanismDesign'
        import TopologyOptimization from './Mechanical/DesignEngineerCAD/TopologyOptimization'
        import ProductLifecycleManagement from './Mechanical/DesignEngineerCAD/ProductLifecycleManagement'

import RoboticsMechatronics from './Mechanical/RoboticsMechatronics'
        import IndustrialRoboticsSystems from './Mechanical/RoboticsMechatronics/IndustrialRoboticsSystems'
        import IoTbasedMechatronics from './Mechanical/RoboticsMechatronics/IoTbasedMechatronics'
        import AutonomousVehiclesDrones from './Mechanical/RoboticsMechatronics/AutonomousVehiclesDrones'
        import RoboticManipulatorControl from './Mechanical/RoboticsMechatronics/RoboticManipulatorControl'
        import EmbeddedControlSystems from './Mechanical/RoboticsMechatronics/EmbeddedControlSystems'
 
import RenewableEnergyThermal from './Mechanical/RenewableEnergyThermal'
        //sub
        import SolarPVThermal from './Mechanical/RenewableEnergyThermal/SolarPVThermal'
        import WindTurbineDesign from './Mechanical/RenewableEnergyThermal/WindTurbineDesign'
        import BiomassBiofuelEnergy from './Mechanical/RenewableEnergyThermal/BiomassBiofuelEnergy'
        import EnergyStorageRecovery from './Mechanical/RenewableEnergyThermal/EnergyStorageRecovery'
        import SmartGridIntegration from './Mechanical/RenewableEnergyThermal/SmartGridIntegration'

import AutomotiveVehicleEngineering from './Mechanical/AutomotiveVehicleEngineering'
        //sub
        import ElectricVehicleDesign from './Mechanical/AutomotiveVehicleEngineering/ElectricVehicleDesign'
        import HybridVehiclePowertrains from './Mechanical/AutomotiveVehicleEngineering/HybridVehiclePowertrains'
        import VehicleDynamicsStability from './Mechanical/AutomotiveVehicleEngineering/VehicleDynamicsStability'
        import EnginePerformanceOptimization from './Mechanical/AutomotiveVehicleEngineering/EnginePerformanceOptimization'
        import EmissionControlFuelEfficiency from './Mechanical/AutomotiveVehicleEngineering/EmissionControlFuelEfficiency'

import MechatronicsControlSystems from './Mechanical/MechatronicsControlSystems'
        //sub
        import PIDAdvancedControl from './Mechanical/MechatronicsControlSystems/PIDAdvancedControl'
        import AutomationManufacturing from './Mechanical/MechatronicsControlSystems/AutomationManufacturing'
        import PLCSystems from './Mechanical/MechatronicsControlSystems/PLCSystems'
        import SensorIntegration from './Mechanical/MechatronicsControlSystems/SensorIntegration'
        import SmartActuatorSystems from './Mechanical/MechatronicsControlSystems/SmartActuatorSystems'

import MechanicalProperties from './Mechanical/MechanicalProperties'
        //sub
        import CompositeMaterialsAnalysis from './Mechanical/MechanicalProperties/CompositeMaterialsAnalysis'
        import AdvancedAlloyDevelopment from './Mechanical/MechanicalProperties/AdvancedAlloyDevelopment'
        import TribologyWearAnalysis from './Mechanical/MechanicalProperties/TribologyWearAnalysis'
        import NanomaterialsMechanical from './Mechanical/MechanicalProperties/NanomaterialsMechanical'
        import FatigueFractureAnalysis from './Mechanical/MechanicalProperties/FatigueFractureAnalysis'

import IndustrialProductionOptimization from './Mechanical/IndustrialProductionOptimization'
        import LeanManufacturing from './Mechanical/IndustrialProductionOptimization/LeanManufacturing'
        import SupplyChainProcess from './Mechanical/IndustrialProductionOptimization/SupplyChainProcess'
        import IndustrialSafetyErgonomics from './Mechanical/IndustrialProductionOptimization/IndustrialSafetyErgonomics'
        import SmartFactorySystems from './Mechanical/IndustrialProductionOptimization/SmartFactorySystems'
        import CostTimeOptimization from './Mechanical/IndustrialProductionOptimization/CostTimeOptimization'

import Flip from "./flip"
// import Header from './Header'
import Design from './pages/Design';
import Footer from './Footer';
import Departments from './pages/DepartmentList';

function MainPage() {
  return(
   <>
    {/* <Header/> */}
      <Routes>
     
        <Route path="/" element={<Home />} /> 
        <Route path="/d" element={<Design />} /> 
        {/* <Route path="/fact" element={<Fact />} />  */}
        <Route path="/college" element={<College />} />
        <Route path="/service" element={<Service />} />
        <Route path="/phd-admission-in-anna-university-chennai" element={<Subheading />} />
        <Route path="/annamalai-university" element={<Annamalaiuniversity />} />
        <Route path="/bharathiar-university" element={<Bharathiaruniversity />} />
        <Route path="/vit-university" element={<Vituniversity />} />
        <Route path="/mgr-institute" element={<Mgr />} />
        <Route path="/sathyabama-university" element={<Sathyabama />} />
        <Route path="/saveetha-university" element={<Saveetha />} />
        <Route path="/srm-university" element={<Srm />} />
        <Route path="/vistas" element={<Vels />} />
        <Route path="/biher" element={<Bharath />} />
        <Route path="/amrita" element={<Amrita />} />
        <Route path="/hits" element={<Hindustan  />} />
        <Route path="/alagappa-university" element={<Alagappa  />} />
        <Route path="/manonmaniam-university" element={<Manonmaniam />} />
        <Route path="/periyar-university" element={<Periyar />} />
        <Route path="/madurai-kamaraj-university" element={<MaduraiKamaraj />} />
        <Route path="/bharathidasan-university" element={<Bharathidasan />} />
        <Route path="/sastra-university" element={<Sastra />} />
        <Route path="/sri-ramakrishna-engineering" element={<SriRamakrishna />} />
        <Route path="/sns" element={<Sns />} />
        <Route path="/coimbatore-institute" element={<Cit />} />
        <Route path="/psg" element={<Psg />} />
        <Route path="/vinayaka-missions" element={<VinayakaMission />} />
        <Route path="/prist-university" element={<PonnaiyahRamajayam />} />
        <Route path="/periyar-maniammai-university" element={<PeriyarManiammai />} />
        <Route path="/st.peter’s-institute" element={<StPeters />} />
        <Route path="/sri-chandrasekharendra-saraswathi" element={<Srichandrasekharendra />} />
        <Route path="/karpagam-academy" element={<Karpagam />} />
        <Route path="/karunya" element={<Karunya />} />
        <Route path="/vel-tech-rangarajan" element={<VelTech />} />
        <Route path="/kalasalingam-academy" element={<Kalasalingam />} />
        {/* subsiderbar */}
        <Route path="/refer-guide" element={<ReferGuide />} />
        <Route path="/phd-topic-selection" element={<TopicSelection />} />
        <Route path="/phd-application" element={<PhDApplication />} />
        <Route path="/phd-proposal" element={<Proposal />} />
        <Route path="/university-selection" element={<UniversitySelection />} />
          {/* services */}
        <Route path="/service/phd-admission-guidance" element={<PhDAdmissionGuidance />} />
        <Route path="/service/research-proposal-writing" element={<Researchproposalwriting />} />
        <Route path="/service/research-paper-writing" element={<Researchpaperwriting />} />
        <Route path="/service/review-paper-writing" element={<Reviewpaperwriting />} />
        <Route path="/service/anna-university-annexture" element={<Annauniversityannexture />} />
        <Route path="/service/elsevier-conference-paper-publication-services" element={<ElsevierConference />} />
        <Route path="/service/ieee-conference-paper-publication-services" element={<IEEEconferencepaper />} />
        <Route path="/service/international-conference-paper-publication-services" element={<Internationalconferencepaper />} />
        <Route path="/service/phd-project-implementation-services-help" element={<Phdprojectimplementation />} />
        <Route path="/service/phd-research-final-viva-preparation-help-services" element={<Phdresearchfinalviva />} />
        <Route path="/service/phd-research-synopsis-writing-services-help" element={<Phdresearchsynopsis />} />
        <Route path="/service/phd-research-thesis-writing-services-help" element={<Phdresearchthesis />} />
        <Route path="/service/research-paper-publication-services-for-phd-students-from-srm-university" element={<Researchpaperforsrm />} />
        <Route path="/service/research-paper-publication-help-and-services" element={<Researchpaperpublication />} />
        <Route path="/service/research-paper-publication-help-and-services" element={<Researchpapersathyabama />} />
        <Route path="/service/science-citation-indexed-sci-paper-publication-services" element={<Sciencecitationindexed />} />
        <Route path="/service/springer-conference-paper-publication-services" element={<Springerconferencepaper />} />
        <Route path="/service/vit-university-paper-publication-services" element={<VITuniversitypaper />} />
        <Route path="/service/web-of-science-paper-publication-services" element={<Webofsciencepaper />} />

        <Route path="/research-proposal-services/how-to-write-research-proposal" element={<EngineeringResearchProposalGuide />} />
        <Route path="/research-proposal-services/trending-research-topics" element={<TrendingResearchTopics />} />
        <Route path="/research-proposal-services/research-proposal-for-funding" element={<ResearchFundingGuide />} />
        <Route path="/research-proposal-services/engineering-research-proposal-guide" element={<ProposalStepGuide />} />

        <Route path="/leading-research-services/review-article-writing" element={<ReviewArticleWriting />} />
        <Route path="/leading-research-services/sci-journal-paper-writing" element={<SCIPaperWriting />} />
        <Route path="/leading-research-services/scopus-journal-paper-writing" element={<ScopusPaperWriting />} />
        <Route path="/leading-research-services/ieee-conference-paper-writing" element={<IEEEPaperWriting />} />

        <Route path="/review-ariticle-writing/engineering-literature-guide" element={<EngineeringLiteratureGuide />} />
        <Route path="/review-ariticle-writing/medical-review-writing" element={<MedicalReviewWriting />} />
        <Route path="/review-ariticle-writing/literature-review-guide" element={<LiteratureReviewGuide />} />

        {/* main publication service */}
        <Route path="/publication-services" element={<MainPublicationServices />} />
              {/* conference-paper-publication-services */}
              <Route path="/publication-services/conference-paper-publication-services" element={<ConferencePublication />} />
              <Route path="/publication-services/conference-paper-publication-services/ieee-conference-paper-publication" element={<IEEEConference />} />
              <Route path="/publication-services/conference-paper-publication-services/elsevier-conference-paper-support" element={<ElsevierConference1 />} />
              <Route path="/publication-services/conference-paper-publication-services/national-conference-paper-support" element={<NationalConference />} />
              <Route path="/publication-services/conference-paper-publication-services/springer-conference-paper-assistance" element={<SpringerConference />} />
              <Route path="/publication-services/conference-paper-publication-services/fast-track-conference-paper-services" element={<FastTrackConference />} />
              <Route path="/publication-services/conference-paper-publication-services/ieee-review-article-support" element={<IEEEConferenceReview />} />
              
              {/* SCI Journal Publication Services */}
             <Route path="/publication-services/SCIJournal" element={<SCIJournal />} />
             <Route path="/publication-services/sci-journal-publication/SCIJournalSupport" element={<SCIJournalSupport />} />
             <Route path="/publication-services/sci-journal-publication/SCIJournalTargeting" element={<SCIJournalTargeting />} />
             <Route path="/publication-services/sci-journal-publication/SCIPublishingTimelines" element={<SCIPublishingTimelines />} />
             <Route path="/publication-services/sci-journal-publication/EthicalSCIPublication" element={<EthicalSCIPublication />} />
             <Route path="/publication-services/sci-journal-publication/OpenAccessVsSubscription" element={<OpenAccessVsSubscription />} />
             <Route path="/publication-services/sci-journal-publication/PostPublicationVisibility" element={<PostPublicationVisibility />} />

             {/* Scopus Publication Services */}
              <Route path="/publication-services/scopus-journal-publication-services" element={<ScopusJournalPublication />} />
              <Route path="/publication-services/scopus-journal-publication-services/Q1ScopusJournal" element={<Q1ScopusJournal />} />
              <Route path="/publication-services/scopus-journal-publication-services/Q2Scopus" element={<Q2Scopus />} />

              {/* Review Article Publication */}
              <Route path="/publication-services/review-article-publication" element={<ReviewArticlePublication />} />
              <Route path="/publication-services/review-article-publication/systematic-review-article-publication" element={<SystematicReviewArticlePublication />} />
              <Route path="/publication-services/review-article-publication/narrative-review-article-publication" element={<NarrativeReviewArticlePublication />} />
              <Route path="/publication-services/review-article-publication/meta-analysis-review-paper-publication" element={<MetaAnalysisReviewPaperPublication />} />
              <Route path="/publication-services/review-article-publication/scopus-indexed-review-article-publication" element={<ScopusIndexedReviewArticlePublication />} />
              <Route path="/publication-services/review-article-publication/review-article-journal-selection-assistance" element={<ReviewArticleJournalSelectionAssistance />} />
              <Route path="/publication-services/review-article-publication/sci-journal-review-article-publication" element={<SCIJournalReviewArticlePublication />} />
              
              {/* UGCCareJournalPublicationServices */}
              <Route path="/publication-services/ugc-care-journal-publication-services" element={<UGCCareJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-indexed-journal-publication-services" element={<UGCCareIndexedJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-arts-and-humanities-journal-publication-services" element={<UGCCareArtsAndHumanitiesJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-fast-track-journal-publication-services" element={<UGCCareFastTrackJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-open-access-journal-publication-services" element={<UGCCareOpenAccessJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-peer-reviewed-journal-publication-services" element={<UGCCarePeerReviewedJournalPublicationServices />} />
              <Route path="/publication-services/ugc-care-journal-publication-services/ugc-care-science-and-technology-journal-publication-services" element={<UGCCareScienceAndTechnologyJournalPublicationServices />} />

              {/* BookISBNPublicationSupport */}
              <Route path="/publication-services/book-isbn-publication-support" element={<BookISBNPublicationSupport />} />
              <Route path="/publication-services/book-isbn-publication-support/academic-book-isbn-publication-support" element={<AcademicBookISBNPublicationSupport />} />
              <Route path="/publication-services/book-isbn-publication-support/edited-volume-isbn-publication-support" element={<EditedVolumeISBNPublicationSupport />} />
              <Route path="/publication-services/book-isbn-publication-support/isbn-barcode-and-meta-data-publication-support" element={<ISBNBarcodeAndMetadataPublicationSupport />} />
              <Route path="/publication-services/book-isbn-publication-support/print-and-ebook-isbn-publication-support" element={<PrintAndEBookISBNPublicationSupport />} />
              <Route path="/publication-services/book-isbn-publication-support/self-published-book-isbn-publication-support" element={<SelfPublishedBookISBNPublicationSupport />} />

       {/* SubScopusJournalPaperWriting */}
       <Route path="scopus-journal-paper-writing/scopus-services" element={<ScopusPaperServices />} />
       <Route path="scopus-journal-paper-writing/engineering-topics-for-scopus" element={<EngineeringTopicsForScopus />} />
       <Route path="scopus-journal-paper-writing/write-free-scopus-article" element={<WriteFreeScopusArticle />} />
       <Route path="scopus-journal-paper-writing/scopus-journal-vs-conference" element={<ScopusJournalVsConference />} />
       <Route path="scopus-journal-paper-writing/scopus-paper-benefits" element={<ScopusPaperBenefits />} />
       <Route path="scopus-journal-paper-writing/scopus-paper-drafting" element={<ScopusPaperDrafting />} />
       
       {/* Subscipaper writing */}
       <Route path="sci-paper-writing/sci-writing-guide" element={<SCIWritingGuide />} />
       <Route path="sci-paper-writing/trending-engineering-topics-for-scopus" element={<TrendingEngineeringTopicsForScopus />} />
       <Route path="sci-paper-writing/novelty-in-engineering" element={<NoveltyInEngineering />} />
       <Route path="sci-paper-writing/sci-vs-scopus" element={<SCIvsScopus />} />
       <Route path="sci-paper-writing/sci-benefits" element={<SCIBenefits />} />
       <Route path="sci-paper-writing/sci-journal-selection" element={<SCIJournalSelection />} />

      {/* kerala university */}
       <Route path="kerala/phd-admission-in-university-of-kerala" element={<UniversityOfKerala />} />
       <Route path="kerala/phd-admission-amrita-vishwa-vidyapeetham-amritapuri-campus" element={<AmritaAmritapuri />} />
       <Route path="kerala/phd-admission-in-amrita-vishwa-vidyapeetham-kochi-campus" element={<AmritaKochi />} />
       <Route path="kerala/phd-admission-at-apj-abdul-kalam-technological-university" element={<KtuThiruvananthapuram />} />
       <Route path="kerala/phd-admission-at-chinmaya-vishwa-vidyapeeth" element={<ChinmayaVishwaVidypeeth />} />
       <Route path="kerala/phd-admission-at-cochin-university-of-science-and-technology" element={<CusatKochi />} />
       <Route path="kerala/phd-admission-at-indian-institute-of-technology" element={<IitPalakkad />} />
       <Route path="kerala/phd-admission-at-kannur-university" element={<KannurUniversity />} />
       <Route path="kerala/phd-admission-at-mahatma-gandhi-university" element={<MahatmaGandhiUniversity />} />
       <Route path="kerala/phd-admission-at-national-institute-of-technology" element={<NitCalicut />} />
       <Route path="kerala/phd-admission-at-university-of-calicut" element={<UnivCalicut />} />
       <Route path="kerala/phd-admission-at-central-university-of-kerala" element={<CentralUniversityKerala />} />
       <Route path="kerala/phd-admission-at-digital-university-kerala" element={<DigitalUniversityKerala />} />
       <Route path="kerala/phd-admission-at-chinmaya-vishwa-vidyapeet" element={<CvvErnakulam />} />
      {/* telangana */}
        <Route path="telangana/phd-admission-in-university-of-hyderabad" element={<UniversityOfHyderabad />} />
        <Route path="telangana/phd-admission-in-international-institute-of-information-technology-hyderabad" element={<IIITHyderabad />} />
        <Route path="telangana/phd-admission-in-indian-institute-of-technology-hyderabad" element={<IITHyderabad />} />
        <Route path="telangana/phd-admission-in-kakatiya-university" element={<KakatiyaUniversity />} />
        <Route path="telangana/phd-admission-in-jawaharlal-nehru-technological-university" element={<JNTHyderabad />} />
        <Route path="telangana/phd-admission-in-national-institute-of-technology-warangal" element={<NITWarangal />} />
        <Route path="telangana/phd-admission-in-icfai-foundation-for-higher-education-hyderabad" element={<IFHEHyderabad />} />
        <Route path="telangana/phd-admission-in-mahatma-gandhi-university-nalgonda" element={<MGUNalgonda />} />
        <Route path="telangana/phd-admission-in-satavahana-university" element={<SatavahanaUniversity />} />
        <Route path="telangana/phd-admission-in-palamuru-university" element={<PalamuruUniversity />} />
        <Route path="telangana/phd-admission-in-telangana-university" element={<TelanganaUniversity />} />
        <Route path="telangana/phd-admission-in-anurag-university" element={<AnuragUniversity />} />
        <Route path="telangana/phd-admission-in-dr-b-r-ambedkar-open-university" element={<BRAOU />} />
        <Route path="telangana/phd-admission-in-chaitanya-university" element={<ChaitanyaUniversity />} />
        <Route path="telangana/phd-admission-in-osmania-university" element={<OsmaniaUniversity />} />
        <Route path="telangana/phd-admission-in-rajiv-gandhi-university-of-knowledge-technologies" element={<RGUKTBasar />} />
        <Route path="telangana/phd-admission-in-birla-institute-of-technology-and-science" element={<BITSHyderabad />} />
        <Route path="telangana/phd-admission-in-malla-reddy-university" element={<MallaReddyUniversity />} />
        <Route path="telangana/phd-admission-in-sr-university" element={<SRUniversity />} />
        <Route path="telangana/phd-admission-in-aurora-higher-education-and-research-academy" element={<AuroraHERAHyderabad />} />
        <Route path="telangana/phd-admission-in-telangana-mahila-viswavidyalayam" element={<TelanganaMahilaViswavidyalayam />} />
        <Route path="telangana/phd-admission-in-woxsen-university" element={<WoxsenUniversity />} />
        <Route path="telangana/phd-admission-in-mahindra-university" element={<MahindraUniversity />} />
        {/* Andhra */}
        <Route path="andhra/phd-admission-in-adikavi-nannaya-university" element={<AdikaviNannaya />} />
        <Route path="andhra/phd-admission-in-gitam-visakhapatnam-campus" element={<GITAMVisakhapatnam />} />
        <Route path="andhra/phd-admission-in-iiit-sri-city" element={<IIITSriCity />} />
        <Route path="andhra/phd-admission-in-iit-tirupati" element={<IITTirupati />} />
        <Route path="andhra/phd-admission-in-jawaharlal-nehru-technological-university-jntu-kakinada" element={<JNTUKakinada />} />
        <Route path="andhra/phd-admission-in-jawaharlal-nehru-technological-university-jntua-anantapur" element={<JNTUAAnantapur />} />
        <Route path="andhra/phd-admission-in-koneru-lakshmaiah-education-foundation-university" element={<KLEFPhDAdmission />} />
        <Route path="andhra/phd-admission-in-krishna-university" element={<KrishnaUniversity />} />
        <Route path="andhra/phd-admission-in-rgukt-nuzvid" element={<RGUKTNuzvid />} />
        <Route path="andhra/phd-admission-in-sri-krishnadevaraya-university" element={<SriKrishnadevarayaUniversity />} />
        <Route path="andhra/phd-admission-in-srm-university" element={<SRMUniversityGuntur />} />
        <Route path="andhra/phd-admission-in-central-university" element={<CentralUniversityAP />} />
        <Route path="andhra/phd-admission-in-central-tribal-university" element={<CentralTribalUniversityAP />} />
        <Route path="andhra/phd-admission-in-national-institute-of-technology" element={<NITAndhraPradesh />} />
        <Route path="andhra/phd-admission-at-sri-sathya-sai-institute-of-higher-learning" element={<SSSIHLDoctoral />} />
        <Route path="andhra/phd-admission-at-vignan's-foundation-for-science-technology-and-research" element={<VignanUniversityPhD />} />
        <Route path="andhra/phd-admission-at-siddhartha-academy-of-higher-education" element={<SiddharthaPhD />} />
        <Route path="andhra/phd-admission-at-mohan-babu-university" element={<MohanBabuUniversityPhD />} />
        <Route path="andhra/phd-admission-at-best-innovation-university" element={<BestInnovationUniversityPhD />} />
        <Route path="andhra/phd-admission-at-saveetha-amaravati-university" element={<SaveethaAmaravatiUniversityPhD />} />

        {/* depts */}
        {/* cs */}
<Route path="department/static-web-application" element={<StaticWebApplication />} />
<Route path="department/dynamic-web-applications" element={<DynamicWebApplications />} />
<Route path="department/mobile-app" element={<MobileApp />} />
<Route path="department/animations-project" element={<AnimationsProject />} />
<Route path="department/ai-project" element={<AIProject />} />
<Route path="department/data-science" element={<DataScience />} />
<Route path="department/big-data" element={<BigData />} />
<Route path="department/blockchain" element={<Blockchain />} /> 
<Route path="department/devops" element={<DevOps />} />
<Route path="department/networking" element={<Networking />} />
<Route path="department/image-processing" element={<ImageProcessing />} />
<Route path="department/nlp" element={<NLP />} />
<Route path="department/cloud-computing" element={<CloudComputing />} />
<Route path="department/cybersecurity" element={<Cybersecurity />} />
          
    {/* ECE */}
<Route path="department/biomedical-electronics" element={<BiomedicalElectronicsProjectDevelopmentCenter />} />
                <Route path="/1-1" element={<AIBiomedicalDiagnosticsProject />} />
                <Route path="/1-2" element={<BiomedicalSignalAcquisitionProject />} />
                <Route path="/1-3" element={<BrainComputerInterfaceProject />} />
                <Route path="/1-4" element={<IoTEnabledHealthcareDevicesProject />} />
                <Route path="/1-5" element={<ImplantableMedicalElectronicsProject />} />  
                <Route path="/1-6" element={<WearableBiomedicalDevicesProject />} />

<Route path="department/communication-systems" element={<CommunicationSystemsProjectDevelopmentCenter />} />
                <Route path="2-1" element={<ECE5G6GWirelessCommunication />} />
                <Route path="2-2" element={<ECEErrorControlCoding />} />
                <Route path="2-3" element={<ECEMIMOMassiveMIMOAntennaTechniques />} />
                <Route path="2-4" element={<ECEOpticalFiberCommunication />} />
                <Route path="2-5" element={<ECESoftwareDefinedRadio />} />
                <Route path="2-6" element={<ECECognitiveRadioNetworks />} /> 

<Route path="department/control-systems-robotics" element={<ControlSystemsAndRoboticsProjectDevelopmentCenter />} />
               <Route path="3-1" element={<ECEAdaptiveNonlinearControlSystems />} />
               <Route path="3-2" element={<ECEAIPoweredRoboticControlSystems />} />
               <Route path="3-3" element={<ECEAutonomousRobotNavigationPathPlanning />} />
               <Route path="3-4" element={<ECESwarmRoboticsMultiAgentSystems />} />
               <Route path="3-5" element={<ECEControlCyberPhysicalSystems />} />
               <Route path="3-6" element={<ECERoboticVisionSensorFusion />} />

<Route path="department/cryptography-security" element={<CryptographyAndSecurityProjectDevelopmentCenter />} />
                <Route path="4-1" element={<BiometricSecuritySystems />} />
                <Route path="4-2" element={<BlockchainSecureCommunication />} />
                <Route path="4-3" element={<CryptographicAlgorithmsEmbedded />} />
                <Route path="4-4" element={<SideChannelAttackResistance />} />
                <Route path="4-5" element={<HardwareSecurityTrustedComputing />} />
                <Route path="4-6" element={<PostQuantumCryptography />} />

<Route path="department/embedded-systems" element={<EmbeddedSystemsProjectDevelopmentCenter />} />
                <Route path="5-1" element={<ECEARMRISCVSystem />} />
                <Route path="5-2" element={<ECEEmbeddedSystemSecurityCryptography />} />
                <Route path="5-3" element={<ECEEnergyEfficientEmbedded />} />
                <Route path="5-4" element={<ECEIoTEnabledEmbeddedDevices />} />
                <Route path="5-5" element={<ECEMachineLearningEmbeddedPlatforms />} />
                <Route path="5-6" element={<ECERTOSinEmbeddedApplications />} />

<Route path="department/iot-projects" element={<IoTProjectDevelopmentCenter />} />
                <Route path="6-1" element={<ECEEdgeFogComputingIoT />} />
                <Route path="6-2" element={<ECEIndustrialIoTIndustry4 />} />
                <Route path="6-3" element={<ECEIoTPrecisionAgriculture />} />
                <Route path="6-4" element={<ECEIoTHealthcareMonitoring />} />
                <Route path="6-5" element={<ECESecureIoTArchitectures />} />
                <Route path="6-6" element={<ECEIoTbasedSmartHome />} />

<Route path="department/signal-processing" element={<SignalProcessingProjectDevelopmentCenter />} />
                 <Route path="7-1" element={<ECEAdaptiveFilteringApplications />} />
                 <Route path="7-2" element={<ECEAIDrivenSignalEnhancement />} />
                 <Route path="7-3" element={<ECEBiomedicalSignalProcessing />} />
                 <Route path="7-4" element={<ECECompressiveSensingSignalProcessing />} />
                 <Route path="7-5" element={<ECEDigitalImageVideoSignalProcessing />} />
                 <Route path="7-6" element={<ECESpeechAudioSignalProcessing />} />

<Route path="department/vlsi-design" element={<VLSIDesignAndEmbeddedSystemsProjectDevelopmentCenter />} />
                 <Route path="8-1" element={<ECELowPowerVLSI />} />
                 <Route path="8-2" element={<ECEFPGASystemPrototyping />} />
                 <Route path="8-3" element={<ECEEmbeddedVLSISignalProcessing />} />
                 <Route path="8-4" element={<ECEHardwareSoftwareCoDesign />} />
                 <Route path="8-5" element={<ECENanoelectronicsEmergingDevices />} />
                 <Route path="8-6" element={<ECEVLSIAI />} />

<Route path="department/wireless-sensor-networks" element={<WirelessSensorNetworksProjectDevelopmentCenter />} />
                <Route path="9-1" element={<ECEEnergyEfficientRoutingWSN />} />
                <Route path="9-2" element={<ECESecureDataTransmissionWSN />} />
                <Route path="9-3" element={<ECEIoTWSN />} />
                <Route path="9-4" element={<ECEWSNEnvironmentalDisasterMonitoring />} />
                <Route path="9-5" element={<ECEUnderwaterWirelessSensorNetworks />} />
                <Route path="9-6" element={<ECEAiBasedWSNOptimizationProject />} />

<Route path="department/satellite-communication" element={<SatelliteSpaceCommunicationProjectDevelopmentCenter />} />
               <Route path="10-1" element={<AntennaSystemsSpaceApplications />} />
               <Route path="10-2" element={<CubeSatNanosatellite />} />
               <Route path="10-3" element={<DeepSpaceCommunication />} />
               <Route path="10-4" element={<GnssProject />} />
               <Route path="10-5" element={<SatelliteCommunication5G6G />} />
               <Route path="10-6" element={<SatelliteIoTApplications />} />

<Route path="department/antenna-design" element={<AntennasProjectDevelopmentCenter />} />
              <Route path="11-1" element={<AntennasIoTWearableDevices />} />
              <Route path="11-2" element={<MimoAntennaSystemsProject />} />
              <Route path="11-3" element={<AntennaMiniaturizationProject />} />
              <Route path="11-4" element={<ReconfigurableAntennaDesignProject />} />
              <Route path="11-5" element={<SatelliteSpaceAntennaTechProject />} />
              <Route path="11-6" element={<SmartAntennas5G6G />} />
        
        {/*EEE  */}
<Route path="department/power-systems" element={<EEEPowerSystemsProjectDevelopmentCenter />} />
                 <Route path="eee1-1-1" element={<EEELoadFlowAnalysis />} />

<Route path="department/electrical-machines" element={<EEEElectricalMachinesProjectDevelopmentCenter />} />
<Route path="department/power-electronics" element={<EEEPowerElectronicsProjectDevelopmentCenter />} />
<Route path="department/renewable-energy-systems" element={<EEERenewableEnergySystemsProjectDevelopmentCenter />} />
                 <Route path="eee4-4-1" element={<EEESolarPhotovoltaicSystems />} />
                 <Route path="eee4-4-2" element={<EEEWindEnergyConversionSystems   />} />

<Route path="department/embedded-systems-electrical" element={<EEEEmbeddedSystemsProjectDevelopmentCenter />} />
<Route path="department/high-voltage-engineering" element={<EEEHighVoltageEngineeringProjectDevelopmentCenter />} />
<Route path="department/smart-grid-microgrid" element={<EEESmartGridMicrogridProjectDevelopmentCenter />} />
<Route path="department/control-systems-electrical" element={<EEEControlSystemsProjectDevelopmentCenter />} />
<Route path="department/industrial-automation" element={<EEEIndustrialAutomationProjectDevelopmentCenter />} />
<Route path="department/electric-vehicles" element={<EEEElectricVehiclesProjectDevelopmentCenter />} />
<Route path="department/ai-electrical-engineering" element={<EEEArtificialIntelligenceProjectDevelopmentCenter />} />
                <Route path="eee11-1" element={<EEEAiPowerLoadForecasting />} />
                <Route path="eee11-2" element={<EEEMachineLearningforfault />} />
                <Route path="eee11-3" element={<EEEDeepLearninginRenewable />} />
                <Route path="eee11-4" element={<EEEAIinsmartGrids />} />
                <Route path="eee11-5" element={<EEENeuralNetworksforMotor />} />
                <Route path="eee11-6" element={<EEEAIbasedEnergyOptimization />} />      

<Route path="department/iot-electrical-systems" element={<EEEIoTProjectDevelopmentCenter />} />
                <Route path="eee12-1" element={<EEEIoTforSmartGrids />} />    
                <Route path="eee12-2" element={<EEEIoTRenewableEnergy />} />
                <Route path="eee12-3" element={<EEEIoTPredictiveMaintenance />} />
                <Route path="eee12-4" element={<EEESmartHomeAutomation />} />
                <Route path="eee12-5" element={<EEEIoTEnabledSmartMeters />} />
                <Route path="eee12-6" element={<EEEIoTBasedHealthMonitoring />} />

<Route path="department/energy-management-systems" element={<EEEEnergyManagementSystemsProjectDevelopmentCenter />} />
                <Route path="eee13-1" element={<EEESmartBuildingEnergy />} />   
                <Route path="eee13-2" element={<EEEDemandSideManagement />} /> 
                <Route path="eee13-3" element={<EEEEnergyEfficiencyinIndustries />} />
                <Route path="eee13-4" element={<EEERenewableEnergyScheduling />} />
                <Route path="eee13-5" element={<EEEHomeEnergyManagement />} />
                <Route path="eee13-6" element={<EEEDataAnalyticsforEnergySavings />} />
     {/* Civil */}
<Route path="department/construction-project-management" element={<ConstructionProjectManagement />} />
                <Route path="civil-1-1" element={<SmartConstructionTechniques />} />
                <Route path="civil-1-2" element={<CostOptimizationinProjects />} />
                <Route path="civil-1-3" element={<ProjectSchedulingPlanning />} />

<Route path="department/environmental-engineering" element={<EnvironmentalEngineering />} />
                <Route path="civil-2-1" element={<WaterTreatmentRecycling />} />
                <Route path="civil-2-2" element={<AirPollutionModeling />} />
                <Route path="civil-2-3" element={<WasteManagementSystem />} />

<Route path="department/geotechnical-engineering" element={<GeotechnicalEngineering />} />
                <Route path="civil-3-1" element={<SoilStabilizationTechniques />} />
                <Route path="civil-3-2" element={<FoundationDesign />} />
                <Route path="civil-3-3" element={<SlopeStabilityAnalysis />} />

<Route path="department/remote-sensing-gis" element={<RemoteSensingGIS />} />
                <Route path="civil-4-1" element={<GISbasedUrbanPlanning />} />
                {/* <Route path="civil-4-2" element={<RemoteSensingforDisaster />} /> */}

<Route path="department/structural-engineering" element={<StructuralEngineering />} />
                <Route path="civil-5-1" element={<EarthquakeResistantStructures />} />
                <Route path="civil-5-2" element={<SteelRCCDesignOptimization />} />
                <Route path="civil-5-3" element={<TallBuildingAnalysis />} /> 
                <Route path="civil-5-4" element={<BridgeDesignMonitoring />} />

<Route path="department/transportation-engineering" element={<TransportationEngineering />} />
                <Route path="civil-6-1" element={<SmartTrafficManagement />} />
                <Route path="civil-6-2" element={<PavementAnalysisDesign />} />
                <Route path="civil-6-3" element={<HighwaySafetyOptimization />} /> 

        {/* Mech */}
<Route path="department/thermal-engineering" element={<METhermalEngineeringHeat />} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                <Route path="mech-1-1" element={<HeatExchangerDesign />} />
                <Route path="mech-1-2" element={<SolarThermalSystems />} />
                <Route path="mech-1-3" element={<WasteHeatRecovery />} />
                <Route path="mech-1-4" element={<HVACSystemAnalysis />} />
                <Route path="mech-1-5" element={<EnergyEfficiencyinThermal />} />

<Route path="department/fluid-mechanics-dynamics" element={<FluidMechanicsFluidDynamics />} />
                <Route path="mech-2-1" element={<ComputationalFluidDynamics />} />
                <Route path="mech-2-2" element={<TurbomachineryDesign />} />
                <Route path="mech-2-3" element={<AerodynamicsWindTunnel />} />
                <Route path="mech-2-4" element={<PumpValveOptimization />} />
                <Route path="mech-2-5" element={<MicrofluidicsLab />} /> 

<Route path="department/manufacturing-production" element={<ManufacturingProductionEngineering />} />
                <Route path="mech-3-1" element={<CNCMachiningOptimization />} />
                <Route path="mech-3-2" element={<AdditiveManufacturing />} />
                <Route path="mech-3-3" element={<IndustriaAutomationRobotics />} />
                <Route path="mech-3-4" element={<SmartManufacturingSystems />} />
                <Route path="mech-3-5" element={<ToolDesignProcess />} />

<Route path="department/design-engineering-cad" element={<DesignEngineerCAD />} />
                <Route path="mech-4-1" element={<FiniteElementAnalysis />} />
                <Route path="mech-4-2" element={<CADModelingSimulation />} />
                <Route path="mech-4-3" element={<MechanismDesign />} />
                <Route path="mech-4-4" element={<TopologyOptimization />} />
                <Route path="mech-4-5" element={<ProductLifecycleManagement />} />

<Route path="department/robotics-mechatronics" element={<RoboticsMechatronics />} />
                <Route path="mech-5-1" element={<IndustrialRoboticsSystems />} />
                <Route path="mech-5-2" element={<IoTbasedMechatronics />} />
                <Route path="mech-5-3" element={<AutonomousVehiclesDrones />} />
                <Route path="mech-5-4" element={<RoboticManipulatorControl />} />
                <Route path="mech-5-5" element={<EmbeddedControlSystems />} />

<Route path="department/renewable-thermal-energy" element={<RenewableEnergyThermal />} />
                <Route path="mech-6-1" element={<SolarPVThermal />} />
                <Route path="mech-6-2" element={<WindTurbineDesign />} />
                <Route path="mech-6-3" element={<BiomassBiofuelEnergy />} />
                <Route path="mech-6-4" element={<EnergyStorageRecovery />} />
                <Route path="mech-6-5" element={<SmartGridIntegration />} />

<Route path="department/automotive-vehicle-engineering" element={<AutomotiveVehicleEngineering />} />
                <Route path="mech-7-1" element={<ElectricVehicleDesign />} />
                <Route path="mech-7-2" element={<HybridVehiclePowertrains />} />
                <Route path="mech-7-3" element={<VehicleDynamicsStability />} />
                <Route path="mech-7-4" element={<EnginePerformanceOptimization />} />
                <Route path="mech-7-5" element={<EmissionControlFuelEfficiency />} />

<Route path="department/mechatronics-control-systems" element={<MechatronicsControlSystems />} />
                <Route path="mech-8-1" element={<PIDAdvancedControl />} />
                <Route path="mech-8-2" element={<AutomationManufacturing />} />
                <Route path="mech-8-3" element={<PLCSystems />} />
                <Route path="mech-8-4" element={<SensorIntegration />} />
                <Route path="mech-8-5" element={<SmartActuatorSystems />} />

<Route path="department/mechanical-properties-materials" element={<MechanicalProperties />} />
                <Route path="mech-9-1" element={<CompositeMaterialsAnalysis />} />
                <Route path="mech-9-2" element={<AdvancedAlloyDevelopment />} />
                <Route path="mech-9-3" element={<TribologyWearAnalysis />} />
                <Route path="mech-9-4" element={<NanomaterialsMechanical />} />
                <Route path="mech-9-5" element={<FatigueFractureAnalysis />} />

<Route path="department/industrial-production-optimization" element={<IndustrialProductionOptimization />} />
                <Route path="mech-10-1" element={<LeanManufacturing />} />
                <Route path="mech-10-2" element={<SupplyChainProcess />} />
                <Route path="mech-10-3" element={<IndustrialSafetyErgonomics />} />
                <Route path="mech-10-4" element={<SmartFactorySystems />} />
                <Route path="mech-10-5" element={<CostTimeOptimization />} />

        <Route path="f" element={<Flip/>} /> 
        <Route path="department" element={<Departments/>} /> 
                
      </Routes>
      <Footer />
   
  </>
  );
}

export default MainPage;
