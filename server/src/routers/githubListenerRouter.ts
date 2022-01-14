export {};
const express = require('express');

const router = express.Router();

const githubWebhookBL = require('../model/githubWebhook/githubWebhookBL');

router.route('/').post(async (req: any, resp: any) => {
	const res = await githubWebhookBL.addAction(req.body.payload);
	return resp.json(`payload successfully received. and ${res}`);
});

module.exports = router;
