import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AppLayout = ({ role }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar role={role} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar role={role} />
        <div style={{ padding: "20px", flex: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
