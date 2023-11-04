
import { Button, Input, Flex, Text, Stack, Card, CardHeader, CardBody, Heading, Box, StackDivider, Spacer, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const DetailTransaksi = ({ counter, eventList }) => {
import { Button, Input, Flex, Text, Stack, Card, CardHeader, CardBody, Heading, Box, StackDivider, Spacer, Center, Link } from "@chakra-ui/react";

export const DetailTransaksi = ({counter, eventList}) => {
  return (
    <Box width="100%" height="auto" margin="auto" boxShadow="base" borderRadius="10px">
      <Center maxWidth="100%">
        <Input placeholder="Masukan Kode Promo" maxWidth="65%" marginRight="10px" marginTop="10px"></Input>
        <Button maxWidth="30%" marginTop="10px" colorScheme="blue" variant="outline">
          Submit
        </Button>
      </Center>

      <Box display="flex" justifyContent="center" alignItems="center" marginTop="5px" color="blue.400">
        <Link to="/promo">Dapatkan Kode Promo disini!</Link>
      </Box>

      <Link display="flex" justifyContent="center" marginTop="5px" color="blue.400">
        Dapatkan Kode Promo disini!
      </Link>

      <Card marginTop="10px">
        <CardHeader>
          <Heading size="md">Detail Harga</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="1">
            <Flex>
              <Text pt="2" fontSize="sm">
                Total Harga Tiket
              </Text>
              <Spacer />
              <Text pt="2" fontSize="sm">
                {eventList.ticketPrice * counter}
              </Text>
            </Flex>
            <Flex>
              <Text pt="2" fontSize="sm">
                Biaya Layanan
              </Text>
              <Spacer />
              <Text pt="2" fontSize="sm">
                10000
              </Text>
            </Flex>
            <Flex>
              <Text pt="2" fontSize="sm">
                Discount
              </Text>
              <Spacer />
              <Text pt="2" fontSize="sm">
                10000
              </Text>
            </Flex>
            <Flex>
              <Heading size="xs" textTransform="uppercase" marginTop="20px">
                Total Bayar
              </Heading>
              <Spacer />
              <Text pt="2" fontSize="sm">
                10000
              </Text>
            </Flex>
          </Stack>
        </CardBody>
        <Flex justifyContent="center" alignItems="center" marginTop="20px" marginBottom="10px">
          <Button colorScheme="blue" variant="outline" marginBottom="10px">
            Bayar Tiket
          </Button>
        </Flex>
      </Card>
    </Box>
  );
};
