const express=require('express')
const app=express()
const cors= require('cors')
app.use(cors())

app.get("/",(req,res)=>{
res.send ("this is cors home page")
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