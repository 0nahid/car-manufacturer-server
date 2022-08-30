const express = require('express');
const router = express.Router();
router.route('/')
    .get(async (req, res) => res.send('services get hitted'))
    .post(async (req, res) => res.send('services post hitted'));

module.exports = router;