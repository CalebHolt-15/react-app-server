//server
import express from "express"
import todolistRouter from "./res/todo/todolist.router.js"
import employeeRouter from "./res/employee/employee.router.js"
import cors from "cors"

import { createProxyMiddleware } from "http-proxy-middleware"

const app = express()

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: [
      "Origin",
      "Content-Type",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin"
    ]
  })
)

app.use("/api1/TODO", todolistRouter)
// app.use("/server1/api2/employee", employeeRouter)

app.listen(8089, () => console.log("Server Started at 8089"))
