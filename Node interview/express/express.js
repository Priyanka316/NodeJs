const express=require('express')
const app=express()

app.get("/",(req,res)=>{
res.send ("home page")
})
app.get("/login",(req,res)=>{
    res.send ("login page")
    })

app.get("/contact",(req,res)=>{
        res.send ("contact page")
        })
        
 app.listen(3000,()=>{
    console.log("server started");
})