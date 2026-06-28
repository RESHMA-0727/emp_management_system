import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("❌ Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>💼 EmployeeMS</h1>

        <p>Welcome Back! Login to continue.</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p
            style={{
              color: "#ff6b6b",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            {error}
          </p>
        )}

        <button onClick={handleLogin}>
          Login
        </button>

        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#cbd5e1",
          }}
        ></p>
        <p style={{ marginTop:"15px",color:"#fff",textAlign:"center"}}>
        🗝️<strong>Demo Credentials</strong><br />
        Username:<strong>admin</strong><br />
        Password:<strong>admin123</strong>
        </p>

      </div>
    </div>
  );
}

export default Login;