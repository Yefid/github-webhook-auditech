const fs = require('fs');
const GithubWebhookModel = require('./githubWebhookModel');
const urlHandler = require('../../helpers/urlHandler');
const cloudinaryHandler = require('../../helpers/cloudinaryHandler');

const getShapedData = (data: any) => {
	const shapedData: {
		_id: number;
		action: string;
		pull_request_url: string;
		pull_request_id: number;
		pull_request_node_id: number;
		pull_request_html_url: string;
		pull_request_state: string;
		pull_request_body: string;
		pull_request_created_at: Date;
		pull_request_updated_at: Date;

		pull_request_created_updated: Date; // custom field

		pull_request_closed_at: Date;
		pull_request_merged_at: Date;
		sender_login: string;
		sender_id: number;
		sender_avatar_url: string;
		sender_html_url: string;
		repository_full_name: string;
		screenshotImg: string;
	}[] = [];
	data.forEach((item: any) => {
		const shapedDataItem = {
			_id: item._id,
			action: item.action,
			pull_request_url: item.pull_request.url,
			pull_request_id: item.pull_request.id,
			pull_request_node_id: item.pull_request.node_id,
			pull_request_html_url: item.pull_request.html_url,
			pull_request_state: item.pull_request.state,
			pull_request_body: item.pull_request.body,
			pull_request_created_at: item.pull_request.created_at,
			pull_request_updated_at: item.pull_request.updated_at,

			// custom field
			pull_request_created_updated: item.pull_request.updated_at
				? item.pull_request.updated_at
				: item.pull_request.created_at,

			pull_request_closed_at: item.pull_request.closed_at,
			pull_request_merged_at: item.pull_request.merged_at,
			sender_login: item.sender.login,
			sender_id: item.sender.id,
			sender_avatar_url: item.sender.avatar_url,
			sender_html_url: item.sender.html_url,
			repository_full_name: item.repository.full_name,
			screenshotImg: item.screenshotImg,
		};
		shapedData.push(shapedDataItem);
	});
	return shapedData;
};

exports.getAllActions = () =>
	new Promise((resolve, reject) => {
		GithubWebhookModel.find(
			{},
			{
				_id: 1,
				action: 1,
				'pull_request.url': 1,
				'pull_request.id': 1,
				'pull_request.node_id': 1,
				'pull_request.html_url': 1,
				'pull_request.state': 1,
				'pull_request.body': 1,
				'pull_request.created_at': 1,
				'pull_request.updated_at': 1,
				'pull_request.closed_at': 1,
				'pull_request.merged_at': 1,
				'sender.login': 1,
				'sender.id': 1,
				'sender.avatar_url': 1,
				'sender.html_url': 1,
				'repository.full_name': 1,
				screenshotImg: 1,
			},
			(err: any, data: any) => {
				if (err) {
					reject(err);
				} else {
					resolve(getShapedData(data));
				}
			}
		);
	});

exports.getAction = (id: string) =>
	new Promise((resolve, reject) => {
		GithubWebhookModel.findById(id, (err: any, data: any) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});

exports.addAction = async (payload: any) => {
	const obj = JSON.parse(payload);
	console.log('start getScreenShot');

	let screenshotImg = '';
	const imgPath = await urlHandler.getScreenShot(
		obj.pull_request.html_url,
		obj.pull_request.id
	);

	console.log('finished getScreenShot');
	console.log('start cloudinaryHandler');

	try {
		const result = await cloudinaryHandler.uploadImg(imgPath);
		screenshotImg = result.url;
	} catch (err) {
		console.log(err);
	}

	if (imgPath) {
		fs.unlinkSync(imgPath);
	}

	console.log('finished cloudinaryHandler');

	return new Promise((resolve, reject) => {
		const webhookAction = new GithubWebhookModel({
			action: obj.action,
			number: obj.number,
			pull_request: obj.pull_request,
			repository: obj.repository,
			sender: obj.sender,
			screenshotImg,
		});

		webhookAction.save((err: any) => {
			if (err) {
				reject(err);
			} else {
				resolve(`Created  with id : ${webhookAction._id}`);
			}
		});
	});
};
