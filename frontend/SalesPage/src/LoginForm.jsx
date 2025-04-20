import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("secret");
  const [mode, setMode] = useState("login"); // or "signup"

  async function handleSubmit(e) {
    e.preventDefault();

    const endpoint = mode === "signup" ? "signup" : "login";
    const res = await fetch(`http://localhost:8000/${endpoint}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
      method: "POST",
    });

    const data = await res.json();

    if (res.ok && data.access_token) {
      localStorage.setItem("token", data.access_token);
      onLogin(data.access_token);
    } else if (res.ok && mode === "signup") {
      // After signup, immediately log in
      const loginRes = await fetch(`http://localhost:8000/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
        method: "POST",
      });
      const loginData = await loginRes.json();
      if (loginRes.ok && loginData.access_token) {
        localStorage.setItem("token", loginData.access_token);
        onLogin(loginData.access_token);
      } else {
        alert("Signup succeeded, but login failed");
      }
    } else {
      alert(data.detail || "Login/signup failed");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>{mode === "signup" ? "Sign Up" : "Log In"}</h2>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        style={{ display: "block", marginBottom: "0.5rem" }}
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
        style={{ display: "block", marginBottom: "0.5rem" }}
      />
      <button>{mode === "signup" ? "Create Account" : "Log In"}</button>

      <div style={{ marginTop: "1rem" }}>
        {mode === "signup" ? (
          <span>
            Already have an account?{" "}
            <button type="button" onClick={() => setMode("login")}>Log in</button>
          </span>
        ) : (
          <span>
            New here?{" "}
            <button type="button" onClick={() => setMode("signup")}>Sign up</button>
          </span>
        )}
      </div>
    </form>
  );
}