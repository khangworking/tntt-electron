const { ValidationError } = require("objection");
const Person = require("../models/person");

module.exports = {
  async delete(_event, id) {
    const person = await Person.query().findById(id);
    const [success, error] = await person.deactivate();
    if (success) return true;
    console.log(error);
    return false;
  },
  async create(_event, params) {
    try {
      const person = await Person.query().insert(params);
      return { success: true, person };
    } catch (error) {
      let validation = false;
      if (error instanceof ValidationError) {
        console.error("Validation error:", error.message);
        validation = true;
      } else {
        console.error("Insert error:", error.message);
      }
      return { success: false, error: error.message, validation };
    }
  },
};
