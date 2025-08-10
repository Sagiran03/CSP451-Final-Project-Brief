const express = require('express');
const app = express();
const PORT = 3001;

app.get('/inventory', (req, res) => {
  res.json({ items: [{ id: 1, name: 'Widget', stock: 10 }] });
});

app.listen(PORT, () => {
  console.log(`Inventory API running on port ${PORT}`);
});
