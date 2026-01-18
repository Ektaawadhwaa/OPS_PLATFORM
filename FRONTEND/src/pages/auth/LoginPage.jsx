import { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let role = null;
    if (email.includes("admin")) role = "ADMIN";
    else if (email.includes("coach")) role = "COACH";
    else if (email.includes("customer")) role = "CUSTOMER";

    if (!role) return setError("Invalid email for demo login");

    login({ user: { email }, role });

    if (role === "ADMIN") navigate("/admin");
    else if (role === "COACH") navigate("/coach");
    else navigate("/customer");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ padding: "10px" }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ padding: "10px" }} />
        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Demo emails: admin@test.com, coach@test.com, customer@test.com</p>
    </div>
  );
};

export default LoginPage;
