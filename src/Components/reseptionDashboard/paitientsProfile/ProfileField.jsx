const { Box, Text } = require("@chakra-ui/react");

export const ProfileField = ({ label, value }) => (
  <Box border="1px" borderColor="gray.300" borderRadius="md" p={2} width="100%">
    <Text fontWeight="bold">{label}:</Text>
    <Text>{value}</Text>
  </Box>
);
