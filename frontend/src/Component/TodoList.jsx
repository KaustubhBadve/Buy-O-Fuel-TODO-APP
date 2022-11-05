import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const todos = useSelector((state) => state.todo)
  return (
    <Box w="30%" m="auto">
      {todos.length > 0
        ? todos.map((todo, index) => {
            return (
              <Box
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                p="20px"
                borderRadius="20px"
                justifyContent="center"
                key={index}
                m="10px"
                background="linear-gradient(0deg,rgb(233, 203, 203)0%,rgb(180, 241, 188)100%)"
              >
                <SingleTodo todo={todo}/>
              </Box>
            );
          })
        : "No Todos Available"}
    </Box>
  );
};

export default TodoList;
