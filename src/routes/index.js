const express = require("express");
const router = express.Router();

const {
  addTodo,
  editTodo,
  deleteTodo,
  getTodos,
} = require("../controller/todos");
router.post("/addTodo", addTodo);
router.post("/updateTodo/:id", editTodo);
router.post("/delete/:id", deleteTodo);
router.get("/todos", getTodos);

module.exports = router;
