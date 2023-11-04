import { Box } from "@chakra-ui/react";
import { Promosi } from "../components/promotion/promosi";
import NavBar from "../components/navbar";

export const PromoPage = () => {
  return (
    <Box>
      <Box mb="10">
        <NavBar />
      </Box>
      <Box>
        <Promosi />;
      </Box>
    </Box>
  );
};
