import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Sidebar = ({ role }) => {
  const { logout } = useAuth();

  const adminLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Demos", path: "/admin/demos" },
    { name: "Students", path: "/admin/students" },
    { name: "Analytics", path: "/admin/analytics" },
  ];

  const coachLinks = [{ name: "Dashboard", path: "/coach" }];
  const customerLinks = [{ name: "Dashboard", path: "/customer" }];

  const links = role === "ADMIN" ? adminLinks : role === "COACH" ? coachLinks : customerLinks;

  return (
    <aside style={{ width: "200px", background: "#111827", color: "white", padding: "20px" }}>
      <h3>{role} Sidebar</h3>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            style={({ isActive }) => ({
              color: isActive ? "#10b981" : "white",
              textDecoration: "none",
            })}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <button onClick={logout} style={{ marginTop: "20px", padding: "8px", cursor: "pointer" }}>Logout</button>
    </aside>
  );
};

export default Sidebar;
