const {Router}=require("express")
const TodoModel = require("../Models/Todo.model")

const todoController=Router()

todoController.get("/",async(req,res)=>{
      const Alltodos=await TodoModel.find({})
      res.status(200).send(Alltodos)
})

todoController.post("/create",async(req,res)=>{
    const {title,isCompleted}=req.body

    const NewTodo=new TodoModel({
        title,isCompleted
    })
    NewTodo.save()
    res.status(200).send({messege:"Todo Posted Succesfully",NewTodo})
})

todoController.patch("/update/:id",async(req,res)=>{
  const {id}=req.params
   await TodoModel.findByIdAndUpdate({_id:id},{$set:req.body})
    res.status(200).send({messege:"Todo Updated Succesfully"})
})

todoController.patch("/completed/:id",async(req,res)=>{
    const {id}=req.params
    const CompletedORnot=await TodoModel.findOne({_id:id})
    console.log(CompletedORnot)
    if(CompletedORnot.isCompleted==true)
    {
        await TodoModel.findByIdAndUpdate({_id:id},{$set:{isCompleted:false}}) 
        res.status(200).send({messege:"Todo not Completed","Status":false})
    }
    else{
        await TodoModel.findByIdAndUpdate({_id:id},{$set:{isCompleted:true}}) 
        res.status(200).send({messege:"Todo Completed","Status":true})
    }
  })

todoController.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
   await TodoModel.findByIdAndDelete({_id:id})
    res.status(200).send({messege:"Todo Deleted Succesfully"})
})

module.exports=todoController