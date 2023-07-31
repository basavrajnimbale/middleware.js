const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send(`
    <form action="/product" method="POST">
      <label for="title">Product Title:</label>
      <input type="text" id="title" name="title"><br>

      <label for="size">Product Size:</label>
      <input type="text" id="size" name="size"><br>

      <button type="submit">Add Product</button>
    </form>
  `);
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});