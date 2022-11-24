const express = require('express');
//const cors=require("cors")

const app = express();
const data1 = require('./Route/bollywood');
const data2 = require('./Route/hollywood');
const data3 = require('./Route/technology');
const data4 = require('./Route/food');
const data5 = require('./Route/fitness');
const data6=require('./Route/home');
//app.use(cors());

app.use('/home',data1)
app.use("/home",data2)
app.use("/home",data3)
app.use("/home",data4)
app.use("/home",data5)
app.use("/home",data6)


app.get('/',(req,res)=>{
    res.write("Hello BackEnd Project");
    res.end()
})

app.listen(process.env.PORT||8080,()=>{
    console.log("server started.....")
})



// app.listen(3000,()=>{
//    console.log("hello"); 
// })
