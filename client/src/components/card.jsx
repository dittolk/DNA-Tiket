import { Box, Heading, Text, Stack, useColorModeValue, Image, Button, HStack, StackDivider } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function EventCard({props}) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const event = useSelector((state) => state.event.value)

  const handleBeliTiket = (id) => {
    if(token){
      navigate(`/transaksi/${id}`);
    }else{
      navigate('/login_user')
    }
  };

  return (
    <>
        <Box
          maxW={{ base: "200px", md: "370px" }}
          maxH={{ base: "304px", md: "350px", lg: "405px" }}
          // maxH={'220px'}
          w={"full"}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue("white", "gray.900")}
          shadow={"lg"}
          rounded={"md"}
          p={6}
          flex="0 0 auto" // Allow flex item to shrink if needed
          mx={"13px"}
        >
          <Box overflow={"hidden"} h={{ base: "75px", md: "130px", lg: "180px" }} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
            <Image src={"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"} fill alt="Example" />
          </Box>
          <Stack>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={"rgb(16, 69, 181)"}
              fontSize={["xs", "md", "2xl"]}
              fontFamily={"body"}
            >
              {props.nama_event}
            </Heading>
            <Text color={"black"} textTransform={"uppercase"} fontWeight={800} fontSize={["xs", "sm"]} letterSpacing={1.1}>
              {props.tanggal_mulai}
            </Text>
            <Text color={"black"} fontWeight={800} fontSize={["xs", "sm"]} letterSpacing={1.1}>
              {props.format_event} {props.topik_event}
            </Text>
            <Text as={'b'} color={"gray.500"} fontWeight={800} fontSize={["xs", "md"]}>
              Rp. {props.Tikets[0].harga_tiket}
            </Text>
            <HStack justifyContent={'space-between'} divider={<StackDivider borderColor='gray.400' />}>
              <Text as={'b'}>Penyelenggara : {props.penyelenggara}</Text>
              <Button colorScheme="messenger" onClick={() => handleBeliTiket(props.id)}>Beli tiket</Button>
            </HStack>
          </Stack>
        </Box>
    </>
  );
}
