import { Card, CardContent } from "@/components/ui/card";

const trafficData = [
  { label: "Google", levels: [true, false, false] },
  { label: "YouTube", levels: [true, true, false] },
  { label: "Instagram", levels: [true, false, false] },
  { label: "Pinterest", levels: [true, true, false] },
  { label: "Facebook", levels: [true, false, false] },
  { label: "Twitter", levels: [true, true, false] },
];

export default function TrafficByWebsite() {
  return (
    <Card className="h-full flex flex-col justify-between py-4 gap-2  border-0 shadow-none">
      <CardContent>
        <h3 className="text-sm font-medium pb-4 text-black">
          Traffic by Website
        </h3>
        <ul className="space-y-4">
          {trafficData.map(({ label, levels }) => (
            <li
              key={label}
              className="grid grid-cols-2 items-center text-xs font-medium "
            >
              <span>{label}</span>
              <div className="flex space-x-1 ">
                {levels.map((active, i) => (
                  <div
                    key={i}
                    className={`h-0.5 ${
                      label === "Facebook"
                        ? "w-2"
                        : label === "Google"
                        ? "w-3"
                        : label === "Instagram"
                        ? "w-4"
                        : label === "Twitter"
                        ? "w-5"
                        : label === "YouTube"
                        ? "w-6"
                        : label === "Pinterest"
                        ? "w-7"
                        : ""
                    } rounded-full ${active ? "bg-black" : "bg-gray-200"}`}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
