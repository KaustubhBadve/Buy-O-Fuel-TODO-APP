import axios from "axios"
import {TODOS_GET} from "./Action.type"

export const getTodos=()=>(dispatch)=>{
    axios.get("https://buyofuel.herokuapp.com/todo").then((res)=>{
        console.log("GETDATA",res.data)
            dispatch({type:TODOS_GET,payload:res.data})
        }).catch((err)=>{
            console.log(err)
        })
}

export const addTodos=(todoObj)=>(dispatch)=>{
    console.log(todoObj)
    axios.post("https://buyofuel.herokuapp.com/todo/create",todoObj).then((res)=>{
        getTodos()
}).catch((err)=>{
    console.log(err)
})
}

export const updateTodo=(id,obj)=>(dispatch)=>{
    axios.patch(`https://buyofuel.herokuapp.com/todo/update/${id}`, obj).then((res) => {
        getTodos()
})
}

export const completeTodo=(id)=>(dispatch)=>{
    axios.patch(`https://buyofuel.herokuapp.com/todo/completed/${id}`).then((res) => {
        console.log(res)
        getTodos()
        return res.data.Status
})
}

export const deleteTodo=(id)=>(dispatch)=>{
    axios.delete(`https://buyofuel.herokuapp.com/todo/delete/${id}`).then((res) => {
        getTodos()
})
}