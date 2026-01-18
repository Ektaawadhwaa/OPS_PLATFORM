import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ role, children }) => {
  const { user, role: userRole } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (role && userRole !== role) {
    // redirect to correct dashboard
    const redirectPath =
      userRole === "ADMIN" ? "/admin" :
      userRole === "COACH" ? "/coach" :
      "/customer";
    return <Navigate to={redirectPath} />;
  }

  return children;
};

export default ProtectedRoute;
