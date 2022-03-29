const express = require("express");
const router = express.Router();

const {
  addTodo,
  editTodo,
  deleteTodo,
  getTodos,
} = require("../controller/todos");
router.post("/addTodo", addTodo);
router.put("/updateTodo/:id", editTodo);
router.delete("/delete/:id", deleteTodo);
router.get("/todos", getTodos);

module.exports = router;
