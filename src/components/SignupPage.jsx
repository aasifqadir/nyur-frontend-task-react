import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/LoginPage.css'


function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, email, password };

    // Get the existing users from local storage
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // Add the new user to the array
    users.push(user);

    // Save the updated users array to local storage
    localStorage.setItem("users", JSON.stringify(users));
    navigate('/')
    alert("Registered successfully")
    // Reset the form
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <h1>Sign Up</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
        <input id="btn" type="submit" value="SIGN UP" />
        <Link to="/"><h2>Already a User?</h2></Link>

      </div>

    </form>
  );
}

export default SignupPage;
