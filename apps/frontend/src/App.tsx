import { useEffect, useState } from "react";

export default function App() {
  const [backendMsg, setBackendMsg] = useState("loading...");
  const [version, setVersion] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json())
      .then((d) => setBackendMsg(d.message))
      .catch(() => setBackendMsg("error"));

    fetch("/api/version")
      .then((r) => r.text())
      .then(setVersion)
      .catch(() => setVersion("unknown"));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, Roboto, sans-serif", padding: "2rem" }}>
      <h1>React + Node CI/CD Demo 2026</h1>
      <p>
        Backend says: <strong data-testid="backend-msg">{backendMsg}</strong>
      </p>
      <small>Version: {version}</small>
    </div>
  );
}
