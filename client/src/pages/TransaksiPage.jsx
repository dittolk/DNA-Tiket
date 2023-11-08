import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { DetailEvent } from "../components/checkout/detailEvent";
import { DetailTransaksi } from "../components/checkout/detailTransaksi";
import { CategoryTiket } from "../components/checkout/categoryTiket";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navbar";
import axios from 'axios';


export const TransaksiPage = () => {
  const [total, setTotal] = useState();
  const [counter, setCounter] = useState(1);
  const [dataEvent, setDataEvent] = useState();

  const params = useParams();

  const handleLoadEventById = async () => {
    try{
      const response = await axios.get(`http://localhost:2000/event/get-event-byid/${params.id}`);
      console.log("ini response", response);
      setDataEvent(response.data.result)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() =>{
    handleLoadEventById();
  }, [])

  const eventList = {
    id: dataEvent?.id,
    eventName: dataEvent?.nama_event,
    waktu_akhir_penjualan: dataEvent?.Tikets[0].tanggal_akhir,
    ticketPrice: dataEvent?.Tikets[0].harga_tiket,
    jumlah_tiket: dataEvent?.Tikets[0].jumlah_tiket,
    jumlah: 0,
  };

  const promo = {
    kode_promo: dataEvent?.Promosis[0]?.kode_promo,
    cost_point: dataEvent?.Promosis[0]?.cost_point,
    discount: dataEvent?.Promosis[0]?.discount,
  };

  console.log("ini event list", eventList);

  return (
    <Box>
      <Box mb="10">
        <NavBar />
      </Box>

      <Box>
        <Flex width="90%" margin="auto">
          <DetailEvent dataEvent={dataEvent} />
        </Flex>
      </Box>
      <Box marginTop="50px">
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={5} width="90%" margin="auto">
          <GridItem>
            <CategoryTiket dataEvent={dataEvent} counter={counter} setCounter={setCounter} eventList={eventList} total={total} setTotal={setTotal} />
          </GridItem>
          <GridItem width={{ base: "100%", md: "70%" }} margin="auto">
            <DetailTransaksi counter={counter} eventList={eventList} promo={promo}/>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
