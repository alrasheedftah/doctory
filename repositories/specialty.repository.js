//repositories/TodoRepository

const Specialty = require('../model/Specialty.model');

class TodoRepository {

  constructor(model) {
    this.model = model;
  }

  // create a new Doctor
  create(data) {
    const specialty = new this.model(data);
    return specialty.save();
  }

  // return all doctors

  findAll() {
    return this.model.find();
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

module.exports = new TodoRepository(Specialty);

