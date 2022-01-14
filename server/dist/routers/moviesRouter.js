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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const axios = require('axios');
const router = express.Router();
router.route('/').get((req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    axios
        .get('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
        // handle success
        console.log(response.data.slice(0, 5));
        return resp.json(response.data.slice(0, 6));
    })
        .catch((error) => {
        // handle error
        console.log(error);
        return resp.json(error);
    });
}));
router.route('/github-webhook').post((req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.payload);
    return resp.send('payload successfully received');
}));
module.exports = router;
