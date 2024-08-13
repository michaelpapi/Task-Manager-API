const taskModel = require('../models/taskModel');

exports.createTask = (req, res) => {
  const { title, description, due_date, status } = req.body;
  taskModel.run("INSERT INTO tasks (title, description, due_date, status) VALUES (?, ?, ?, ?)",
    [title, description, due_date, status], function(err) {
  if (err) return res.status(500).json({ error: err.message });
  res.status(201).json({ id: this.lastID, title, description, due_date, status });
});
};

exports.getAllTasks = (req, res) => {
  taskModel.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(rows);
  });
};

exports.getTaskById = (req, res) => {
  const { id } = req.params;
  taskModel.get("SELECT * FROM tasks WHERE id = ?", [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(row);
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, status } = req.body;
  taskModel.run("UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?",
    [title, description, due_date, status, id], function(err) {
  if (err) return res.status(500).json({ error: err.message });
  if (this.changes === 0) return res.status(404).json({ message: "Task not found" });
  res.status(200).json({ id, title, description, due_date, status });
});
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  taskModel.run("DELETE FROM tasks WHERE id = ?", [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: "Task not found" });
    res.status(204).json({ message: "Task deleted successfully" });
  });
};
