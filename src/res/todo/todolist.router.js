// import express from "express"
import { Router } from "express"
import { TodoList } from "./todolist.model.js" //.js must include
const router = Router()

router.get("/hello", async (req, res) => {
  res.json("hello john")
})

//RESTFUL APIS
//getall
router.get("/", async (req, res) => {
  try {
    const todolist = await TodoList.find() //async:tillitget,thenonly itwillgoto nxtline{whilewaiting itwillexecotherlinesfrom diffrblock}
    res.json(todolist)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//getOne
router.get("/:id", getTodo, (req, res) => {
  // res.send({ name: res.todo.name, date: res.todo.date })
  res.json(res.todo)
})

//add
router.post("/addtodo", async (req, res) => {
  console.log("addtodo")
  try {
    const todolist = await TodoList.create(req.body) //async:tillitget,thenonly itwillgoto nxtline{whilewaiting itwillexecotherlinesfrom diffrblock}
    console.log("req.body:", req.body)
    res.status(201).json(todolist)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//update only the info passed by user
router.patch("/:id", getTodo, async (req, res) => {
  if (req.body.name != null) {
    res.todo.name = req.body.name
  }
  if (req.body.date != null) {
    res.todo.date = req.body.date 
  }
  try {
    const UpdatedTodo = await res.todo.save()
    res.json(UpdatedTodo)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//update entire info at once
router.put("/:id", getTodo, async (req, res) => {
  if (req.body.name != null) {
    res.todo.name = req.body.name
  }
  if (req.body.date != null) {
    res.todo.date = req.body.date
  }
  try {
    const EditedTodo = await res.todo.save()
    res.json(EditedTodo)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//delete
router.delete("/:id", getTodo, async (req, res) => {
  try {
    await res.todo.remove()
    res.json({ message: "Deleted Todo" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//middleware
async function getTodo(req, res, next) {
  let todo //important
  try {
    todo = await TodoList.findById(req.params.id)
    if (todo == null) {
      return res.status(404).json({ message: "Todo Notfound" }) //return:gono further/nxtline
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

  res.todo = todo
  next()
}

export default router
