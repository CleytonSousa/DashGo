import {Flex, Box, Avatar, Text} from '@chakra-ui/react'

export const Profile = () => {
    return(
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Cleyton Sousa</Text>
            <Text
              color="gray.300"
              fontSize="small"
            >
                Cleytonsouza808@gmail.com
            </Text>
        </Box>
        <Avatar size="md" name="Cleyton Sousa" src="https://github.com/CleytonSousa.png"/>
      </Flex>
    )
}