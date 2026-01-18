import React from "react";
import logo from "../assets/logo.png";

const sidebarStyle = {
  width: "240px",
  backgroundColor: "var(--ica-blue)",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  padding: "16px",
};

const topbarStyle = {
  height: "60px",
  backgroundColor: "#ffffff",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
};

export default function AppLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={{ marginBottom: "32px", textAlign: "center" }}>
          <img
            src={logo}
            alt="ICA Logo"
            style={{
              width: "120px",
              height: "auto",
            }}
          />
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span>Dashboard</span>
          <span>Students</span>
          <span>Demos</span>
          <span>Analytics</span>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header style={topbarStyle}>
          <strong>ICA Operations Platform</strong>
        </header>

        <main style={{ padding: "24px", flex: 1 }}>
          {children}
        </main>
      </div>

    </div>
  );
}
