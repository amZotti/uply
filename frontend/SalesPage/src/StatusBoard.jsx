import { useState, useEffect } from "react";

function StatusBoard() {
  const [checks, setChecks] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchChecks();
  }, []);

  const fetchChecks = () => {
    fetch("http://localhost:8000/recent")
      .then(res => res.json())
      .then(setChecks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;
  
    const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
  
    try {
      await fetch(`http://localhost:8000/check?url=${encodeURIComponent(formattedUrl)}`);
      setUrl("");
      fetchChecks(); // refresh table
    } catch (err) {
      console.error("Error checking URL:", err);
    }
  };

  return (
    <div>
      <h2>Latest Uptime Checks</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ padding: "8px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>Check URL</button>
      </form>

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

export default StatusBoard;