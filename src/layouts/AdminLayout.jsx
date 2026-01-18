import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar role="ADMIN" />
      <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
