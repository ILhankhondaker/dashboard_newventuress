import AnalyticsChart from "./_components/analytics-chart";

import DashboardOverview from "./_components/dashBoardOverview";
import OrderRangeChart from "./_components/order-range-chart";
import PaymentVolumeChart from "./_components/payment-volume-chart";
import ProfileCompletion from "./_components/ProfileCompletion";

const Dashboard = () => {
  return (
    <div className="w-full bg-[#E6EEF6] ">

      <ProfileCompletion />

      <>
        <h1 className="text-[#0057A8] text-[22px] font-semibold mb-[20px]">Dashboard Overview</h1>
        <DashboardOverview />

      </>

      <div className="  w-full  mx-auto grid grid-cols-6 gap-8 my-[30px] ">
        <PaymentVolumeChart />
        <AnalyticsChart />
      </div>

      <div className="w-full   mx-auto mb-[30px]">
        <OrderRangeChart />
      </div>

    </div>
  )

};

export default Dashboard;
