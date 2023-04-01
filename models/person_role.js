import Model from "./";

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
}

export default PersonRole;
