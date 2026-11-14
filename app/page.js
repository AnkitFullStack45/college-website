import ApprovalsSection from "@/components/Home/ApprovalsSection/page";
import CampusLife from "@/components/Home/CampusLife/page";
import ExploreDepartments from "@/components/Home/ExploreDepartments/page";
import RecruitersSection from "@/components/Home/RecruitersSection/page";
import YearsExperience from "@/components/Home/YearsExperiance/page";
import StudentSays from "@/components/Home/StudentSays/page";
export default function Home() {
  return (
    <div>
   <ApprovalsSection />
   <RecruitersSection />
   <CampusLife />
   <ExploreDepartments />
   <YearsExperience />
   <StudentSays />
    </div>
  );
}
