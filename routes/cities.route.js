const router =  require('express').Router();
// const BodyParser = require('body-parser')
const CityController = require('../controller/city/city.controller')
const CityDoctorController = require('../controller/city/city.doctors')


// // get all cities 
router.get('/',CityController.getCities);

// get City Data 
router.get('/:id',CityController.getCityData)


// get Doctors in City 
router.get('/:id/doctors',CityDoctorController.getCityDoctors);



module.exports = router;
