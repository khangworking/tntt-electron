const Model = require("./");
const Level = require("./Level");
const { groupBy } = require("lodash");

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

  static students(filters = {}) {
    const limit = filters.per || 25;
    const offset = ((filters.page || 1) - 1) * limit;
    return this.query()
      .select([
        "people.*",
        this.raw(
          "replace(people.slug, rtrim(people.slug, replace(people.slug, '-', '')), '') AS first_name"
        ),
      ])
      .withGraphJoined("level")
      .where("active", 1)
      .whereIn("level.id", Level.students().select("id"))
      .orderBy("level.sort_order", "asc")
      .orderByRaw("first_name asc")
      .limit(limit)
      .offset(offset);
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
}

module.exports = Person;
