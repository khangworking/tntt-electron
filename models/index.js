const Knex = require("knex");
const { Model } = require("objection");

const knex = Knex(
  require("../knexfile")[process.env.NODE_ENV || "development"]
);

Model.knex(knex);

knex.on("query", (payload) => console.log(payload.sql));

module.exports = Model;
