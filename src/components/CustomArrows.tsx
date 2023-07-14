import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";

export function CustomArrow() {
  return (
    <Box>
      <Box className="custom-arrow-banner custom-arrow-banner-left">
        <Button id="buttonPrev" p={0}>
          <ChevronLeftIcon fontSize="xl" />
        </Button>
      </Box>
      <Box className="custom-arrow-banner custom-arrow-banner-right">
        <Button id="buttonNext" p={0}>
          <ChevronRightIcon fontSize="xl" />
        </Button>
      </Box>
    </Box>
  );
}
