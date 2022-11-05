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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addTodos, getTodos } from "../Redux/Action";

const Todoinput = ({ todo, settodo }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const HandleAdd = () => {
    let todoObj = {
      title: todo,
      isCompleted: false,
    };
    dispatch(addTodos(todoObj));
    toast({
      title: "Todo Added Succesfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
    setTimeout(() => {
      dispatch(getTodos())
    }, 100);
  };
  return (
    <Box>
      <Button colorScheme="facebook" w="300px" mb="30px" onClick={onOpen}>
        ADD TODO
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD TODO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter your Todo Here"
              value={todo}
              onChange={(e) => settodo(e.target.value)}
            />
            <Button colorScheme="whatsapp" mt="20px" onClick={HandleAdd}>
              ADD
            </Button>
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

export default Todoinput;
