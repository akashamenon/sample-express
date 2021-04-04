var express=require('express')

let app=express()
app.get('/',(req,res)=>{
    res.send("Hey Bruh !!!!!")
})
app.get('/home',(req,res)=>{
    res.send("Welcome to our new Venture")
})
app.get('/profile',(req,res)=>{
    res.send("Welcome to your Profile")
})
app.listen(3000,()=>{
    console.log("Server started at https://localhost:3000/home")
})