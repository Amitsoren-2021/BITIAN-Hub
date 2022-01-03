const express = require("express");
const path = require("path");
const app = express();
require("./db/conn")
const port=process.env.PORT ||3000;
 
// const static_path = path.join(_dirname,"../public")
console.log(path.join(__dirname));

// app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.send("hello from ieee")
});

app.listen(port,()=>{
    console.log(`server is runnning at port no ${port}`);
})