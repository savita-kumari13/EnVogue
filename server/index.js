import express, { urlencoded } from 'express';
import pkg from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import cookieSession from 'cookie-session';
import session from 'express-session';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import orderRoutes from './routes/order.routes.js';

const { json, urlencoded: _urlencoded } = pkg;
// const authRouter = require('./controllers/auth.controller')

import { connect } from 'mongoose';
connect('mongodb://mongo-db:27017/e-commerce', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 5000
})
	.then(() => {
		console.log('================ Connected to MongoDB =====================');
	})
	.catch((error) => {
		console.error('================== Error connecting to MongoDB: ==================', error);
	});

const app = express();
app.use(json());
app.use(cookieParser());
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(_urlencoded({ extended: true }));
app.use(urlencoded({ extended: true }));

let sess = {
	key: 'sessionId',
	secret: 'COOKIE_SECRET',
	resave: false,
	saveUninitialized: false,
	cookie: { sameSite: 'lax', maxAge: 60000, secure: false }
};

if (app.get('env') === 'production') {
	app.set('trust proxy', 1); // trust first proxy
	sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));

// require('./routes/auth.routes')(app);
// require('./routes/user.routes')(app);
// require('./routes/product.routes')(app);
// require('./routes/order.routes')(app);

authRoutes(app);
userRoutes(app);
productRoutes(app);
orderRoutes(app);

app.listen(4000, () => {
	console.log('listening on 4000-----');
});
