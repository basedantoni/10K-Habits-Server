import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) =>
  res.json({ message: 'Docker is easy 🐳'})
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));