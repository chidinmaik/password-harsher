import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [encryptedPassword, setEncryptedPassword] = useState('');
  const [decryptedPassword, setDecryptedPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const hashPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/hash-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setHashedPassword(data.hashedPassword);
    } catch (error) {
      console.error('Error hashing password:', error);
    }
  };

  const encryptPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/encrypt-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setEncryptedPassword(data.encryptedPassword);
    } catch (error) {
      console.error('Error encrypting password:', error);
    }
  };

  const decryptPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/decrypt-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ encryptedPassword }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setDecryptedPassword(data.decryptedPassword);
    } catch (error) {
      console.error('Error decrypting password:', error);
    }
  };

  return (
    <div className="app-container">
      <NavBar />
      <div className="content-container">
        <h1 className="title">Password Hashing & Encryption Tool</h1>

        <input
          type="text"
          className="input-password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />

        <div className="button-group">
          <button className="btn" onTouchEnd={hashPassword} onClick={hashPassword}>Hash Password</button>
          <button className="btn" onTouchEnd={encryptPassword} onClick={encryptPassword}>Encrypt Password</button>
        </div>

        <div className="results">
          <h3>Hashed Password:</h3>
          <textarea value={hashedPassword} readOnly rows="2" className="output-area" />

          <h3>Encrypted Password:</h3>
          <textarea value={encryptedPassword} readOnly rows="2" className="output-area" />

          <button className="btn" onTouchEnd={decryptPassword} onClick={decryptPassword}>Decrypt</button>
          <h3>Decrypted Password:</h3>
          <textarea value={decryptedPassword} readOnly rows="2" className="output-area" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
