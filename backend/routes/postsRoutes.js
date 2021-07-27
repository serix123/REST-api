const express = require('express');
const router = express.Router();
const Employees = require('../models/employees.model')


// Routes

// get all data from db
router.get('/', async (req, res) => {
  
  try {
    const employees = await Employees.find();
    res.json(employees);
  } catch (error) {
    res.json({ message: error });
  }

});

// retrieve specific data
router.get('/:employeeId', async (req, res) => {
  // console.log(req.params.employeeId)

  try {
    const employee = await Employees.find({_id:req.params.employeeId});
    res.json(employee);
  } catch (error) {
    res.json({ message: error });
  }
});


// send data to db
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

// remove data from db
router.delete('/remove/:employeeId', async (req, res) => {
  // console.log(req.body);

  try {
    const removedEmployee = await Employees.remove({_id:req.params.employeeId})
    res.json(removedEmployee);
  } catch (error) {
    res.json({message: error})
  }

});

router.patch('/update/:employeeId', async(req, res) => {

  try {
    const updatedEmployee = await Employees.updateOne(
      { _id: req.params.employeeId },
      {
        $set: {
          first_name: req.body.first_name,
        }
      })
    res.json(updatedEmployee);
  } catch (error) {
    res.json({message: error})
  }
})

module.exports = router