const Model = require("./");
const LevelManager = require("./level_manager");

class Level extends Model {
  static get tableName() {
    return "levels";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        level_type: { type: "string", minLength: 1, maxLength: 255 },
        sort_order: { type: "integer" },
        created_at: { type: ["string", "null"] },
        updated_at: { type: ["string", "null"] },
      },
    };
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
      level_managers: {
        relation: Model.HasManyRelation,
        modelClass: LevelManager,
        join: {
          from: "levels.id",
          to: "level_managers.level_id",
        },
      },
      managers: {
        relation: Model.ManyToManyRelation,
        modelClass: Person,
        join: {
          from: "levels.id",
          through: {
            from: "level_managers.level_id",
            to: "level_managers.person_id",
          },
          to: "people.id",
        },
      },
    };
  }

  static students() {
    return this.query().where("level_type", "student");
  }

  static teachers() {
    return this.query().where("level_type", "teacher");
  }

  static optionsForSelector() {
    return this.query()
      .where("level_type", "student")
      .orWhere("level_type", "teacher");
  }
}

module.exports = Level;
