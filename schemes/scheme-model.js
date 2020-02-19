const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function add(scheme) {
  return db("schemes").insert(scheme, "id");
}

function update(id, changes) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .select(
      "schemes.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .where({ schemes_id: id })
    .orderBy("steps.steps_number");
}
