import { Box, Heading, Toast, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, getTodos } from '../Redux/Action'
import Todoinput from './Todoinput'
import TodoList from './TodoList'

const Todo = () => {
    const [todo, settodo] = useState("")
    const toast = useToast()
    const dispatch=useDispatch()

    const getTodoss=()=>{
        dispatch(getTodos())
    }

    useEffect(() => {
      getTodoss()
    }, [todo])
    
  return (
    <Box w="100vw" h="100vh" p="30px">
    <Heading m="30px" fontSize="50px" fontStyle="italic">Todo APP</Heading>
    <Todoinput todo={todo} settodo={settodo}/>
    <TodoList/>
    </Box>
  )
}

export default Todo