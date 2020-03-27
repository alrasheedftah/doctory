const router =  require('express').Router();
// const BodyParser = require('body-parser')
const UserController= require('../controller/user/user.controller')
const UserBookedController = require('../controller/user/user.booked')
// // get All Users
router.get('/',UserController.getUsers);
// get User Data 
router.get('/:id',UserController.getUserData);
// get Booked Data for User
router.get('/:id/booked',UserBookedController.getUserBookeds)

// Post User Route
router.post('/',UserController.addNewUser);

// add booked by user
// router.post('/:id',UserController.addNewUser);


module.exports = router;
