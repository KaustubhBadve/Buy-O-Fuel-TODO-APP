const express=require("express")
const Connection = require("./Config/config")

const app=express()
require('dotenv').config()
var cors = require('cors')
app.use(cors())


const TodoLogger=require("./Routes/Todo.route")
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Todo App")
})

app.use("/todo",TodoLogger)

app.listen(process.env.PORT,async()=>{
    try{
       await Connection
       console.log("Port Started at ",process.env.PORT)
    }
    catch(err){
        console.log(err)
    }
})