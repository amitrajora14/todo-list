import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Button,
  Textarea,
  Flex,
} from "@chakra-ui/react";
export const EditModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Card</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea></Textarea>
        </ModalBody>
        <Flex justify="end" gap={4} p="5">
          <Button onClick={onClose} bg="white" border="1px solid black">
            Close
          </Button>
          <Button bg="blue" color="white">
            Save
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
