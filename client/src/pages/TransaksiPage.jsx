import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { DetailEvent } from "../components/checkout/detailEvent";
import { DetailTransaksi } from "../components/checkout/detailTransaksi";
import { CategoryTiket } from "../components/checkout/categoryTiket";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navbar";

export const TransaksiPage = () => {
  const [total, setTotal] = useState();
  const [counter, setCounter] = useState(1);

  const params = useParams();

  const params = useParams()

  const eventList = {
    id: 1,
    eventName: "Event 1",
    eventStart: "27 Dec 2023",
    ticketPrice: 50000,
    jumlah: 0,
  };

  return (
    <Box>

      <Box mb="10">
        <NavBar />
      </Box>

      <Box>
        <Flex width="90%" margin="auto">
          <DetailEvent />
        </Flex>
      </Box>
      <Box marginTop="50px">
        <Grid templateColumns="repeat(2, 1fr)" gap={5} width="90%" margin="auto">
          <GridItem>
            <CategoryTiket counter={counter} setCounter={setCounter} eventList={eventList} total={total} setTotal={setTotal} />
          </GridItem>
          <GridItem width="70%" margin="auto">
            <DetailTransaksi counter={counter} eventList={eventList} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
