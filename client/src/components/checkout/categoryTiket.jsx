import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import { Tiket } from "./tiket";

export const CategoryTiket = ({dataEvent, counter, setCounter, eventList, total, setTotal}) => {
  return (
    <Tabs isFitted variant="enclosed" borderRadius="10px" boxShadow="base">
      <TabList mb="1em">
        <Tab>Detail Event</Tab>
        <Tab>Tiket</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <VStack align={'flex-start'}>
            <VStack align={'flex-start'}>
              <Heading>Deskripsi Event</Heading>
              <Text fontSize={'2xl'} overflowY={'auto'}>{dataEvent?.deskripsi_event}</Text>
            </VStack>
            <VStack align={'flex-start'}>
              <Heading>Ketentuan Event</Heading>
              <Text fontSize={'2xl'}>{dataEvent?.ketentuan_event}</Text>
            </VStack>
          </VStack>
        </TabPanel>
        <TabPanel>
          <Box>
            <Tiket counter={counter} setCounter={setCounter} eventList={eventList} total={total} setTotal={setTotal}/>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
