import axios from 'axios';

let host = 'http://localhost:8000/';
if (process.env.NODE_ENV === 'production') {
	host = 'https://auditech-github-webhook.herokuapp.com/';
}
const url = `${host}api/githubwebhook`;

const getAllActions = () => axios.get(url);

const module = {
	getAllActions,
};
export default module;
