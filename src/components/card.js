import React from "react";
import { Text, IconButton, Flex } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { useDisclosure } from "@chakra-ui/react";
import { EditModal } from "./modal/edit-modal";
import { DeleteModal } from "./modal/delete-modal";
export const Card = ({ cardData }) => {
  const {
    isOpen: isDelete,
    onClose: onDelete,
    onOpen: onOpenDelete,
  } = useDisclosure();
  const {
    isOpen: isEdit,
    onClose: onEdit,
    onOpen: onOpenEdit,
  } = useDisclosure();

  return (
    <Flex
      gap={5}
      justify="space-between"
      border="1px solid #666666"
      p="5"
      m="7"
      borderRadius="6"
      bg="yellow"
    >
      <Text fontSize="2xl">{cardData}</Text>
      <Flex gap="5">
        <IconButton
          icon={<RiDeleteBin5Line />}
          bg="red"
          color="white"
          onClick={onOpenDelete}
        />
        <IconButton
          icon={<BiEdit />}
          bg="blue"
          color="white"
          onClick={onOpenEdit}
        />
        <EditModal isOpen={isEdit} onClose={onEdit} />
        <DeleteModal onClose={onDelete} isOpen={isDelete} />
      </Flex>
    </Flex>
  );
};
