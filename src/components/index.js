import { Input, Button, HStack, Text } from "@chakra-ui/react";
import { Card } from "./card";
import { useState } from "react";

export const TodoHeader = () => {
  const [inputData, setInputData] = useState();
  const [itemData, setItemData] = useState([]);

  const handleSubmit = () => {
    setItemData((oldData) => {
      return [...oldData, inputData];
    });
  };

  return (
    <>
      <Text textAlign="center" fontWeight="bold" fontSize="3xl">
        To do List{" "}
      </Text>

      <HStack m="7">
        <Input
          placeholder="add here"
          size="md"
          onChange={(e) => setInputData(e.target.value)}
        />
        <Button bg="blue" color="white" onClick={handleSubmit}>
          {" "}
          Add
        </Button>
      </HStack>
      {itemData.map((cardData) => {
        return (
          <>
            <Card cardData={cardData} />
          </>
        );
      })}
    </>
  );
};
