const Model = require("./");
const Level = require("./Level");

class Person extends Model {
  static get tableName() {
    return "people";
  }

  static get relationMappings() {
    const Level = require("./level");
    return {
      level: {
        relation: Model.BelongsToOneRelation,
        modelClass: Level,
        join: {
          from: "people.level_id",
          to: "levels.id",
        },
      },
    };
  }

  static teachers() {
    return this.query()
      .withGraphJoined("level")
      .where("active", 1)
      .whereIn("level.id", Level.teachers().select("id"))
      .orderBy("level.sort_order", "desc");
  }
}

module.exports = Person;
