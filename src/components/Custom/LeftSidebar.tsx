

import {
  ChartPie,
  ShoppingBag,
  SquareUserRound,
  FolderDot,
  IdCard,
  MessageCircle,
  Notebook,
  UsersRound,
} from "lucide-react";
import CollapsableNav from "./CollapsableNav";
function LeftSidebar() {

  return (
    <div className="w-[320px] min-h-screen text-[#36454F] border-r text-xs font-medium p-5 space-y-4  border-slate-100 flex flex-col justify-between ">
      <div className="flex flex-col justify-start space-y-6">
        <div className="flex items-center space-x-2">
          <img
            src="/prefer1.jpg"
            alt="logo"
            className="w-5.5 h-5.5 object-cover rounded-full"
          />
          <span className="text-sm">ByeWind</span>
        </div>
        <div className="flex flex-col space-y-6 ">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <h3 className="text-zinc-400">Favourites</h3>
              <p className="text-zinc-300"> Recently</p>
            </div>
            <div className="flex    items-center space-x-2 px-1">
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
              <h4>Overview</h4>
            </div>
            <div className="flex    items-center space-x-2 px-1">
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
              <h4>Projects</h4>
            </div>
          </div>
          <ul className="px-1 flex flex-col space-y-1">
            <h3 className="text-zinc-400">Dashboard</h3>
            <a
              href="/"
              className="flex space-x-2 mt-1 bg-gray-100 border border-gray-100 pl-6 py-2 rounded-md"
            >
              <ChartPie className="h-4 w-4 text-gray-800 " />
              <h4>Overview</h4>
            </a>
            <li>
              <CollapsableNav
                label="eCommerce"
                icon={<ShoppingBag className="h-4 w-4 text-gray-800" />}
              >
                <ul className="pl-12 flex flex-col space-y-3">
                  <li>
                    <a href="/" className="block hover:underline">
                      Test
                    </a>
                  </li>
                  <li>
                    <a href="/" className="block hover:underline">
                      Test
                    </a>
                  </li>
                </ul>
              </CollapsableNav>
            </li>
            <li>
              <CollapsableNav
                label="Projects"
                icon={<FolderDot className="h-4 w-4 text-gray-800" />}
              >
                <ul className="pl-12 flex flex-col space-y-3">
                  <li>
                    <a href="#" className="block hover:underline">
                      Project 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Project 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Project 3
                    </a>
                  </li>
                </ul>
              </CollapsableNav>
            </li>
          </ul>

          <ul className="px-1 flex flex-col space-y-1">
            <h3 className="text-zinc-400">Pages</h3>
            <li className="flex  mt-1 ">
              <CollapsableNav
                label="User Profile"
                icon={<SquareUserRound className="h-4 w-4 text-gray-800" />}
              >
                <ul className="pl-12 flex flex-col space-y-3">
                  <li>
                    <a href="#" className="block hover:underline">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Campaigns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Documents
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Followers
                    </a>
                  </li>
                </ul>
              </CollapsableNav>
            </li>
            <li>
              <CollapsableNav
                label="Account"
                icon={<IdCard className="h-4 w-4 text-gray-800" />}
              >
                <ul className="pl-12 flex flex-col space-y-3">
                  <li>
                    <a href="#" className="block hover:underline">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Projects
                    </a>
                  </li>
                </ul>
              </CollapsableNav>
            </li>
            <li>
              <CollapsableNav
                label="Corporate"
                icon={<UsersRound className="h-4 w-4 text-gray-800" />}
              >
                <ul className="pl-12 flex flex-col space-y-3">
                  <li>
                    <a href="#" className="block hover:underline">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Projects
                    </a>
                  </li>
                </ul>
              </CollapsableNav>
            </li>
            <li>
              <CollapsableNav
                label="Blog"
                icon={<Notebook className="h-4 w-4 text-gray-800" />}
              >
                <ul className="pl-12 flex flex-col space-y-3">
                  <li>
                    <a href="#" className="block hover:underline">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Projects
                    </a>
                  </li>
                </ul>
              </CollapsableNav>
            </li>
            <li>
              <CollapsableNav
                label="Social"
                icon={<MessageCircle className="h-4 w-4 text-gray-800" />}
              >
                <ul className="pl-12 flex flex-col space-y-3">
                  <li>
                    <a href="#" className="block hover:underline">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block hover:underline">
                      Projects
                    </a>
                  </li>
                </ul>
              </CollapsableNav>
            </li>
          </ul>
        </div>
      </div>
      <span className="flex justify-center font-bold ">SNOW UI</span>
    </div>
  );
}

export default LeftSidebar;
