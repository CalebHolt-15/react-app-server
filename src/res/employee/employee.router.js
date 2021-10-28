// import express from "express"
import { Router } from "express"
import { Employee } from "./employee.model.js" //.js must include
const router = Router()

//RESTFUL APIS
//getall
router.get("/", async (req, res) => {
  try {
    const employee = await Employee.find() //async:tillitget,thenonly itwillgoto nxtline{whilewaiting itwillexecotherlinesfrom diffrblock}
    res.json(employee)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//getOne
router.get("/:id", getEmployee, (req, res) => {
  // res.send({ name: res.employee.name, date: res.employee.date })
  res.json(res.employee)
})

//add
router.post("/addemployee", async (req, res) => {
  console.log("addemployee")
  try {
    const employee = await Employee.create(req.body) //async:tillitget,thenonly itwillgoto nxtline{whilewaiting itwillexecotherlinesfrom diffrblock}
    console.log("req.body:", req.body)
    res.status(201).json(employee)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//update only the info passed by user
router.patch("/:id", getEmployee, async (req, res) => {
  if (req.body.name != null) {
    res.employee.name = req.body.name
  }
  if (req.body.date != null) {
    res.employee.date = req.body.date
  }
  try {
    const UpdatedEmployee = await res.employee.save()
    res.json(UpdatedEmployee)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//update entire info at once
router.put("/:id", getEmployee, async (req, res) => {
  if (req.body.name != null) {
    res.employee.name = req.body.name
  }
  if (req.body.date != null) {
    res.employee.date = req.body.date
  }
  try {
    const EditedEmployee = await res.employee.save()
    res.json(EditedEmployee)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//delete
router.delete("/:id", getEmployee, async (req, res) => {
  try {
    await res.employee.remove()
    res.json({ message: "Deleted Employee" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//middleware
async function getEmployee(req, res, next) {
  let employee //important
  try {
    employee = await Employee.findById(req.params.id)
    if (employee == null) {
      return res.status(404).json({ message: "Employee Notfound" }) //return:gono further/nxtline
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

  res.employee = employee
  next()
}

export default router
