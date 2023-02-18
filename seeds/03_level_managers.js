const { each } = require("lodash");
const Level = require("../models/Level");
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
    const numOfPeople = getRandomArbitrary(1, 2);
    for (let i = 0; i < numOfPeople; i++) {
      let ps = people.pop();
      data.push({ level_id: level.id, person_id: ps.id });
    }
  });
  await knex("level_managers").insert(data);
};
