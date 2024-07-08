const express = require('express')
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json());

const SALTROUNDS = 10;

mongoose.connect('mongodb+srv://root:saturn12345@cluster0.clv9ruy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');



app.post('/register', async (req, res) => {
  const {username, password} = req.body;
  try {
    const salt = bcrypt.genSaltSync(SALTROUNDS);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const userDoc = await User.create({
      username,
      password: hashedPassword
    });

    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  const {username, password} = req.body;

  try{
    const user = await User.findOne({username});
    if (!user) {
      return res.status(400).json({
        message: 'Invalid username or password'
      });
    }

    // compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid username or password'
      });
    }

    // Generate JWT
    const token = jwt.sign({id: user._id}, 'jwt_secret', {expiresIn: '1h'});
    res.cookie('token', token).json('ok');
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
});


app.listen(4000);