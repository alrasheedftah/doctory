//repositories/TodoRepository

const State = require('../model/state.model');

class StateRepository {

  constructor(model) {
    this.model = model;
  }

  // create a new Doctor
  create(data) {
    const state = new this.model(data);
    return state.save();
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

module.exports = new StateRepository(State);

