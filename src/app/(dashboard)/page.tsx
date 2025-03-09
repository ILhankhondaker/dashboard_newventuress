<<<<<<< HEAD
import AnalyticsChart from "./_components/analytics-chart";
import DashboardOverview from "./_components/dashBoardOverview";
import MostSoldItems from "./_components/MostSoldItems";
import ProfileCompletion from "./_components/ProfileCompletion";
import GeoChart from "./_components/TopUserCountries";

const Page = () => {
  return (
    <div className="w-full px-5 bg-[#eaf0ea]">
=======
import OngoingContainer from "@/components/shared/OngoinOder/OngoinContainer";
import ReadyAprovalContainer from "@/components/shared/ReadyFOrAproval.tsx/ReadyAprovalContainer";
import TopVendorContainer from "@/components/shared/TopVendors/TopVendorContainer";
import dynamic from "next/dynamic";
import DashboardOverview from "./_components/dashBoardOverview";
import MostSoldItems from "./_components/MostSoldItems";
import ProfileCompletion from "./_components/ProfileCompletion";
const GeoChart = dynamic(() => import("./_components/TopUserCountries"), {
  ssr: false,
});
const AnalyticsChart = dynamic(() => import("./_components/analytics-chart"), {
  ssr: false,
});

const Dashboard = async () => {
  return (
    <div className="w-full">
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
      {/* Profile Completion Section */}
      <ProfileCompletion />

      {/* Dashboard Overview Section */}
      <section>
<<<<<<< HEAD
        <h1 className="text-[#0057A8] text-[22px] font-semibold mb-[20px]">
          Dashboard Overview
=======
        <h1 className="text-gradient text-[22px] font-semibold mb-[20px]">
          Overview
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
        </h1>
        <DashboardOverview />
      </section>

      {/* Main Content Grid */}
<<<<<<< HEAD
      <div className="w-full mx-auto grid grid-cols-6 gap-8 my-[30px]">
        {/* Geo Chart Component */}
        <GeoChart />
        
        {/* Right Column for Most Sold Items and Analytics */}
        <div className="w-full col-span-2">
          <MostSoldItems />
          <AnalyticsChart />
        </div>
      </div>

    
=======
      <div className="w-full mx-auto grid grid-cols-6 gap-4 2xl:gap-8 my-[30px] mt-10">
        {/* Geo Chart Component */}
        <GeoChart />
        <div className="col-span-2">
          <MostSoldItems />
          <AnalyticsChart />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[49%]">
          <TopVendorContainer />
        </div>
        <div className="w-[49%]">
          <ReadyAprovalContainer />
        </div>
      </div>
      <div className="mt-10">
        <OngoingContainer />
      </div>
>>>>>>> a6b49dc8179fe34469013f606c964b3e4b271a6e
    </div>
  );
};

export default Page;
