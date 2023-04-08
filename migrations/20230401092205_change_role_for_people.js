/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("people", (table) => {
    table.dropColumn("role");
    table.bigInteger("role_id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("people", (table) => {
    table.dropColumn("role_id");
    table.string("role");
  });
};
