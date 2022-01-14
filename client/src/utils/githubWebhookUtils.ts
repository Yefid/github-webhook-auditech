import axios from 'axios';

let host = 'http://localhost:8000/';
if (process.env.NODE_ENV === 'production') {
	host = 'https://github-webhooks-auditech.herokuapp.com/';
}
const url = `${host}api/githubwebhook`;

const getAllActions = () => axios.get(url);

const module = {
	getAllActions,
};
export default module;
