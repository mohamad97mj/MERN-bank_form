const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema(
    {
        username: {type: String},
        date: {type: String},
        data: {
            moneyRequired: String,
            customerContents: [
                {
                    cType: String,
                    amount: String,
                },
            ],

            remittanceContents: [
                {
                    originCountry: String,
                    originConnectionCheck: Boolean,
                    originBanks: [
                        {
                            nameCheck: Boolean,
                            name: String,
                            minimumAmount: String,
                            minInDollar: String,
                            maximumAmount: String,
                            maxInDollar: String,
                            negotiationLevel: String
                        }
                    ],
                    originPartners: [
                        {
                            name: String,
                            countries: [
                                {
                                    name: String,
                                    amount: String,
                                }
                            ]
                        }
                    ],

                    destinationCountry: String,
                    destinationConnectionCheck: Boolean,
                    destinationBanks: [
                        {
                            nameCheck: Boolean,
                            name: String,
                            minimumAmount: String,
                            minInDollar: String,
                            maximumAmount: String,
                            maxInDollar: String,
                            negotiationLevel: String

                        }
                    ],
                    destinationPartners: [
                        {
                            name: String,
                            countries: [
                                {
                                    name: String,
                                    amount: String,
                                }
                            ]
                        }
                    ],
                },
            ],
        },
    },
);

module.exports = Form = mongoose.model("forms", FormSchema);
