const router =  require('express').Router();
// const BodyParser = require('body-parser')
const SpecialtyController = require('../controller/specialty/specialty.controller')
const SpecialtyDoctorController = require('../controller/specialty/specialty.doctors')


// // get all cities 
router.get('/',SpecialtyController.getSpecialties);

// get City Data 
router.get('/:id',SpecialtyController.getspecialtyData)


// get Doctors in City 
router.get('/:id/doctors',SpecialtyDoctorController.getSpecialtyDoctors);



module.exports = router;
