import ApprovalsSection from "@/components/Home/ApprovalsSection/page";
import CampusLife from "@/components/Home/CampusLife/page";
import ExploreDepartments from "@/components/Home/ExploreDepartments/page";
import RecruitersSection from "@/components/Home/RecruitersSection/page";
import YearsExperience from "@/components/Home/YearsExperiance/page";
import StudentSays from "@/components/Home/StudentSays/page";
import LocationMap from "@/components/Home/LocationMaps/page";
import WhyChooseTempl from "@/components/Home/WhyChooseTempl/page";
import WelcomeTempl from "@/components/Home/WelcomeTempl/page";
import ExploreCourses from "@/components/Home/ExploreCourses/page";
import PlacementSection from "@/components/Home/PlacementSection/page";
import GreenCampus from "@/components/Home/GreenCampus/page";
import WhatWeOffer from "@/components/Home/WhatWeOffer/page";
import GlobalSuccessBanner from "@/components/Home/GlobalSuccessBanner/page";
import HeroBanner from "@/components/Home/HeroBanner/page";
import ScholarshipSection from "@/components/Home/ScholarshipSection/page";
import DiwaliBanner from "@/components/Home/DiwaliBanner/page";
import AdmissionBanner from "@/components/Home/AdmissionBanner/page";
import BeginJourney from "@/components/Home/BeginJourney/page";
export default function Home() {
  return (
    <div>
      <HeroBanner />
      <DiwaliBanner/>
      <WelcomeTempl/>
      <WhatWeOffer/>
      <AdmissionBanner/>
   <ApprovalsSection />
   <GlobalSuccessBanner />
   <CampusLife />
   <ExploreDepartments />
   <YearsExperience />
   <ExploreCourses/>
   <PlacementSection/>
   <GreenCampus/>
   <StudentSays />
   <WhyChooseTempl/>
  <RecruitersSection />
  <BeginJourney/>
   <LocationMap />
    </div>
  );
}
