const express = require('express');
const router = express.Router();

const ctrlFood = require('../controllers/food');
/* GET home page. */
router.get('/', ctrlFood.homelist);
router.get('/foods/:foodid', ctrlFood.foodInfo);


router.route('/new')
      .get(ctrlFood.addnewFood)
      .post(ctrlFood.doAddnewfood);

module.exports = router;
