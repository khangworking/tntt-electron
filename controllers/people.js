const Person = require("../models/person");

module.exports = {
  async delete(_event, id) {
    const person = await Person.query().findById(id);
    const [success, error] = await person.deactivate();
    if (success) return true;
    console.log(error);
    return false;
  },
};
