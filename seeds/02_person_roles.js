/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("person_roles").truncate();
  await knex("person_roles").insert([
    { created_at: Date.now(), updated_at: Date.now(), name: "Lớp trưởng" },
    { created_at: Date.now(), updated_at: Date.now(), name: "Lớp phó" },
    { created_at: Date.now(), updated_at: Date.now(), name: "Xứ đoàn trưởng" },
    { created_at: Date.now(), updated_at: Date.now(), name: "Xứ đoàn phó" },
    { created_at: Date.now(), updated_at: Date.now(), name: "Thư ký" },
    { created_at: Date.now(), updated_at: Date.now(), name: "Thủ quỹ" },
  ]);
};
