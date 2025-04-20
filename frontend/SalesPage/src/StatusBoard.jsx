import { useEffect, useState } from "react";

const VALID_TLDS = [".com", ".net", ".org", ".io", ".dev", ".ai", ".co", ".app", ".edu"];

export default function StatusBoard({ token, onLogout }) {
  const [url, setUrl] = useState("");
  const [checks, setChecks] = useState([]);
  const [error, setError] = useState(null);

  async function fetchChecks() {
    const res = await fetch("http://localhost:8000/recent", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setChecks(data);
  }

  useEffect(() => {
    fetchChecks();
  }, []);

  function isValidTLD(url) {
    return VALID_TLDS.some((tld) => url.toLowerCase().endsWith(tld));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let finalUrl = url;
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = "https://" + finalUrl;
    }

    if (!isValidTLD(finalUrl)) {
      setError("Unsupported domain — please enter a .com, .net, .io, etc.");
      return;
    }

    setError(null);

    const res = await fetch("http://localhost:8000/check?url=" + encodeURIComponent(finalUrl), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      await fetchChecks();
      setUrl("");
    } else {
      const data = await res.json();
      setError(data.detail || "Failed to check URL");
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Uply Dashboard</h1>
        <button onClick={onLogout}>Log Out</button>
      </div>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          style={{ padding: "8px", marginRight: "8px", width: "300px" }}
        />
        <button style={{ padding: "8px 16px" }}>Check URL</button>
      </form>

      {error && (
        <div style={{ color: "red", marginBottom: "1rem" }}>
          {error}
        </div>
      )}

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>URL</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Status</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Code</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Checked At</th>
          </tr>
        </thead>
        <tbody>
          {checks.map((check, i) => (
            <tr key={i}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{check.url}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{check.status}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {check.status_code ?? "—"}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {new Date(check.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}