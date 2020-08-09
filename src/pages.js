const Database = require("./database/db");

const {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
} = require("./utils/format");

function pageLanding(require, response) {
  return response.render("index.html");
}

async function pageStudy(require, response) {
  const filters = require.query;

  if (!filters.subject || !filters.weekday || !filters.time) {
    return response.render("study.html", { filters, subjects, weekdays });
  }

  const timeToMinutes = convertHoursToMinutes(filters.time);

  const query = `
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS (
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = classes.id
        AND class_schedule.weekday = ${filters.weekday}
        AND class_schedule.time_from <= ${timeToMinutes}
        AND class_schedule.time_to > ${timeToMinutes}
    );
    AND classes.subject = '${filters.subject}'
  `;

  try {
    const db = await Database;
    const proffys = await db.all(query);

    return response.render("study.html", {
      proffys,
      subjects,
      filters,
      weekdays,
    });
  } catch (error) {
    console.log(error);
  }
}

function pageGiveClasses(require, response) {
  const data = require.body;

  const isNotEmpty = Object.keys(data).length > 0;

  if (isNotEmpty) {
    data.subject = getSubject(data.subject);
    proffys.push(data);

    return response.redirect("/study");
  }

  return response.render("give-classes.html", { subjects, weekdays });
}

function saveClasses(require, response) {}

module.exports = { pageLanding, pageStudy, pageGiveClasses, saveClasses };
