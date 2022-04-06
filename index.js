const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const cartRoute = require('./routes/carts');
const orderRoute = require('./routes/orders');

const productRoute = require('./routes/products');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DBConnection Successfull'))
  .catch((err) => {
    console.log(err);
  });

app.get('/api/test', () => {
  console.log('test sucsefful');
});

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is runnig!');
});
