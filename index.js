const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = 3003;

app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get('/', (req, res) => {
  const token = req.cookies.token;

  if (token) {
    res.json({ message: 'Cookie received!', token });
  } else {
    res.status(400).json({ message: 'No cookie found with the name "token".' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
