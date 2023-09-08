const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { sendData } = require('./Utils/Data');
const { Users } = require('./Models/Users');
const { hashPhone } = require('./Utils/String');
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/Mvc').then(() => {
  sendData();
  console.log('Database is connected');
});

// Update user by id and send back the updated user
app.get('/getUserUpdate/:id', async (req, res) => {
  try {
    const result = await Users.findById(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});
app.put('/putUser/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Users.findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        address: req.body.address,
        phone: req.body.phone,
      }
    );
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

// Get all users
app.get('/getUsers', async (req, res) => {
  try {
    const result = await Users.find();
    if (result) {
      res.send(result);
    } else {
      res.send('No users found');
    }
  } catch (err) {
    console.log(err);
  }
});

// Post new user
app.post('/addUsers', async (req, res) => {
  try {
    const { name, email, address, age, phone } = req.body;
    if ((name === '', email === '', address === '', age === '')) {
      console.log('No information users ');
    } else {
      const result = Users.create({
        name,
        email,
        address,
        age,
        hashPhone: await hashPhone(phone),
      });
      res.send(result);
    }
  } catch (err) {
    console.log(err);
  }
});

// Delete user by id

app.delete('/deleteUsers/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const result = await Users.findByIdAndDelete(_id);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
