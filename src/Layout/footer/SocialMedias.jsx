import { socialMedias } from "@/constants";
import { Box, Flex, Icon, Link, Tooltip } from "@chakra-ui/react";

const SocialMedias = () => {
  return (
    <Box py={6}>
      <Flex justify="center" gap={{ base: 4, lg: 8 }} width="100%">
        {socialMedias.map((media) => (
          <Tooltip label={media.name} key={media.name} aria-label={media.name}>
            <Link
              href={media.link}
              isExternal
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="35px"
              height="35px"
              borderRadius="8px"
              bg="gray.200"
              _hover={{
                bg: media.color + "20", // یک حالت رنگ پس‌زمینه ملایم
                transform: "scale(1.2)",
              }}
              transition="all 0.3s ease"
            >
              <Icon as={media.icon} boxSize={6} color={media.color} />
            </Link>
          </Tooltip>
        ))}
      </Flex>
    </Box>
  );
};

export default SocialMedias;
