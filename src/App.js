import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [encryptedPassword, setEncryptedPassword] = useState('');
  const [decryptedPassword, setDecryptedPassword] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if the device is touch-enabled
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle button clicks (common handler for both mobile and desktop)
  const handleButtonClick = async (action) => {
    try {
      let response;
      if (action === 'hash') {
        response = await fetch('http://localhost:5000/hash-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
        });
      } else if (action === 'encrypt') {
        response = await fetch('http://localhost:5000/encrypt-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
        });
      } else if (action === 'decrypt') {
        response = await fetch('http://localhost:5000/decrypt-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ encryptedPassword }),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (action === 'hash') {
        setHashedPassword(data.hashedPassword);
      } else if (action === 'encrypt') {
        setEncryptedPassword(data.encryptedPassword);
      } else if (action === 'decrypt') {
        setDecryptedPassword(data.decryptedPassword);
      }
    } catch (error) {
      console.error(`Error during ${action}:`, error);
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
          <button
            className="btn"
            onClick={() => handleButtonClick('hashPassword')}
            onTouchStart={() => handleButtonClick('hashPassword')}
          >
            Hash Password
          </button>
          <button
            className="btn"
            onClick={() => handleButtonClick('encrypt')}
            onTouchStart={() => handleButtonClick('encrypt')}
          >
            Encrypt Password
          </button>
        </div>

        <div className="results">
          <h3>Hashed Password:</h3>
          <textarea value={hashedPassword} readOnly rows="2" className="output-area" />

          <h3>Encrypted Password:</h3>
          <textarea value={encryptedPassword} readOnly rows="2" className="output-area" />

          <button
            className="btn"
            onClick={() => handleButtonClick('decrypt')}
            onTouchStart={() => handleButtonClick('decrypt')}
          >
            Decrypt Password
          </button>
          <h3>Decrypted Password:</h3>
          <textarea value={decryptedPassword} readOnly rows="2" className="output-area" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
