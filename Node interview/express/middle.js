const express=require('express')
const app=express()
const middleware=(req,res,next)=>{
    // 
    res.send("middleware")
    next()
}
// app.use(middleware)

app.get("/",(req,res)=>{
res.send ("home page")
})
app.get("/login",middleware,(req,res)=>{
    res.send ("login page")
    })

app.get("/contact",(req,res)=>{
    res.send ("contact page")
    })
        
app.listen(3000,()=>{
    console.log("server started");
})