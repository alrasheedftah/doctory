const router =  require('express').Router();

const DoctorController = require('../controller/doctor/doctor.controller');

const DoctorBookedController = require('../controller/doctor/doctor.booked');

// get all todo items in the db
router.get('/',DoctorController.getDoctors);

router.get('/:id',DoctorController.getDoctorData);

router.get('/:id/bookeds',DoctorBookedController.getDoctorBookeds)
// // add a todo item
// app.post('/', (req, res) => {
//   const { name } = req.body;
//   repository.create(name).then((todo) => {
//     res.json(todo);
//   }).catch((error) => console.log(error));
// });

// // delete a todo item
// app.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   repository.deleteById(id).then((ok) => {
//     console.log(ok);
//     console.log(`Deleted record with id: ${id}`);
//     res.status(200).json([]);
//   }).catch((error) => console.log(error));
// });

// // update a todo item
// app.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const todo = { name: req.body.name, done: req.body.done };
//   repository.updateById(id, todo)
//     .then(res.status(200).json([]))
//     .catch((error) => console.log(error));
// });
module.exports = router;

