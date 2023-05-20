const Model = require("./");

class LevelManager extends Model {
  static get tableName() {
    return "level_managers";
  }

  static get relationMappings() {
    const Person = require("./person");
    return {
      person: {
        relation: Model.BelongsToOneRelation,
        modelClass: Person,
        join: {
          from: "level_managers.person_id",
          to: "people.id",
        },
      },
    };
  }
}

module.exports = LevelManager;
