import { Button, Input, Flex, Text, Stack, Card, CardHeader, CardBody, Heading, Box, StackDivider, Spacer, Center} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/transaksiSlice";
import { Link, useNavigate } from "react-router-dom";

export const DetailTransaksi = ({ counter, eventList }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total_harga_tiket = eventList.ticketPrice * counter;
  const biaya_layanan = eventList.ticketPrice * counter * 0.1;
  const diskon = 10000;
  const total_bayar = total_harga_tiket - diskon + biaya_layanan;

  const checkout = {
    total_harga_tiket: total_harga_tiket,
    biaya_layanan: biaya_layanan,
    diskon: diskon,
    total_bayar: total_bayar,
  };

  const handleClick = () => {
    dispatch(setData(checkout));
    navigate("/personal");
  };

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
                {total_harga_tiket}
              </Text>
            </Flex>
            <Flex>
              <Text pt="2" fontSize="sm">
                Biaya Layanan
              </Text>
              <Spacer />
              <Text pt="2" fontSize="sm">
                {biaya_layanan}
              </Text>
            </Flex>
            <Flex>
              <Text pt="2" fontSize="sm">
                Discount
              </Text>
              <Spacer />
              <Text pt="2" fontSize="sm">
                {diskon}
              </Text>
            </Flex>
            <Flex>
              <Heading size="xs" textTransform="uppercase" marginTop="20px">
                Total Bayar
              </Heading>
              <Spacer />
              <Text pt="2" fontSize="sm">
                {total_bayar}
              </Text>
            </Flex>
          </Stack>
        </CardBody>
        <Flex justifyContent="center" alignItems="center" marginTop="20px" marginBottom="10px">
          <Button colorScheme="blue" variant="outline" marginBottom="10px" onClick={handleClick}>
            Bayar Tiket
          </Button>
        </Flex>
      </Card>
    </Box>
  );
};
