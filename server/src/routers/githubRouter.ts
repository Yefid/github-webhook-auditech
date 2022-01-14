export {};
const express = require('express');

const router = express.Router();

const githubWebhookBL = require('../model/githubWebhook/githubWebhookBL');

router.route('/').get(async (req: any, resp: any) => {
	const res = await githubWebhookBL.getAllActions();
	return resp.json(res);
});

module.exports = router;
