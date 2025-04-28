import { useState } from "react";
import Sidebar from "./Sidebar.tsx";
import sidebarData from "../../../assets/staticData/sidebarData.json";

function SidebarWrapper() {
  const [collapse, setCollapse] = useState<boolean | null>(null);

  return (
    <>
      <div className={`${collapse === null ? "" : collapse ? "animate-slide-out" : "animate-slide-in"}`}>
        <Sidebar />
      </div>
      <button
        className={`border border-gray-200 rounded-lg h-10 w-10 bg-gray-100 flex items-center justify-center absolute cursor-pointer hover:bg-gray-200 top-20 shadow-2xs transition-all duration-300 ease-in-out ${collapse ? "left-0" : "left-80"}`}
        onClick={() => setCollapse(!collapse)}
      >
        <img
          className={`transition-transform duration-300 ${collapse ? "rotate-180" : "rotate-0"}`}
          src={sidebarData.toggleButton}
          alt="toggle.svg"
        />
      </button>
    </>
  );
}

export default SidebarWrapper;
