import React, { useState } from "react";
import { Box, Heading, Text, Button, Card, CardBody, Stack, Divider, CardFooter, Flex } from "@chakra-ui/react";

export const Promosi = () => {
  const [promoCode, setPromoCode] = useState(""); // State untuk menyimpan kode promo yang akan ditampilkan
  const userCoins = 100; // Gantilah dengan jumlah koin yang dimiliki pengguna

  const redeemPromoCode = () => {
    if (userCoins >= 50) {
      // Contoh: Jika pengguna memiliki setidaknya 50 koin, berikan kode promo
      setPromoCode("PROMO123"); // Gantilah dengan kode promo yang sesuai
    } else {
      // Pesan jika pengguna tidak memiliki cukup koin
      alert("Anda tidak memiliki cukup koin untuk menukarkan kode promo.");
    }
  };

  return (
    <Box textAlign="center">
      <Heading fontSize="2xl" mb={4}>
        Tukarkan Poinmu dengan Promo Diskon yang menarik!
      </Heading>
      <Text fontSize="xl" mb={8}>
        Anda memiliki {userCoins} koin.
      </Text>
      {promoCode ? (
        <Box textAlign="center" mb={4}>
          <Text fontSize="xl">Gunakan kode promosi berikut untuk mendapatkan diskon ekstra:</Text>
          <Text fontSize="2xl" color="blue.600" fontWeight="bold" my={2}>
            {promoCode}
          </Text>
        </Box>
      ) : (
        <Flex justifyContent="center" textAlign="center" mb={4}>
          <Card maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.</Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent="center" alignItems="center">
              <Box>
                <Button colorScheme="blue" onClick={redeemPromoCode}>
                  Tukarkan Koin untuk Kode Promo
                </Button>
              </Box>
            </CardFooter>
          </Card>
        </Flex>
      )}
    </Box>
  );
};
