const Knex = require("knex");
const { Model } = require("objection");

const knex = Knex(
  require("../knexfile")[process.env.NODE_ENV || "development"]
);

Model.knex(knex);

knex.on("query", ({ sql, bindings, method, __knexQueryUid }) => {
  console.log(`[${__knexQueryUid}][${method}] ${sql} [${bindings}]`);
});

module.exports = Model;
