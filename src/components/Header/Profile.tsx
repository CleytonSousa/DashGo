import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Cleyton Sousa</Text>
          <Text color="gray.300" fontSize="small">
            Cleytonsouza808@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Cleyton Sousa"
        src="https://github.com/CleytonSousa.png"
      />
    </Flex>
  );
};
