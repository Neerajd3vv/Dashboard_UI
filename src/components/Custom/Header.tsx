import { Search } from "lucide-react";
import { Star, Sun, History, Bell, PanelLeft } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b text-sm border-gray-200">
      <div className="flex items-center space-x-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <PanelLeft className="h-4.5 w-4.5 text-gray-800" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Star className="h-4.5 w-4.5 text-gray-800" />
        </button>
        <div className="flex items-center space-x-4">
          <span className="text-zinc-400 font-medium">Dashboards</span>
          <span className="text-gray-400">/</span>
          <span className="font-medium">Default</span>
        </div>
      </div>

      <div className="flex  items-center space-x-3">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className=" w-[180px]  bg-gray-100 border border-gray-200 rounded-md py-1 pl-10 pr-3 text-sm placeholder-gray-400 placeholder:font-normal"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            <span className="text-sm text-gray-400 ">/</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Sun className="h-5 w-5 text-gray-800" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <History className="h-5 w-5 text-gray-800" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Bell className="h-5 w-5 text-gray-800" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <PanelLeft className="h-5 w-5 text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  );
}
