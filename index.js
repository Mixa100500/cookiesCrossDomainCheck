const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3003;

// Подключаем middleware для работы с куки
app.use(cookieParser());

// Роут для обработки запросов
app.get('/', (req, res) => {
  const token = req.cookies.token;

  if (token) {
    res.status(200).send(`Token received: ${token}`);
  } else {
    res.status(400).send('No token found in cookies');
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
