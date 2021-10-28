import express from "express"

const app2 = express()

app2.get("/hey", (req, res) => {
  res.send("Hey world")
})
app2.get("/hey1", (req, res) => {
  res.send("hello world")
})

app2.listen(8090, () => console.log("server started at port 8090"))
