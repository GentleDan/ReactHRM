import { PageButton } from "./buttons/pageButton/PageButton.tsx";
import CollapseElement from "./collapse/CollapseElement.tsx";
import sidebarData from "../../../assets/staticData/sidebarData.json";

function Sidebar() {
  return (
    <div className="h-screen w-85 bg-gray-100 p-10 border-r border-gray-200 flex flex-col overflow-y-auto hide-scrollbar">
      <img className="w-48 h-18" src={sidebarData.logo} alt="LogoImg" />
      <nav className="flex flex-col flex-1/2">
        <ul>
          <li>
            <CollapseElement index={0} title={"Личный кабинет"} elements={sidebarData.personal} />
          </li>
          <li>
            <CollapseElement index={1} title={"Рабочее пространство"} elements={sidebarData.workplace} />
          </li>
        </ul>
        <div className="mt-auto">
          <PageButton icon={sidebarData.footerButton.icon} title={sidebarData.footerButton.title} />
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
