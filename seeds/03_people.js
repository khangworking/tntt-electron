/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require("@faker-js/faker");
const { filter } = require("lodash");
const { toSlug, shuffleArray } = require("../utils");
const Level = require("../models/level");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("people").truncate();
  const data = [];
  const student_levels = await Level.students();
  const teacher_levels = await Level.teachers();
  const feast_days = [
    faker.date.between("2021-01-01", "2021-12-31"),
    faker.date.between("2021-01-01", "2021-12-31"),
    faker.date.between("2021-01-01", "2021-12-31"),
    faker.date.between("2021-01-01", "2021-12-31"),
    faker.date.between("2021-01-01", "2021-12-31"),
  ];
  for (let index = 0; index < 300; index++) {
    faker.locale = "vi";
    let female = [true, false][Math.floor(Math.random() * 2)];
    let gender = female ? "female" : "male";
    let name = `${faker.name.lastName(gender)} ${faker.name.firstName(gender)}`;
    faker.locale = "en";
    let forename = faker.lorem.word({
      length: { min: 4, max: 10 },
      strategy: "any-length",
      locale: "en",
    });
    let level_ids = student_levels.map((lv) => lv.id);
    let level_id = level_ids[Math.floor(Math.random() * student_levels.length)];
    data.push({
      name,
      slug: toSlug(name),
      forename,
      birthday: faker.date.birthdate({ min: 5, max: 18, mode: "age" }),
      female,
      active: [true, false][Math.floor(Math.random() * 2)],
      level_id,
      created_at: Date.now(),
      updated_at: Date.now(),
    });
  }

  for (let index = 0; index < 100; index++) {
    faker.locale = "vi";
    let female = [true, false][Math.floor(Math.random() * 2)];
    let gender = female ? "female" : "male";
    let name = `${faker.name.lastName(gender)} ${faker.name.firstName(gender)}`;
    faker.locale = "en";
    let forename = faker.lorem.word({
      length: { min: 4, max: 10 },
      strategy: "any-length",
      locale: "en",
    });
    let level_ids = teacher_levels.map((lv) => lv.id);
    let feast = feast_days[Math.floor(Math.random() * feast_days.length)];
    data.push({
      name,
      forename,
      birthday: faker.date.birthdate({ min: 18, max: 40, mode: "age" }),
      female,
      active: [true, false][Math.floor(Math.random() * 2)],
      level_id: level_ids[Math.floor(Math.random() * teacher_levels.length)],
      phone: "0123456789",
      feast,
      slug: toSlug(name),
      created_at: Date.now(),
      updated_at: Date.now(),
    });
  }

  const glv = shuffleArray(
    filter(
      data,
      (item) =>
        teacher_levels.map((lv) => lv.id).indexOf(item.level_id) > -1 &&
        item.active
    )
  );
  glv[0].role_id = 2;
  glv[1].role_id = 3;
  glv[2].role_id = 4;
  glv[3].role_id = 5;

  await knex("people").insert(data);
};
