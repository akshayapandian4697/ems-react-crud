const express = require("express");
//npm install graphql apollo-server-express
const { ApolloServer } = require('apollo-server-express');
require('./models/db')
const Employee = require('./models/employee')

const typeDefs = `
    type employee {
        firstName: String,
        lastName: String,
        age: Int,
        dateOfJoining: String,
        title: String,
        department: String,
        employeeType: String,
        currentStatus: Boolean
    }
    type Query {
        employeeList: [employee]
    }
    type Mutation {
        addNewEmployeeToDB(firstName: String!, lastName: String!, age: Int, dateOfJoining: String!, title: String!, department: String!, employeeType: String!) : employee        
    }
`;

const resolvers = {
    Query: {
	    employeeList
    },
    Mutation: {
        addNewEmployeeToDB
    },
};

async function employeeList() {
    return (await Employee.find());
}

async function addNewEmployeeToDB(_, {firstName, lastName, age, dateOfJoining, title, department, employeeType}){
    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        dateOfJoining: dateOfJoining,
        title: title,
        department: department,
        employeeType: employeeType,
        currentStatus: true
    }
    let count = await (Employee.find().count());
    newEmployee.id = count+1;
    return await (Employee.create(newEmployee));
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();
app.use(express.static('public'));

server.start()
    .then(function(){
        server.applyMiddleware({app, path:'/graphql', cors: true})
    })

app.listen('3000', function(){
    console.log("Webserver is running, Listening to port: 3000");
})