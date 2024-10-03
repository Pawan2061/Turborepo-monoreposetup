import express from "express"

const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(4001,()=>{
    console.log("working on port 4000");
    
    
    
})
