import { useEffect, useState } from "react";
import DiscoverCategory from "./subcomponents/discoverByCategory";
import axios from "axios";
import EventCard from "../card";
import { SimpleGrid, VStack } from "@chakra-ui/react";

export default function DiscoverEventComponent(){
    const [allEvent, setAllEvent] = useState([]);
    const [eventFilter, setEventFilter] = useState([]);

    const getEvent = async () => {
        try{
            const response = await axios.get("http://localhost:2000/event/get-event");
            setAllEvent(response.data.result)
          }catch(err){
            console.log(err);
          }
    }

    useEffect(() =>{
        getEvent();
    }, [])
    
    return(
        <>
            <DiscoverCategory setEventFilter={setEventFilter}></DiscoverCategory>
            <VStack p={8}>
                <SimpleGrid columns={[2, null, 4]} spacing={5} mt={5}>
                    
                {eventFilter!=null ? 
                <>
                    {eventFilter.map((item, index) =>(
                        <EventCard props={item}></EventCard>
                    ))}
                </> 
                : 
                <>
                    {allEvent.map((item, index) =>(
                        <EventCard props={item}></EventCard>
                    ))}
                </>}
                </SimpleGrid>
            </VStack>
        </>
    )
}