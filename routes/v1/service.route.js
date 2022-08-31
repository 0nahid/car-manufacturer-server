const express = require('express');
const serviceController = require('../../controller/servces.controller');
const router = express.Router();
router.route('/')
    .get(serviceController.getAllServices)
    .post(serviceController.createService);

module.exports = router;