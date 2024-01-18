require('./db');
const Employee = require('./employee')

const tempEmployees = 
    [{ firstName: "Akshaya", lastName: "Guna", age: 26, dateOfJoining: new Date("2023-01-05"), title: "Employee", department: "Engineering", employeeType: "Full Time", currentStatus: false },
    {firstName: "Viki", lastName: "M", age: 30, dateOfJoining: new Date("2022-02-20"), title: "Director", department: "IT", employeeType: "Full Time", currentStatus: false }
 ];

 Employee.insertMany(tempEmployees)
    .then(function(data){
        console.log("Data", data)
})