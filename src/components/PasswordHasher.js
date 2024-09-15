import React, { useState } from 'react';
import './PasswordHasher.css'; // Import the styles for PasswordHasher

const PasswordHasher = () => {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');

  const handleHashPassword = () => {
    // Simple hash example (not secure for real-world use)
    const hashed = btoa(password);
    setHashedPassword(hashed);
  };

  return (
    <div className="container">
      <h1>Password Hasher</h1>
      <input
        type="text"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button className="button" onClick={handleHashPassword}>Hash Password</button>
      {hashedPassword && (
        <div className="result">
          <h2>Hashed Password</h2>
          <p>{hashedPassword}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordHasher;
