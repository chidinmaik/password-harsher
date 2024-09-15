const CryptoJS = require('crypto-js');
const secretKey = process.env.SECRET_KEY || 'mykey'; // Use environment variable or fallback

export default function handler(req, res) {
  if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
