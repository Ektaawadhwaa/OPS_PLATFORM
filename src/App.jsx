import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import ProtectedRoute from "./auth/ProtectedRoute";

import AdminLayout from "./layouts/AdminLayout";
import CoachLayout from "./layouts/CoachLayout";
import CustomerLayout from "./layouts/CustomerLayout";

import AdminDemos from "./pages/admin/Demos";
import Students from "./pages/admin/Students";
import Analytics from "./pages/admin/Analytics";

import AdminDashboard from "./pages/admin/Dashboard";
import CoachDashboard from "./pages/coach/Dashboard";
import CustomerDashboard from "./pages/customer/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={<ProtectedRoute role="ADMIN"><AdminLayout /></ProtectedRoute>}>
          <Route index element={<AdminDemos />} />
          <Route path="demos" element={<AdminDemos />} />
          <Route path="students" element={<Students />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>

        <Route path="/coach" element={<ProtectedRoute role="COACH"><CoachLayout /></ProtectedRoute>}>
          <Route index element={<CoachDashboard />} />
        </Route>

        <Route path="/customer" element={<ProtectedRoute role="CUSTOMER"><CustomerLayout /></ProtectedRoute>}>
          <Route index element={<CustomerDashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
