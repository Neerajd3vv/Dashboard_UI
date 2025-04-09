import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


interface ChartDataProps {
    name: string;
    value: number;
    color: string;
}

function PieChartComp({ chartTitle, chartData }:{chartTitle:string , chartData:ChartDataProps[]}) {
  return (
    <Card className="bg-gray-50 py-4 gap-2 border-0 shadow-none">
      <CardHeader>
        <CardTitle className="font-medium text-sm" >
          {chartTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex items-center justify-between ">
          <ResponsiveContainer width="50%" height={200}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={36}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-4">
            {chartData.map((item) => (
              <div
                key={item.name}
                className="flex space-x-10 items-center gap-2"
              >
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs font-medium">{item.name}</span>
                </div>
                <span className="ml-auto text-xs font-medium">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default PieChartComp;
