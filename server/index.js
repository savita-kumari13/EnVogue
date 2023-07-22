const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const cookieSession = require("cookie-session");

// const authRouter = require('./controllers/auth.controller')

mongoose.connect('mongodb://localhost:27017/e-commerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
		console.log('================ Connected to MongoDB =====================');
  })
  .catch((error) => {
    console.error('================== Error connecting to MongoDB: ==================', error);
  });

const app = express();
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
  })
);


// app.use('/auth', authRouter)
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app)



app.listen(4000, () => {
	console.log('listening on 4000-----');
});
