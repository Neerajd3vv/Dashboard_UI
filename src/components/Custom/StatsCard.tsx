import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}
function StatsCard({ title, value, change, isPositive }: StatsCardProps) {
  return (
    <Card className="w-full  bg-indigo-50 border-0 ">
      <CardContent className=" space-y-1 flex flex-col justify-center ">
        <p className="text-xs font-medium">{title}</p>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">{value}</div>
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <span className="text-[#36454F] text-xs font-medium">{change}</span>
            {isPositive ? (
              <ArrowUpRight className="h-4 w-4 text-[#36454F]" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-[#36454F]" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
