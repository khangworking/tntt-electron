/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("people", (table) => {
    table.increments();
    table.string("name");
    table.string("forename");
    table.date("birthday");
    table.boolean("active").notNullable().defaultTo(true);
    table.date("feast");
    table.boolean("female").notNullable().defaultTo(false);
    table.string("phone");
    table.bigint("level_id");
    table.string("role");
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("people");
};
