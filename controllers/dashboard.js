const Person = require("../models/person");

module.exports = {
  show: async () => {
    let teachersCountResult = await Person.teachersCount();
    let teachersCount = teachersCountResult[0].count;

    let studentsCountResult = await Person.studentsCount();
    let studentsCount = studentsCountResult[0].count;
    return { teachersCount, studentsCount };
  },
};
