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
      sort_order: 1,
    },
    {
      name: "Chiên Con 2",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
      sort_order: 2,
    },
    {
      name: "Chiên Con 3",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
      sort_order: 3,
    },
    {
      name: "Ấu Nhi 1",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
      sort_order: 4,
    },
    {
      name: "Ấu Nhi 2",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
      sort_order: 5,
    },
    {
      name: "Thiếu Nhi 1",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
      sort_order: 6,
    },
    {
      name: "Thiếu Nhi 2",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
      sort_order: 7,
    },
    {
      name: "Nghĩa Sĩ 1",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
      sort_order: 8,
    },
    {
      name: "Nghĩa Sĩ 2",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
      sort_order: 9,
    },
    {
      name: "Nghĩa Sĩ 3",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
      sort_order: 10,
    },
    {
      name: "Nghĩa Sĩ 4",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "student",
      sort_order: 11,
    },
    {
      name: "Dự Trưởng",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
      sort_order: 12,
    },
    {
      name: "Huynh Trưởng cấp 1",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
      sort_order: 13,
    },
    {
      name: "Huynh Trưởng cấp 2",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
      sort_order: 14,
    },
    {
      name: "Huynh Trưởng cấp 3",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
      sort_order: 15,
    },
    {
      name: "Trợ Uý",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
      sort_order: 16,
    },
    {
      name: "Trợ Tá",
      created_at: Date.now(),
      updated_at: Date.now(),
      level_type: "teacher",
      sort_order: 17,
    },
    {
      name: "Tuyên Uý",
      created_at: Date.now(),
      updated_at: Date.now(),
      sort_order: 18,
    },
  ]);
};
