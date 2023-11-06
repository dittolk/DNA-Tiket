import { Box, Grid, GridItem, Image, Text, Flex, Heading, Avatar } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import { GoLocation } from "react-icons/go";

export const DetailEvent = () => {
  return (
    <Box width="100vw" height="auto" margin="auto">
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap="3">
        <GridItem colSpan="2" borderRadius="10px" boxShadow="base">
          <Image
            boxSize="md"
            width="100vw"
            height="50vh"
            borderRadius="10px"
            src="https://images.unsplash.com/photo-1681999683665-6902894af42c?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="gambar"
          ></Image>
        </GridItem>
        <GridItem colSpan="1" borderRadius="10px" boxShadow="base">
          <Box p="2em">
            <Heading marginBottom="20px">Nama Event</Heading>
            <Box>
              <Text marginBottom="5px">
                <CalendarIcon marginRight="10px" />
                Tanggal
              </Text>
              <Text marginBottom="5px">
                <TimeIcon marginRight="10px" />
                Waktu
              </Text>
              <Box display="flex" marginBottom="5px">
                <Box display="flex" marginLeft="1px" justifyContent="center" alignItems="center">
                  <GoLocation />
                </Box>
                <Text marginLeft="10px">Tempat</Text>
              </Box>
            </Box>
          </Box>
          <Box display="flex" marginTop="20px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar
                marginLeft="10px"
                name="Gambar Penyelenggara"
                src="https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></Avatar>
            </Box>
            <Flex flexDir="column" marginLeft="20px">
              <Text color="gray">Penyelenggara</Text>
              <Text as="strong">Nama Penyelenggara</Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
