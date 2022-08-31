const express = require('express');
const serviceController = require('../../controller/servces.controller');
const { limiter } = require('../../middleware/limitter');
const { viewCountss } = require('../../middleware/viewCount');
const router = express.Router();
router.route('/')
    .get(serviceController.getAllServices)
    .post(serviceController.createService);

router.route('/:id')
    .get(viewCountss, limiter, serviceController.getServiceById)
    .put(serviceController.updateService)
    .delete(serviceController.deleteService);
module.exports = router;