const Model = require("./");

class PersonRole extends Model {
  static get tableName() {
    return "person_roles";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        index: [
          {
            name: "person_role_name_unique",
            unique: true,
            columns: ["name"],
          },
        ],
      },
    };
  }

  static search(term) {
    return this.query().where("name", "like", `%${term}%`);
  }
}

module.exports = PersonRole;
