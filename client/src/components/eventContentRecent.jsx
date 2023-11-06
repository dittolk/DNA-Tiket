import {
  Center,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import EventCard from './card'
import { useEffect, useState } from 'react';
import axios from "axios";

export default function EventContentRecent() {

  const [recentEvent, setRecentEvent] = useState([])

  const getEventRecent = async () =>{
    try{
      const response = await axios.get("http://localhost:2000/event/recent-event");
      setRecentEvent(response.data.result)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getEventRecent();
  }, []);

  return (
    <>
    <Center py={6}>
      <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Recent events
      </Heading>
    </Center>
    
    <Flex py={6} overflowX={{ base: "scroll", md: "scroll", lg : "scroll", xl: "hidden" }} justifyContent={{ base: null, md: "center" }}>
      {recentEvent.map((item, index) =>(
        <EventCard props={item}></EventCard>
      ))}
    </Flex>
    </>
    
  )
}