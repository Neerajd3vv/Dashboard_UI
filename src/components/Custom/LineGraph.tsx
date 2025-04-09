import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tabs = ["Total Users", "Total Projects", "Operating Status"];

interface LineGraphProps {
  name: string;
  thisYear: number;
  lastYear: number;
}

function LineGraph({ lineGraphData }: { lineGraphData: LineGraphProps[] }) {
  return (
    <Card className="bg-gray-50 py-4 gap-2 border-0 shadow-none">
      <CardHeader>
        <CardTitle className="font-medium text-sm pb-4">
          <div className="flex items-center justify-start space-x-8 px-2 ">
            <div className="flex space-x-6 flex-nowrap font-medium text-sm">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${
                    index === 0 ? "text-black" : "text-zinc-400 "
                  } font-medium`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="h-4  bg-zinc-300" style={{ width: "1px" }} />

            <div className="flex items-center  gap-4 ">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <span className="text-sm">This year</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#8884d8]"></div>
                <span className="text-sm text-muted-foreground">Last year</span>
              </div>
            </div>
          </div>
        </CardTitle>
        <CardContent className="px-0">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineGraphData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: "600", fill: "#B8B8B8	" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: "600", fill: "#B8B8B8	" }}
                  domain={[0, 30000]}
                  tickFormatter={(value) =>
                    value === 0 ? "0" : `${value / 1000}K`
                  }
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="thisYear"
                  stroke="#000"
                  strokeWidth={1}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="lastYear"
                  stroke="#8884d8"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}

export default LineGraph;
