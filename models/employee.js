const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    dateOfJoining: {type: Date, default: new Date()},
    title: String,
    department: String,
    employeeType: String,
    currentStatus: Boolean

});

const Employee = mongoose.model('Employee', EmployeeSchema, "employee");
module.exports = Employee;