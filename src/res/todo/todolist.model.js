import mongoose from "mongoose"

const todoListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
  // date: {
  //   type: Date,
  //   required: true,
  //   default: Date.now,
  // },
})

export const TodoList = mongoose.model("todolist", todoListSchema)
