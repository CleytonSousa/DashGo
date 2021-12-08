import { Button } from "@chakra-ui/react";

interface PaginationItemsProps {
  isCurrent?: boolean;
  number: number;
}

export const PaginationItem = ({
  isCurrent = false,
  number,
}: PaginationItemsProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.500"
      _hover={{
        bg: "gray.500",
      }}
    >
      {number}
    </Button>
  );
};
