const express = require('express');

const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/login', UserCtrl.myLogin);
router.post('/register', UserCtrl.myRegister);
router.post('/profile', UserCtrl.getProfileByUsername);

module.exports = router;

