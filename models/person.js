const Model = require("./");
const Level = require("./level");
const { groupBy } = require("lodash");
const { toSlug } = require("../utils");
const PersonRole = require("./person_role");

class Person extends Model {
  static get tableName() {
    return "people";
  }

  async $beforeInsert() {
    this.slug = toSlug(this.name);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        slug: { type: "string", minLength: 1, maxLength: 255 },
        forename: { type: ["string", "null"], minLength: 1, maxLength: 255 },
        bithday: { type: ["string", "null"] },
        active: { type: "boolean", default: true },
        feast: { type: ["string", "null"], maxLength: 5 },
        phone: { type: ["string", "null"], pattern: "^[0-9]{10}$" },
        level_id: { type: "integer" },
        role_id: { type: ["integer", "null"] },
        created_at: { type: ["string", "null"] },
        updated_at: { type: ["string", "null"] },
      },
    };
  }

  static get relationMappings() {
    return {
      level: {
        relation: Model.BelongsToOneRelation,
        modelClass: Level,
        join: {
          from: "people.level_id",
          to: "levels.id",
        },
      },
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: PersonRole,
        join: {
          from: "people.role_id",
          to: "person_roles.id",
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

  static managers() {
    return this.query()
      .withGraphJoined("level")
      .where("active", 1)
      .whereIn("level.name", [
        "Dự Trưởng",
        "Huynh Trưởng cấp 1",
        "Huynh Trưởng cấp 2",
        "Huynh Trưởng cấp 3",
        "Trợ Uý",
      ]);
  }

  static async students(filters = {}) {
    const limit = filters.per || 25;
    const offset = ((filters.page || 1) - 1) * limit;
    const theQuery = this.query()
      .withGraphJoined("level", "role")
      .where("active", 1)
      .whereIn("level.id", Level.students().select("id"))
      .orderBy("level.sort_order", "asc")
      .orderByRaw("first_name asc");
    let students = theQuery;
    if (!!filters.level_id) {
      students = students.where("level.id", filters.level_id);
    }
    if (!!filters.gender) {
      students = students.where("female", filters.gender);
    }
    students = await students
      .select([
        "people.*",
        this.raw(
          "replace(people.slug, rtrim(people.slug, replace(people.slug, '-', '')), '') AS first_name"
        ),
      ])
      .limit(limit)
      .offset(offset);
    const total = await theQuery.count("*", { as: "count" });
    return { students, total: !!total[0] && total[0]["count"] };
  }

  static student(id) {
    return this.query().withGraphJoined("level").findById(id);
  }

  static async groupByFeast() {
    let results = await this.query()
      .withGraphJoined("level")
      .where("active", 1)
      .whereIn("level.id", Level.teachers().select("id"))
      .orderBy("feast");
    results = groupBy(results, (item) => {
      const feast = new Date(item.feast);
      return `${feast.getDate()}/${feast.getMonth() + 1}`;
    });
    return results;
  }

  async deactivate() {
    try {
      await this.$query().patch({ active: false });
      return [true, null];
    } catch (error) {
      return [false, error];
    }
  }
}

module.exports = Person;
