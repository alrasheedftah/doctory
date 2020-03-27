const router =  require('express').Router();
// const BodyParser = require('body-parser')
const BookedController = require('../controller/booked/booke.controller')
// // add a Doctor item
router.get('/',BookedController.getBookeds);

// Post User Route
router.post('/',BookedController.addNewBooke);



module.exports = router;
