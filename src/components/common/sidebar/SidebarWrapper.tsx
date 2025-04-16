import { useState } from "react";
import Sidebar from "./Sidebar.tsx";
import sidebarData from "../../../assets/staticData/sidebarData.json";

function SidebarWrapper() {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <>
      <div className={`transition-transform duration-300 ease-in-out ${collapse ? "-translate-x-full" : "translate-x-0"}`}>
        <Sidebar />
      </div>
      <button
        className={`border border-gray-200 rounded-sm h-10 w-10 bg-gray-100 flex items-center justify-center absolute cursor-pointer hover:bg-gray-200 top-26 shadow-2xs transition-all duration-300 ease-in-out ${collapse ? "left-0" : "left-80"}`}
        onClick={() => setCollapse((prev) => !prev)}
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
