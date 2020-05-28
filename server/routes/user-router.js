const express = require('express');

const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/login', UserCtrl.myLogin);
// router.post('/register', UserCtrl.myRegister);
router.post('/profile', UserCtrl.getProfileByUsername);
router.post('/profiles', UserCtrl.myPostProfile);
router.post('/form', UserCtrl.getFormByUsername);
router.post('/forms', UserCtrl.myPostForm);

module.exports = router;

