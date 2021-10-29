import { Router } from "express"
import { TodoList } from "./todolist.model.js" //.js must include
const router = Router()

router.get("/todo1", async (req, res) => {
  console.log("todo1")
  res.send(" todo1")
})

router.get("/todo2", async (req, res) => {
  console.log("todo2")
  res.send(" todo2")
})

export default router
