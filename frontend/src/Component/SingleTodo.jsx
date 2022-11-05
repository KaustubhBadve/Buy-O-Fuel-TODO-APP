import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, getTodos, updateTodo } from "../Redux/Action";
import '../App.css';
import axios from "axios";

const SingleTodo = ({todo}) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedTodo, setUpdatedTodo] = useState("");

  const dispatch=useDispatch()

  const HandleCompleted=(id)=>{
    console.log(id)
    axios.patch(`https://buyofuel.herokuapp.com/todo/completed/${id}`).then((res) => {
       dispatch(getTodos())
})
  }

  const HandleUpdate = (id) => {
    const obj = {
      title: updatedTodo,
    };
    dispatch(updateTodo(id,obj))
        toast({
          title: "Todo Updated Succesfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
    onClose();
    dispatch(getTodos())
  };

  const HandleDelete=(id)=>{
      dispatch(deleteTodo(id))
      toast({
        title: "Todo Deleted Succesfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
        dispatch(getTodos())
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      gap="20px"
      justifyContent="space-between"
      className={todo.isCompleted ? "strike" : ""}
    >

      <input type="checkbox" onChange={()=>HandleCompleted(todo._id)} />
       <Text w="60%">{todo.title}</Text>
      <Button colorScheme="red" onClick={() => HandleDelete(todo._id)}>
        Delete
      </Button>
      <Button colorScheme="pink" onClick={onOpen}>
        Update
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update TODO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              defaultValue={todo.title}
              onChange={(e) => setUpdatedTodo(e.target.value)}
            />
            <Button colorScheme="whatsapp" mt="20px" onClick={() => HandleUpdate(todo._id)}>Update</Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SingleTodo;
