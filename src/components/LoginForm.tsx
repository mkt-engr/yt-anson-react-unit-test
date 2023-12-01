import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const isDisabled = !username || !password;

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    fetch("http://localhost:3000/api/auth", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setSuccess("Success Logging in");
      })
      .catch((err) => {
        setError("Error Logging In");
      })
      .finally();
  };

  return (
    <form action="">
      <div>{error}</div>
      <div>{success}</div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button onClick={handleLogin} disabled={isDisabled}>
        Login
      </button>
    </form>
  );
};
