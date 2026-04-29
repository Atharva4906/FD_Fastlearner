const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const Task = require("./models/Task");

app.use(bodyParser.json());

// Serve frontend static files from the 'public' folder
app.use(express.static("public")); 

mongoose.connect("mongodb://127.0.0.1:27017/task_manager")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// --- Task API Routes ---

app.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.put("/tasks/:id", async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(task);
});

app.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
});

app.listen(3000, () => {
    console.log("Task Manager app running on http://localhost:3000");
});