import mongoose from "mongoose"

const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

export const Employee = mongoose.model("employee", employeeSchema)
