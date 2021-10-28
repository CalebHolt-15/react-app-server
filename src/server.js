//server
import mongoose from "mongoose"
import express from "express"
import todolistRouter from "./res/todo/todolist.router.js"

const app = express()

// mongoose.connect(process.env.DATABASE_URL)
// const db = mongoose.connection
// db.on("error", (error) => console.error(error))
// db.once("open", () => console.log("Connected DB"))

app.use(express.json()) //allowservertoaccept json asabody insideGET/POST/..element
// app.use(urlencoded({ extended: true }))

app.get("/hello", (req, res) => {
  res.send("hello world")
})
app.get("/hello1", (req, res) => {
  res.send("hello world")
})

app.use("/todo", todolistRouter)
// app.use("/employee", employeeRouter)

app.listen(8089, () => console.log("Server Started at 8089"))
