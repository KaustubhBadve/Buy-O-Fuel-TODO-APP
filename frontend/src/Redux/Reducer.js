import { TODOS_ADD, TODOS_DELETE, TODOS_GET, TODOS_UPDATE } from "./Action.type"

const InitialState={
todo:[]
}

export const Reducer=(state=InitialState,{type,payload})=>{
     switch(type){
        case TODOS_GET:{
            return {
                ...state,
                todo:payload
            }
        }
        default:{
            return state
        }
     }
}