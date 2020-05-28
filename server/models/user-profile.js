const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
    {
        date: {type : String, required: true},
        username: {type: String, required: true},
        name: {type: String, required: true},
        nationalCode: {type: String, required: true},
        state: {type: String, required: true},
        city: {type: String, required: true},
        address: {type: String, required: true},
        postalCode: {type: String, required: true},
        telephone: {type: String, required: true},
        lastLicenseNumber: {type: String, required: true},
        lastLicenseValidityDate: {type: String, required: true},
        registerNumber: {type: String, required: true},
        manager: {type: String, required: true},
        mobile: {type: String},
        socialNetworkAccess: {type: Boolean},
    },
);

module.exports = Profile = mongoose.model("profiles", ProfileSchema);
