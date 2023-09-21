const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const TodoRoute = require('./route/TodoRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', TodoRoute);

const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
