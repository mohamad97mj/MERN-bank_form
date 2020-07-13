const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// Load input validation
const validateLoginInput = require("../validation/Auth");
// const validateRegisterInput = require("../validation/register");

// Load Auth model
const Auth = require("../models/user-auth");
const Form = require("../models/user-main");
const Profile = require("../models/user-profile");

const clone = require('rfdc')();

// const clone = (items) => items.map(item => Array.isArray(item) ? this.clone(item) : item);


// @route POST api/users/register
// @desc Register user
// @access Public
// myRegister = (req, res) => {
// Form validation

// const {errors, isValid} = validateLoginInput(req.body);

// Check validation
// if (!isValid) {
//     return res.status(400).json(errors);
// }

// Auth.findOne({username: req.body.username}).then(user => {
//     if (user) {
//         return res.status(400).json({username: "Username already exists"});
//     } else {
//         const newUser = new Auth({
//             username: req.body.username,
//             password: req.body.password
//         });

// Hash password before saving in database
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//         if (err) throw err;
//         newUser.password = hash;
//         newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err));
// });
// });
//         }
//     });
// };

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
myLogin = (req, res) => {
    // Form validation

    const {errors, isValid} = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {

        return res.status(400).json(errors);
    }
    const username = req.body.username;
    const password = req.body.password;

    Auth.findOne({username: username}).then(user => {

        if (!user) {
            return res.status(404).json({usernamenotfound: "username not found"});
        }


        const isMatch = password === user.password;

        // Check password
        // bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {


            // Auth matched
            // Create JWT Payload

            const payload = {
                username: user.username,
            };

            // Sign token
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                }
            );
        } else {
            return res
                .status(400)
                .json({passwordincorrect: "Password incorrect"});
        }
        // });
    });
};

//
getProfileByUsername = async (req, res) => {

    await Profile.find({username: req.body.username}, (err, profiles) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        return res.status(200).json({success: true, data: profiles})
    }).catch(err => console.log(err))
};
//
//
getFormByUsername = async (req, res) => {

    // console.log("username here in getForm is : " + req.body.username);
    await Form.find({username: req.body.username}, (err, forms) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        return res.status(200).json({success: true, data: forms})
    }).catch(err => console.log(err))
};
//
myPostProfile = (req, res) => {


    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a profile',
        })
    }
    console.log("username is : " + body.username)

    const profile = new Profile(
        // body
        {
            date: body.date,
            username: body.username,
            name: body.name,
            nationalCode: body.nationalCode,
            state: body.state,
            city: body.city,
            address: body.address,
            postalCode: body.postalCode,
            telephone: body.telephone,
            lastLicenseNumber: body.lastLicenseNumber,
            lastLicenseValidityDate: body.lastLicenseValidityDate,
            registerNumber: body.registerNumber,
            manager: body.manager,
            socialNetworkAccess: body.socialNetworkAccess,
            mobile: body.mobile,
        }
    );


    if (!profile) {
        console.log("not a profile");
        return res.status(400).json({success: false, error: err})
    }
    // const util = require('util');
    // console.log(util.inspect(body, {depth: null}));

    // delete profile._id;

    // profile
    profile
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: profile._id,
                message: 'Profile created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Profile not created!',
            })
        })

    // return true;
};


myPostForm = (req, res) => {

    const body = req.body;


    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a profile',
        })
    }


    const form = new Form(
        // body
        {
            username: body.username,
            date: body.date,
            data: body.data,
        }
    );

    if (!form) {
        return res.status(400).json({success: false, error: err})
    }

    form
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: form._id,
                message: 'Form created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Form not created!',
            })
        })
};
//
// myDisplayMainForm = (req, res) => {
//     const { errors, isValid } = validateLoginInput(req.body);
//
//     // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }
//
//     const username = req.body.username;
//     const password = req.body.password;
//
//     // Find user by email
//     // Auth.findOne({ username: username }).then(user => {
//
// };


module.exports = {
    // myRegister,
    myLogin,
    getProfileByUsername,
    getFormByUsername,
    myPostProfile,
    myPostForm,
};
