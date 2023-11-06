'use client'

import {
  Center,
  Heading,
  Flex,
} from '@chakra-ui/react'
import EventCard from './card'

export default function EventContentPopular() {

  return (
    <Flex bg='#020091' flexDirection={'column'}>
      <Center py={6}>
        <Heading color={'white'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
              Popular events
        </Heading>
      </Center>

      <Flex py={6} overflowX={{ base: "scroll", md: "scroll", lg : "scroll", xl: "hidden" }} justifyContent={{ base: null, md: "center" }}>
        {/* <EventCard></EventCard> */}
      </Flex>
    
    </Flex>
    
  )
}