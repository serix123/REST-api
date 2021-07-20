const mongoose = require('mongoose')

const employeesSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: String,
  age: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Employees', employeesSchema)