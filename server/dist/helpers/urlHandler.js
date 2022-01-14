"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const puppeteer = require('puppeteer');
const fs2 = require('fs');
exports.getScreenShot = (url, id) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer.launch({ args: ['--no-sandbox'] });
    const page = yield browser.newPage();
    const screenshotDirPath = `${__dirname}/../screenshots/`;
    const screenshotFullPath = `${screenshotDirPath}${id}-.png`;
    // create screenshot folder in dist (ts does not copy non ts files)
    console.log(screenshotDirPath);
    console.log(screenshotFullPath);
    if (!fs2.existsSync(screenshotDirPath)) {
        fs2.mkdirSync(screenshotDirPath);
    }
    yield page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
    });
    yield page.goto(url);
    yield page.screenshot({ path: screenshotFullPath });
    yield browser.close();
    return screenshotFullPath;
});
