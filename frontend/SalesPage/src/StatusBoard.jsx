import { useState, useEffect } from "react";

function StatusBoard() {
  const [checks, setChecks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/recent")
      .then(res => res.json())
      .then(setChecks);
  }, []);

  return (
    <div>
      <h2>Latest Uptime Checks</h2>
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