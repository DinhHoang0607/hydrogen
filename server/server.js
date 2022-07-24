const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');

const url =
  'mongodb+srv://hoangvipzo:hoangvipzo@cluster0.ajgae06.mongodb.net/products?retryWrites=true&w=majority';
const app = express();

app.use(express.json());

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(userRouter);
app.listen(6767, () => {
  console.log('starting 6767');
});
