'use client'

import {
  Center,
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
    
    <EventCard></EventCard>
    </>
    
  )
}