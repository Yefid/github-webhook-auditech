"use strict";
const mongoose = require('mongoose');
const mongoString = process.env.MONGOURI;
mongoose
    .connect(mongoString, {
    serverSelectionTimeoutMS: 5000,
})
    .catch((err) => console.log(err.reason));
