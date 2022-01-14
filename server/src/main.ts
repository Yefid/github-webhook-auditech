const express = require('express');
const cors = require('cors');
const githubRouter = require('./routers/githubRouter');
const githubListenerRouter = require('./routers/githubListenerRouter');

require('dotenv').config();

require('./configs/database');

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/github-webhook-listener', githubListenerRouter);
app.use('/api/githubwebhook', githubRouter);

app.listen(PORT, () =>
	console.log(`server started on port ${PORT} mode: ${process.env.ENVMODE}`)
);
