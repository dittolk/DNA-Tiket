import { Button, Text, Flex, Box, Heading, Icon, Divider, useToast } from "@chakra-ui/react";
import { AddIcon, MinusIcon, TimeIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const Tiket = ({counter, setCounter, eventList, setTotal}) => {
  
  const toast = useToast()
  const id = 'id-toast'
 
  const tambahJumlah = () => {
    if (counter < eventList.jumlah_tiket) {
      setCounter(counter + 1);
      setTotal(eventList.ticketPrice * (counter + 1));

    }else {
      if (!toast.isActive(id)) {
        toast({
          id,
          title: 'Ooops!',
          description: `Maksimal pembelian ${eventList.jumlah_tiket} tiket`,
          status: 'warning',
          duration: 2000,
          isClosable: true,
        })
      }
    }
  };

  const kurangiJumlah = () => {
    if(counter > 1){

      setCounter(counter - 1);
      setTotal(eventList.ticketPrice * (counter - 1));
    }else{
      if (!toast.isActive(id)) {
        toast({
          id,
          title: 'Ooops!',
          description: "Tiket Minimal 1",
          status: 'warning',
          duration: 2000,
          isClosable: true,
        })
      }
    }
  };

  return (
    <Box>
      <Box marginBottom="50px" border="solid 1px blue" borderRadius="10px" padding="10px">
        <Box>
          <Heading size="sm">{eventList.eventName}</Heading>
        </Box>
        <Box marginBottom="20px" marginTop="20px">
          <Text color="blue.400">
            <TimeIcon marginRight="10px" />
            Waktu Akhir Pembelian<ChevronRightIcon /> {eventList.waktu_akhir_penjualan} 
          </Text>
          <Box position="absolute" display="block" width="2em" height="2em" background="white" borderTopLeftRadius="50%" borderBottomLeftRadius="50%" borderLeft="solid 1.5px blue" right="-0.3em" />
          <Box position="absolute" display="block" width="2em" height="2em" background="white" borderTopRightRadius="50%" borderBottomRightRadius="50%" borderRight="solid 1.5px blue" left="-0.2em" />
        </Box>
        <Divider orientation="horizontal" marginTop="10px" border="dashed 1px" color="blue" />
        <Flex alignItems="center" justifyContent="space-between" marginTop="20px">
          <Text size="sm">Rp.{eventList.ticketPrice}</Text>

          <Box display="Flex" alignItems="center">
            <Button boxSize={5} marginRight="15px" colorScheme="blue" variant="outline" onClick={() => kurangiJumlah()}>
              <Icon boxSize={3} as={MinusIcon} />
            </Button>
            <Text>{counter}</Text>
            <Button boxSize={5} marginLeft="15px" colorScheme="blue" variant="outline" onClick={() => tambahJumlah()}>
              <Icon as={AddIcon} boxSize={3} />
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
