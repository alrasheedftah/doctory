//repositories/TodoRepository

const Booke = require('../model/booked.model');

class BookeRepository {

  constructor(model) {
    this.model = model;
  }

  // create a new Doctor
  create(data) {
    const booke = new this.model(data);
    return booke.save();
  }

  // return all doctors

  findAll() {
    return this.model.find();
  }

   findAll(query,modelName) {
    return  this.model.find(query).populate(modelName);
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

module.exports = new BookeRepository(Booke);

