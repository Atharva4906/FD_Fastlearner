const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const User = require("./models/User")

app.use(cors())
app.use(bodyParser.json())

app.use(express.static("public"))

mongoose.connect("mongodb://127.0.0.1:27017/Assignment_9")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

// CREATE
app.post("/", async (req, res) => {
    const user = new User(req.body)
    await user.save()
    res.json(user)
})

// READ ALL USERS
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// READ ONE USER
app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

// UPDATE
app.put("/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(user)
})

// DELETE
app.delete("/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({message:"User deleted"})
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})