//repositories/TodoRepository

const City = require('../model/city.model');

class CityRepository {

  constructor(model) {
    this.model = model;
  }

  // create a new Doctor
  create(data) {
    const city = new this.model(data);
    return city.save();
  }

  // return all doctors

  findAll() {
    return this.model.find();
  }

  // find all by specific query
  findAll(query) {
    return this.model.find(query);
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

module.exports = new CityRepository(City);

