import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import StatusBoard from "./StatusBoard";
import LoginForm from "./LoginForm";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  const decoded = token ? jwtDecode(token) : null;
  const email = decoded?.sub;

  return (
    <div style={{ padding: "2rem" }}>
      {!token ? (
        <LoginForm onLogin={setToken} />
      ) : (
        <>
          <div style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "#444" }}>
            Logged in as <strong>{email}</strong>
          </div>
          <StatusBoard token={token} onLogout={handleLogout} />
        </>
      )}
    </div>
  );
}