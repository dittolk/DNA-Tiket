import { Button, Input, Flex, Text, Stack, Card, CardHeader, CardBody, Heading, Box, StackDivider, Spacer, Center, VStack} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/transaksiSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const DetailTransaksi = ({ counter, eventList, promo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const eventId = eventList.id;
  const total_harga_tiket = eventList.ticketPrice * counter;
  const biaya_layanan = eventList.ticketPrice * counter * 0.1;
  // const diskon = 0;
  const [diskon, setDiskon] = useState(0)
  const total_bayar = total_harga_tiket - diskon + biaya_layanan;
  console.log("ini diskon", diskon);

  const checkout = {
    EventId : eventId,
    total_harga_tiket: total_harga_tiket,
    biaya_layanan: biaya_layanan,
    diskon: diskon,
    total_bayar: total_bayar,
  };

  const handleClick = () => {
    dispatch(setData(checkout));
    navigate("/personal");
  };

  const handleButtonPromosi = () => {
    setDiskon(promo.discount)
  }

  return (
    <Box width="100%" height="auto" margin="auto" boxShadow="base" borderRadius="10px">
      <Center maxWidth="100%">
        {promo.kode_promo?
        <>
        <VStack>
          <Text>Promo tersedia</Text>
          <Button colorScheme="whatsapp" onClick={() => handleButtonPromosi()}>{promo.kode_promo}</Button>
        </VStack>
        </>
          :
        <>
        <VStack>
          <Text>Tidak ada promo tersedia</Text>
          <Box display="flex" justifyContent="center" alignItems="center" marginTop="5px" color="blue.400">
            <Link to="/promo">Dapatkan Kode Promo disini!</Link>
          </Box>
        </VStack>
        </>}
      </Center>
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
                {total_harga_tiket.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}
              </Text>
</Flex>
            <Flex>
              <Text pt="2" fontSize="sm">
                Biaya Layanan
              </Text>
              <Spacer />
              <Text pt="2" fontSize="sm">
                {biaya_layanan.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}
              </Text>
            </Flex>
            <Flex>
              <Text pt="2" fontSize="sm">
                Discount
              </Text>
              <Spacer />
              <Text pt="2" fontSize="sm">
                {diskon.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}
              </Text>
            </Flex>
            <Flex>
              <Heading size="xs" textTransform="uppercase" marginTop="20px">
                Total Bayar
              </Heading>
              <Spacer />
              <Text pt="2" fontSize="sm">
                {total_bayar.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}
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