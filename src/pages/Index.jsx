import { Box, Flex, Image, Input, IconButton, Spacer } from "@chakra-ui/react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex
        as="nav"
        bg="white"
        p={4}
        boxShadow="md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Image src="https://via.placeholder.com/40" alt="YouTube Logo" boxSize="40px" />
        </Flex>
        <Flex flex="1" maxW="600px" mx={4}>
          <Input placeholder="Search" />
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            ml={2}
          />
        </Flex>
        <Spacer />
        <Flex alignItems="center">
          <IconButton
            aria-label="Notifications"
            icon={<FaBell />}
            variant="ghost"
            mr={2}
          />
          <IconButton
            aria-label="User"
            icon={<FaUserCircle />}
            variant="ghost"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;