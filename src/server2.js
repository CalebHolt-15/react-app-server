import express from "express"
import todolistRouter from "./res/todo/todolist.router.js"
import employeeRouter from "./res/employee/employee.router.js"
import cors from "cors"
import { createProxyMiddleware } from "http-proxy-middleware"

const app2 = express()

app2.use(
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

// app2.use(
//   "/api2",employeeRouter,
//   createProxyMiddleware({
//     target: "http://localhost:8090",
//     changeOrigin: true
//   })
// )
app2.use("/api2/employee", employeeRouter)
// app2.use("/server2/employee", employeeRouter)

app2.listen(8090, () => console.log("server started at port 8090"))
                  