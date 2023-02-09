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
