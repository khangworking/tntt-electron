const Knex = require("knex");
const { Model } = require("objection");
const args = process.argv.slice(2);
const dbpathArg = args.find((arg) => arg.startsWith("--dbpath="));

let filename = "./tntt.db";
if (!!dbpathArg) {
  filename = dbpathArg.split("=")[1];
}

const knex = Knex({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename,
  },
});

const reachToLatestMigration = async () => {
  await knex.migrate.latest();
};
reachToLatestMigration();

knex.on("query", ({ sql, bindings, method, __knexQueryUid }) => {
  console.log(`[${__knexQueryUid}][${method}] ${sql} [${bindings}]`);
});

Model.knex(knex);
module.exports = Model;
