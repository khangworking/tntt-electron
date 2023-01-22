/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("levels").truncate();
  await knex("levels").insert([
    {
      name: "Chiên Con 1",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Chiên Con 2",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Chiên Con 3",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Ấu Nhi 1",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Ấu Nhi 2",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Thiếu Nhi 1",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Thiếu Nhi 2",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Nghĩa Sĩ 1",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Nghĩa Sĩ 2",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Nghĩa Sĩ 3",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Nghĩa Sĩ 4",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
    },
    {
      name: "Dự Trưởng",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
    },
    {
      name: "Huynh Trưởng cấp 1",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
    },
    {
      name: "Huynh Trưởng cấp 2",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
    },
    {
      name: "Huynh Trưởng cấp 3",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
    },
    {
      name: "Trợ Uý",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
    },
    {
      name: "Trợ Tá",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
    },
    {
      name: "Tuyên Uý",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
    },
  ]);
};
