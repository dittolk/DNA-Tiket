import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { Tiket } from "./tiket";

export const CategoryTiket = ({counter, setCounter, eventList, total, setTotal}) => {
  return (
    <Tabs isFitted variant="enclosed" borderRadius="10px" boxShadow="base">
      <TabList mb="1em">
        <Tab>Detail Event</Tab>
        <Tab>Tiket</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text>Detail Event</Text>
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
