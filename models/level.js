const Model = require("./");

class Level extends Model {
  static get tableName() {
    return "levels";
  }

  static get relationMappings() {
    const Person = require("./person");
    return {
      people: {
        relation: Model.HasManyRelation,
        modelClass: Person,
        join: {
          from: "levels.id",
          to: "people.level_id",
        },
      },
    };
  }

  static students() {
    return this.query().where("level_type", "student");
  }
}

module.exports = Level;
