import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const CoachLayout = () => (
  <div style={{ display: "flex", height: "100vh" }}>
    <Sidebar role="COACH" />
    <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
      <Outlet />
    </main>
  </div>
);

export default CoachLayout;
