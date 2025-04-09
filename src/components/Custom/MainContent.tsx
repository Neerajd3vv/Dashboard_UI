import {  ChevronDown } from "lucide-react";
import StatsCard from "./StatsCard";
import PieChartComp from "./PieChart";
import BarChartComp from "./BarChart";
import LineGraph from "./LineGraph";
import TrafficByWebsite from "./TrafficByWeb";

const locationData = [
  { name: "United States", value: 52.1, color: "#1f2937" },
  { name: "Canada", value: 22.8, color: "#93c5fd" },
  { name: "Mexico", value: 13.9, color: "#6ee7b7" },
  { name: "Other", value: 11.2, color: "#dbeafe" },
];
const monthlyData = [
  { name: "Jan", thisYear: 8000, lastYear: 5000 },
  { name: "Feb", thisYear: 7000, lastYear: 4000 },
  { name: "Mar", thisYear: 1000, lastYear: 20000 },
  { name: "Apr", thisYear: 20000, lastYear: 14000 },
  { name: "May", thisYear: 10000, lastYear: 19000 },
  { name: "Jun", thisYear: 22000, lastYear: 18000 },
  { name: "Jul", thisYear: 20000, lastYear: 3000 },
];

const deviceData = [
  { name: "Linux", value: 17000, color: "#818cf8" },
  { name: "Mac", value: 30000, color: "#6ee7b7" },
  { name: "iOS", value: 21000, color: "#000000" },
  { name: "Windows", value: 33000, color: "#93c5fd" },
  { name: "Android", value: 12000, color: "#bfdbfe" },
  { name: "Other", value: 25000, color: "#86efac" },
];

function MainContent() {
  return (
    <div className="p-6 ">
      <div className="flex justify-between  items-center pb-3">
        <h1 className="font-medium text-sm">Overview</h1>
        <div className=" flex items-center space-x-1 ">
          <p className="font-semibold  text-xs text-gray-700">Today</p>
          <span>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
          <StatsCard
            title="Views"
            value="7,265"
            change="+11.01%"
            isPositive={true}
          />
          <StatsCard
            title="Visits"
            value="3,671"
            change="-0.03%"
            isPositive={false}
          />
          <StatsCard
            title="New Users"
            value="156"
            change="+15.03%"
            isPositive={true}
          />
          <StatsCard
            title="Active Users"
            value="2318"
            change="+6.08%"
            isPositive={true}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-8 gap-6">
          <div className="xl:col-span-6">
            <LineGraph lineGraphData={monthlyData} />
          </div>
          <div className="xl:col-span-2">
            <TrafficByWebsite />
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-10">
          <BarChartComp
            BarChartData={deviceData}
            barChartTitle="Traffic by Device"
          />
          <PieChartComp
            chartTitle="Traffic by Location"
            chartData={locationData}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
