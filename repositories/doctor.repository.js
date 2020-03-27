//repositories/TodoRepository

const Doctor = require('../model/Doctor.model').Doctor;

class DoctorRepository {

  constructor(model) {
    this.model = model;
  }

  // create a new Doctor
  create(data) {
    const doctor = new this.model(data);
    return doctor.save();
  }

  // return all doctors

  findAll() {
    return this.model.find();
  }


  // find all by query
  findAll(query) {
    return this.model.find(query).populate('specialty');
  }


  //find doctor by the id
  findById(id) {
    return this.model.findById(id);
  }

    // delete todo
  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  //update todo
  updateById(id, object) {
    const query = { _id: id };
    return this.model.findOneAndUpdate(query, { $set: { name: object.name, done: object.done } });
  }
}

module.exports = new DoctorRepository(Doctor);

