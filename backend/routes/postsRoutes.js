const express = require('express');
const router = express.Router();
const Employees = require('../models/employees.model')


// Routes
router.get('/', (req, res) => {
  res.send('GET request posts')
});

router.post('/add', async (req, res) => {
  // console.log(req.body);

  const employee = new Employees({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    age: req.body.age
  });

  try {
    const savedEmployee = await employee.save();
    res.json(savedEmployee);
  } catch (error) {
    res.json({message: error})
  }
  

});




module.exports = router