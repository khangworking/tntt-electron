const Model = require("./");

class LevelManager extends Model {
  static get tableName() {
    return "level_managers";
  }
}

module.exports = LevelManager;
