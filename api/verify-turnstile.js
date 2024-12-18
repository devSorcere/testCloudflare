// api/verify-turnstile.js
const axios = require('axios');

module.exports = async (req, res) => {
  const { token } = req.body;

  try {
    const response = await axios.post('https://challenges.cloudflare.com/turnstile/v0/siteverify', null, {
      params: {
        secret: '0x4AAAAAAA3DlvYN2rAsvLbfzoRazyE8Rkc',
        response: token,
      }
    });

    if (response.data.success) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.error('Error verifying Turnstile token:', err);
    res.json({ success: false });
  }
};
