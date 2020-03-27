const router =  require('express').Router();
// const BodyParser = require('body-parser')
const StateController = require('../controller/state/state.controller')
const StateCityController = require('../controller/state/state.cities')

// // get All State 
router.get('/',StateController.getStates);

// // get Data for  State 
router.get('/:id',StateController.getStateData);


// get Cities in State
router.get('/:id/cities',StateCityController.getStateCities);


module.exports = router;
