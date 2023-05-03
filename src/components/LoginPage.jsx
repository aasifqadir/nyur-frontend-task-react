import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/LoginPage.css'

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the users from local storage
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // Find the user with the matching email and password
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      onLogin(user.name);
    } else {
      alert("Invalid email or password");
    }

    // Reset the form
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input id="btn" type="submit" value="LOGIN" />
        <Link to="/signup"><h2>Not a User?</h2></Link>
      </div>
    </form>
  );
}

export default LoginPage;