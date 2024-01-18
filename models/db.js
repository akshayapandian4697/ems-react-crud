const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://democluster.rb6sq3a.mongodb.net/EMS?retryWrites=true&w=majority",
    { user: "admin", pass: "admin" },
    { useNewUrlParser: true }
);

mongoose.connection.on("connected", function(){
    console.log("Application is connected to Database");
})