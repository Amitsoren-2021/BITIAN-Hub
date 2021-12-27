const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/amit",{
     useCreateIndex:true,
     useNewUrlParser:true,
     useUnifiedTopology:true
}).then(()=>{
console.log("connection succesfully");
}).catch((error) => {
    console.log(error);
})

