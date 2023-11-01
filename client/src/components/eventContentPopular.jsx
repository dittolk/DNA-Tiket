'use client'

import {
  Center,
  Heading,
  Flex,
} from '@chakra-ui/react'
import EventCard from './card'

export default function EventContentPopular() {

    const eventList = [
        {
            eventName: "Event 1",
            eventStart: "27 Dec 2023",
            ticketPrice: 50000
        },
        {
            eventName: "Event 2",
            eventStart: "22 Nov 2023",
            ticketPrice: 22000
        },
        {
            eventName: "Event 3",
            eventStart: " 9 Sept 2023",
            ticketPrice: 27000
        }
    ]

  return (
    <Flex bg='#020091' flexDirection={'column'}>
      <Center py={6}>
        <Heading color={'white'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
              Popular events
        </Heading>
      </Center>

      <EventCard></EventCard>
    
    </Flex>
    
  )
}