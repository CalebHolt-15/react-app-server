import { Router } from "express"
import { Employee } from "./employee.model.js" //.js must include
const router = Router()

router.get("/hello", async (req, res) => {
  console.log("hello")
  res.send("hello employee")
})

router.get("/hey", async (req, res) => {
  console.log("hey")

  res.send("hey employee")
})

export default router
