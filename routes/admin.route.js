const router =  require('express').Router();
// const BodyParser = require('body-parser')
const DoctorController = require('../controller/admin/doctor.controller');
const SpecialtyController = require('../controller/admin/specialty.controller');
const StateController = require('../controller/admin/state.controller')
const CityController = require('../controller/admin/city.controller')

// // add a Doctor item
router.post('/doctors',DoctorController.addNewDoctor);

router.post('/specialties',SpecialtyController.addNewSpecialty);

router.post('/states',StateController.addNewState);

router.post('/cities',CityController.addNewCity);





module.exports = router;
