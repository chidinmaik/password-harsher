const crypto = require('crypto');
const secretKey = process.env.SECRET_KEY || 'mykey'; // Use environment variable or fallback

export default function handler(req, res) {
  if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
