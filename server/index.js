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

const PORT = process.env.PORT || 4000;

const { json, urlencoded: _urlencoded } = pkg;

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

authRoutes(app);
userRoutes(app);
productRoutes(app);
orderRoutes(app);

app.get('/', (req, res) => res.send('server running'));

app.listen(PORT, () => {
	console.log(`listening on ${PORT}-----`);
});
