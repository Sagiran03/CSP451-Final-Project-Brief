const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send('Product Service is running');
});

app.get('/products', (req, res) => {
  res.json({
    products: [
      { id: 1, name: 'Gadget', price: 19.99 },
      { id: 2, name: 'Thingamajig', price: 29.99 }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
