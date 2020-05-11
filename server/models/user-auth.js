
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthSchema = new Schema(
    {
        username: { type: {String, Number}, required: true },
        password: { type: String, required: true },

    },
);

module.exports = Auth = mongoose.model("users", AuthSchema);
