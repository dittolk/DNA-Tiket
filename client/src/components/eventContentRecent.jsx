'use client'

import {
  Center,
  Flex,
  Heading,
} from '@chakra-ui/react'
import EventCard from './card'

export default function EventContentRecent() {

  return (
    <>
    <Center py={6}>
      <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Recent events
      </Heading>
    </Center>
    
    <Flex py={6} overflowX={{ base: "scroll", md: "scroll", lg : "scroll", xl: "hidden" }} justifyContent={{ base: null, md: "center" }}>
      <EventCard></EventCard>
    </Flex>
    </>
    
  )
}