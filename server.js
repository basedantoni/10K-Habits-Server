import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>
  res.json({ message: 'Docker is easy 🐳'})
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));