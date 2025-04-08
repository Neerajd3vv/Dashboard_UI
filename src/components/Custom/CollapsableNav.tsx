interface types {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
import { ChevronRight, ChevronDown } from "lucide-react";
function CollapsableNav({ label, icon, children, isOpen, setIsOpen }: types) {
  return (
    <div className="w-full space-y-2">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center space-x-2  w-full py-2 cursor-pointer text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
      >
        {isOpen ? (
          <ChevronDown className="h-4 w-4 text-slate-300" />
        ) : (
          <ChevronRight className="h-4 w-4 text-slate-300" />
        )}
        <span>{icon}</span>
        <h4 className="font-medium ">{label}</h4>
      </button>
      {isOpen && children && <div className="pb-2">{children}</div>}
    </div>
  );
}

export default CollapsableNav;
