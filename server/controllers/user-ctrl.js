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
const Main = require("../models/user-main");
const Profile = require("../models/user-profile");

// @route POST api/users/register
// @desc Register user
// @access Public
myRegister = (req, res) => {
    // Form validation

    const {errors, isValid} = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Auth.findOne({username: req.body.username}).then(user => {
        if (user) {
            return res.status(400).json({username: "Username already exists"});
        } else {
            const newUser = new Auth({
                username: req.body.username,
                password: req.body.password
            });

            // Hash password before saving in database
            // bcrypt.genSalt(10, (err, salt) => {
            //     bcrypt.hash(newUser.password, salt, (err, hash) => {
            //         if (err) throw err;
            //         newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                // });
            // });
        }
    });
};

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


getProfileByUsername = async (req, res) => {

    await Profile.findOne({username: req.body.username}, (err, profile) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        return res.status(200).json({success: true, data: profile})
    }).catch(err => console.log(err))
};


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
    myRegister,
    myLogin,
    getProfileByUsername,

};
