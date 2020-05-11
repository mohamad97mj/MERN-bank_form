const keys = require("../config/keys");

const mongoose = require('mongoose');

mongoose
    .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection;

module.exports = db;
