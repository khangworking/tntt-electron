const { each } = require("lodash");
const Level = require("../models/level");
const Person = require("../models/person");
const { getRandomArbitrary } = require("../utils");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("level_managers").truncate();
  const people = await Person.managers().orderByRaw("random()");
  const levels = await Level.students();
  let data = [];

  each(levels, (level) => {
    const numOfPeople = getRandomArbitrary(1, 3);
    for (let i = 0; i < numOfPeople; i++) {
      let ps = people.pop();
      let role = i === 0 ? "teacher" : "supporter";
      data.push({
        level_id: level.id,
        person_id: ps.id,
        created_at: Date.now(),
        updated_at: Date.now(),
        role,
      });
    }
  });
  await knex("level_managers").insert(data);
};
