import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
  Cell,
} from "recharts";



interface BarChartTypes {
  name: string;
  value: number;
  color: string;
}
function BarChartComp({
  BarChartData,
  barChartTitle,
}: {
  BarChartData: BarChartTypes[];
  barChartTitle: string;
}) {
  return (
    <Card className="bg-gray-50 py-4 gap-2 border-0 shadow-none">
      <CardHeader className="px-8">
        <CardTitle className="font-medium text-sm">{barChartTitle}</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={BarChartData}
            margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
            barSize={26}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fontWeight: "600", fill: "#B8B8B8" }}
            />
            <YAxis
              domain={[0, 30000]}
              ticks={[0, 10000, 20000, 30000]}
              tickFormatter={(value) =>
                value === 0 ? "0" : `${value / 1000}K`
              }
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fontWeight: "600", fill: "#B8B8B8" }}
            />
            <Bar dataKey="value" radius={[8, 8, 8, 8]}>
              {BarChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default BarChartComp;
