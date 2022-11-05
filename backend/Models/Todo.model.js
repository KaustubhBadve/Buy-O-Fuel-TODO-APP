const mongoose=require("mongoose")

const TodoModel=mongoose.model("Todo",mongoose.Schema({
    title:{type:String,require:true},
    isCompleted:{type:Boolean,require:true},
}))

module.exports=TodoModel