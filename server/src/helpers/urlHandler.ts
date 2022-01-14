const puppeteer = require('puppeteer');
const fs2 = require('fs');

exports.getScreenShot = async (url: string, id: string) => {
	const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
	const page = await browser.newPage();
	const screenshotDirPath = `${__dirname}/../screenshots/`;
	const screenshotFullPath = `${screenshotDirPath}${id}-.png`;
	// create screenshot folder in dist (ts does not copy non ts files)
	console.log(screenshotDirPath);
	console.log(screenshotFullPath);

	if (!fs2.existsSync(screenshotDirPath)) {
		fs2.mkdirSync(screenshotDirPath);
	}

	await page.setViewport({
		width: 1920,
		height: 1080,
		deviceScaleFactor: 1,
	});
	await page.goto(url);
	await page.screenshot({ path: screenshotFullPath });
	await browser.close();

	return screenshotFullPath;
};
