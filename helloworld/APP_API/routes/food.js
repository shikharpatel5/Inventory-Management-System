const express = require('express');
const router = express.Router();

const ctrlfood = require('../controllers/food');

router
    .route('/food')
    .get(ctrlfood.getFoods)
    .post(ctrlfood.createFood);

router
    .route('/food/:foodid')
    .get(ctrlfood.getSingleFood)
    .put(ctrlfood.updateFood)
    .delete(ctrlfood.deleteFood);

module.exports = router;