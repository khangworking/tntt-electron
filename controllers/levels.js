const { ValidationError } = require("objection");
const Level = require("../models/level");
const Person = require("../models/person");

module.exports = {
  index: async () => {
    const levels = await Level.query()
      .withGraphJoined("level_managers.person.level")
      .select(
        "levels.*",
        Level.relatedQuery("people")
          .where("people.active", 1)
          .count()
          .as("num_of_people")
      );
    return { levels };
  },
  show: async (_event, id) => {
    const level = await Level.query()
      .withGraphJoined("level_managers.person.level")
      .select(
        "levels.*",
        Level.relatedQuery("people")
          .where("people.active", 1)
          .count()
          .as("num_of_people")
      )
      .findById(id);
    const people = await Person.query()
      .where("active", 1)
      .where("level_id", level.id)
      .select([
        "people.*",
        Person.raw(
          "replace(people.slug, rtrim(people.slug, replace(people.slug, '-', '')), '') AS first_name"
        ),
      ])
      .orderByRaw("first_name asc");
    return { level, people };
  },
  create: async (_event, params) => {
    try {
      console.log(params);
      const level = await Level.query().insert(params);
      return { success: true, level };
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
