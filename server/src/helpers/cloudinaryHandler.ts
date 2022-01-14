const cloudinary = require('cloudinary');

exports.uploadImg = (path: string) => {
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_NAME,
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
	});
	return cloudinary.uploader.upload(path);
};
