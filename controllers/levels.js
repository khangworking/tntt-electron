const Level = require("../models/level");

module.exports = {
  index: async () => {
    const levels = await Level.query().select(
      "levels.*",
      Level.relatedQuery("people")
        .where("people.active", 1)
        .count()
        .as("num_of_people")
    );
    return { levels };
  },
  show: async (_event, id) => {
    const level = await Level.find(id);
    return { level };
  },
};
