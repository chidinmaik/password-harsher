import React, { useState } from 'react';
import './App.css';
import NavBar from  './components/NavBar';
import Footer from  './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [encryptedPassword, setEncryptedPassword] = useState('');
  const [decryptedPassword, setDecryptedPassword] = useState('');

  // Handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to hash the password (send request to backend)
  const hashPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/hash-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      setHashedPassword(data.hashedPassword);
    } catch (error) {
      console.error('Error hashing password:', error);
    }
  };

  // Function to encrypt the password (send request to backend)
  const encryptPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/encrypt-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      setEncryptedPassword(data.encryptedPassword);
    } catch (error) {
      console.error('Error encrypting password:', error);
    }
  };

  // Function to decrypt the password (send request to backend)
  const decryptPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/decrypt-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ encryptedPassword }),
      });
      const data = await response.json();
      setDecryptedPassword(data.decryptedPassword);
    } catch (error) {
      console.error('Error decrypting password:', error);
    }
  };

  return (
    <div>
    <NavBar/>
    <div className="App">
      <h1>Password Hashing & Encryption Tool</h1>

      <input
        type="text"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />

      <div>
        <button onClick={hashPassword}>Hash Password</button>
        <button onClick={encryptPassword}>Encrypt Password</button>
      </div>

      <div className="results">
        <h3>Hashed Password:</h3>
        <textarea value={hashedPassword} readOnly rows="2" />

        <h3>Encrypted Password:</h3>
        <textarea value={encryptedPassword} readOnly rows="2" />

        <button onClick={decryptPassword}>Decrypt Password</button>
        <h3>Decrypted Password:</h3>
        <textarea value={decryptedPassword} readOnly rows="2" />
      </div>
      <div className="WhatsAppButton-section">
          <WhatsAppButton />
          </div>
    </div>
<Footer/>
    </div>
  );
}

export default App;
