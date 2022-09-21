import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
export const DeleteModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Card</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you want to delete this card ??</Text>
        </ModalBody>
        <Flex justify="end" gap={4} p="5">
          <Button onClick={onClose} bg="white" border="1px solid black">
            Cancel
          </Button>
          <Button bg="blue" color="white" onClick={onClose}>
            Delete
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
