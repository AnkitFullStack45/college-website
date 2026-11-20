import AdmissionBanner from "@/components/Home/AdmissionBanner/AdmissionBanner";
import ApprovalsSection from "@/components/Home/ApprovalsSection/ApprovalsSection";
import BeginJourney from "@/components/Home/BeginJourney/BeginJourney";
import CampusLife from "@/components/Home/CampusLife/CampusLife";
import DiwaliBanner from "@/components/Home/DiwaliBanner/DiwaliBanner";
import ExploreCourses from "@/components/Home/ExploreCourses/ExploreCourses";
import ExploreDepartments from "@/components/Home/ExploreDepartments/ExploreDepartments";
import GlobalSuccessBanner from "@/components/Home/GlobalSuccessBanner/GlobalSuccessBanner";
import GreenCampus from "@/components/Home/GreenCampus/GreenCampus";
import HeroBanner from "@/components/Home/HeroBanner/HeroBanner";
import LocationMap from "@/components/Home/LocationMaps/LocationMaps";
import PlacementSection from "@/components/Home/PlacementSection/PlacementSection";
import RecruitersSection from "@/components/Home/RecruitersSection/RecruitersSection";
import StudentsSay from "@/components/Home/StudentSays/StudentSays";
import WelcomeTempl from "@/components/Home/WelcomeTempl/WelcomeTempl";
import WhatWeOffer from "@/components/Home/WhatWeOffer/WhatWeOffer";
import WhyChooseTempl from "@/components/Home/WhyChooseTempl/WhyChooseTempl";
import YearsExperience from "@/components/Home/YearsExperiance/YearsExperiance";

export default function Home() {
  return (
    <div>
    <HeroBanner/>
    <DiwaliBanner/>
    <WelcomeTempl/>
    <WhatWeOffer/>
    <AdmissionBanner/>
    <ApprovalsSection/>
    <GlobalSuccessBanner/>
    <CampusLife/>
    <ExploreDepartments/>
    <YearsExperience/>
    <ExploreCourses/>
    <PlacementSection/>
    <GreenCampus/>
    <StudentsSay/>
    <WhyChooseTempl/>
    <RecruitersSection/>
    <BeginJourney/>
    <LocationMap/>
    </div>
  );
}
