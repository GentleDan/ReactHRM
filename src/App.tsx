import SidebarWrapper from "./components/common/sidebar/SidebarWrapper.tsx";
import Header from "./components/common/header/Header.tsx";

function App() {
  return (
    <div className="flex">
      <SidebarWrapper />
      <div className="flex-2/3">
        <Header />
        {/* mainContent */}
      </div>
    </div>
  );
}

export default App;
