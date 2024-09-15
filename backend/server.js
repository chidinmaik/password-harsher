const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const CryptoJS = require('crypto-js');
const cors = require('cors');
require('dotenv').config(); // To use environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const secretKey = process.env.SECRET_KEY || 'your-secret-key'; // Use environment variable or fallback

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// API to hash the password
app.post('/hash-password', (req, res) => {
  const { password } = req.body;
  console.log('Received password for hashing:', password);
  if (!password) {
    console.log('Error: Password is required');
    return res.status(400).json({ error: 'Password is required' });
  }
  try {
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    res.json({ hashedPassword });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to encrypt the password
app.post('/encrypt-password', (req, res) => {
  const { password } = req.body;
  console.log('Received password for encryption:', password);
  if (!password) {
    console.log('Error: Password is required');
    return res.status(400).json({ error: 'Password is required' });
  }
  try {
    const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    res.json({ encryptedPassword });
  } catch (error) {
    console.error('Error encrypting password:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to decrypt the password
app.post('/decrypt-password', (req, res) => {
  const { encryptedPassword } = req.body;
  console.log('Received encrypted password for decryption:', encryptedPassword);
  if (!encryptedPassword) {
    console.log('Error: Encrypted password is required');
    return res.status(400).json({ error: 'Encrypted password is required' });
  }
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (!originalPassword) {
      console.log('Error: Invalid encrypted password');
      return res.status(400).json({ error: 'Invalid encrypted password' });
    }
    res.json({ decryptedPassword: originalPassword });
  } catch (error) {
    console.error('Error decrypting password:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
