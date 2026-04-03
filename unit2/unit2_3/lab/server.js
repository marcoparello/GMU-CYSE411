const express = require('express');
const app = express();

/*
 * Login endpoint – sets a session cookie WITHOUT HttpOnly
 */
app.get('/login', (req, res) => {
  res.cookie('sessionId', 'SESSION-ABC-123', {
    // httpOnly NOT set (vulnerable)
    //remedy by setting httpOnly to true
    httpOnly: true,
    secure: false,     // false for localhost demo
    sameSite: 'lax'
  });

  res.send(`
    <h1>Logged in</h1>
    <p>Session cookie set.</p>
    <a href="/profile">Go to profile</a>
  `);
});

/*
 * Vulnerable page with reflected XSS
 */
app.get('/profile', (req, res) => {
  const name = req.query.name || 'Guest';
  // code has reflexted XSS due to lack of input sanitization
  // fixed it by adding escape
  const escape = require("escape-html")

  res.send(`
    <h1>Profile</h1>
    <p>Hello ${escape(name)}</p>
    <p>Try injecting JavaScript in the URL.</p>
  `);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
