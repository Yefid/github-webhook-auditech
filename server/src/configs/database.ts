const mongoose = require('mongoose');

const mongoString = process.env.MONGOURI;
mongoose
	.connect(mongoString, {
		serverSelectionTimeoutMS: 5000,
	})
	.catch((err: any) => console.log(err.reason));
