const express = require('express');
const app = express();
const mongoose = require('mongoose');

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

app.get('/posts', (req, res) => {
  res.send('We are on posts');
});

//CONNECT TO DB
mongoose.connect(
  'mongodb+srv://paulwebdevguy:Tweezer$$4338@cluster0.egwsown.mongodb.net/?retryWrites=true&w=majority',
() => {
  console.log("connected to DB");
})

app.listen(3000);