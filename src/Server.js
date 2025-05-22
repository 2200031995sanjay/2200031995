import app from './app.js';

const PORT = 9876;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});