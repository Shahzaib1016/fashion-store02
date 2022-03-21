import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert } from 'react-bootstrap'

export const LoginForm = () => {
  console.log("Login form rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminID] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event) => {
    navigate("/students");
  };


  const form = (
    <div className="login-form">
      <h1><Alert variant = "info">Welcome!</Alert></h1>
      <input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br/>
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="AdminID"
        type="password"
        value={adminId}
        onChange={(e) => setAdminID(e.target.value)}
      />
      <br/>
      <br />
      <Button variant = "primary"
        disabled={username.length === 0 || password.length === 0}
        onClick={handleLogin}
      >
        Login
      </Button> <br/> <br />
      <Button variant="secondary"
        disabled={username.length === 0 || password.length === 0 || adminId.length === 0}
        onClick={handleLogin}
        >
        Admin Login
      </Button><br/> <br />
    </div>
  );

  return form;
};
