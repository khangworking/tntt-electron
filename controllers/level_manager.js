const LevelManager = require("../models/level_manager");

module.exports = {
  create: async (_event, params) => {
    try {
      const manager = await LevelManager.query().insert(params);
      return { success: true, manager };
    } catch (error) {
      let validation = false;
      if (error instanceof ValidationError) {
        console.error("Validation error:", error.message);
        validation = true;
      } else {
        console.error("Insert error:", error.message);
      }
      return { success: false, error: error.message, validation };
    }
  },
  switch: async (_event, { id, params }) => {
    const rows = await LevelManager.query().update(params).where("id", id);
    if (!!rows) {
      return { success: true };
    }
    return { success: false };
  },
  remove: async (_event, id) => {
    const rows = await LevelManager.query().deleteById(id);
    if (!!rows) {
      return { success: true };
    }
    return { success: false };
  },
};
