const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const CryptoJS = require('crypto-js');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// API to hash the password
app.post('/hash-password', (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }
  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
  res.json({ hashedPassword });
});

// API to encrypt the password
app.post('/encrypt-password', (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }
  const secretKey = 'your-secret-key';  // Replace with a secure secret key
  const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
  res.json({ encryptedPassword });
});

// API to decrypt the password
app.post('/decrypt-password', (req, res) => {
  const { encryptedPassword } = req.body;
  if (!encryptedPassword) {
    return res.status(400).json({ error: 'Encrypted password is required' });
  }
  const secretKey = 'your-secret-key';  // Must be the same secret key used for encryption
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

  if (!originalPassword) {
    return res.status(400).json({ error: 'Invalid encrypted password' });
  }

  res.json({ decryptedPassword: originalPassword });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
