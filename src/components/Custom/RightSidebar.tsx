import { Bug, UserRound, Radio } from "lucide-react";

const notification = [
  {
    id: 1,
    icon: Bug,
    title: "You fixed a bug",
    timing: "Just now",
  },
  {
    id: 2,
    icon: UserRound,
    title: "New user registered.",
    timing: "59 minutes ago",
  },
  {
    id: 3,
    icon: Bug,
    title: "You fixed a bug",
    timing: "12 hours ago",
  },
  {
    id: 4,
    icon: Radio,
    title: "Neeraj subscribed to you",
    timing: "Today, 11:59 AM",
  },
];

const activities = [
  {
    id: 1,
    img: "/test_selfie.jpg",
    title: "Changed the style",
    timing: "Just now",
  },
  {
    id: 2,
    img: "/myself.jpg",
    title: "Released a new version",
    timing: "59 minutes ago",
  },
  {
    id: 3,
    img: "/test_selfie.jpg",
    title: "Submitted a bug",
    timing: "12 hours ago",
  },
  {
    id: 4,
    img: "/prefer1.jpg",
    title: "Modified A data in Page X",
    timing: "Toaday, 11:59 AM",
  },
  {
    id: 5,
    img: "/style.jpg",
    title: "Deleted a page in Project X",
    timing: "Feb 2, 2025",
  },
];

const contacts = [
  {
    id: 1,
    name: "Neeraj Bhatt",
  },
  {
    id: 2,
    name: "Drew Cano",
  },
  {
    id: 3,
    name: "Andi Lane",
  },
  {
    id: 4,
    name: "Koray Okumus",
  },
  {
    id: 5,
    name: "Kate Morrison",
  },
  {
    id: 6,
    name: "Melody Macy",
  },
];

function RightSidebar() {
  return (
    <div className="w-[380px] min-h-screen border-l p-5 space-y-6  border-slate-100 flex flex-col justify-start ">
      <div className="flex flex-col text-xs space-y-3  text-[#36454F]">
        <h3 className="font-medium text-black">Notifications</h3>
        <div className="flex flex-col space-y-3 flex-wrap  ">
          {notification.map((item) => (
            <div key={item.id} className="flex space-x-2 items-start ">
              <span className="bg-cyan-100 rounded-md p-1 ">
                <item.icon className="h-3.5 w-3.5 " />
              </span>
              <div>
                <h4 className="font-medium ">{item.title}</h4>
                <p className="text-zinc-400 text-[11px] font-medium">
                  {item.timing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-xs space-y-3  text-[#36454F]">
        <h3 className="font-medium text-black">Activities</h3>
        <div className="flex flex-col space-y-3 flex-wrap  ">
          {activities.map((item) => (
            <div key={item.id} className="flex space-x-2 items-start ">
              <div className="w-[23px] h-[23px] overflow-hidden rounded-full">
                <img
                  src={item.img}
                  alt="pfp"
                  width={23}
                  height={23}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium ">{item.title}</h4>
                <p className="text-zinc-400 text-[11px] font-medium">
                  {item.timing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-xs space-y-3  text-[#36454F]">
        <h3 className="font-medium text-black">Contacts</h3>
        <ul className="flex flex-col space-y-3 flex-wrap">
          {contacts.map((item) => (
            <li key={item.id} className="flex space-x-2 items-start">
              <div className="w-[23px] h-[23px] overflow-hidden rounded-full">
                <img
                  src="/myself.jpg"
                  alt="pfp"
                  width={23}
                  height={23}
                  className="object-cover"
                />
              </div>
              <a href="/" className="block font-medium hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RightSidebar;
