const Level = require("../models/level");

module.exports = {
  index: async () => {
    const levels = await Level.query()
      .withGraphJoined("managers.level")
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
      .withGraphJoined("[managers.level,people]")
      .select(
        "levels.*",
        Level.relatedQuery("people")
          .where("people.active", 1)
          .count()
          .as("num_of_people")
      )
      .findById(id);
    return { level };
  },
  create: async (_event, params) => {
    try {
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
