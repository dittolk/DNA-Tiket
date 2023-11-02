import {
    Box,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image,
    Button,
  } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

export default function EventCard() {
  const navigate = useNavigate();

    const handleBeliTiket = (id) => {
      console.log(id);
      navigate(`/event_detail/${id}`)
    }

    const eventList = [
        {
            id: 1,
            eventName: "Event 1",
            eventStart: "27 Dec 2023",
            ticketPrice: 50000
        },
        {
            id: 2,
            eventName: "Event 2",
            eventStart: "22 Nov 2023",
            ticketPrice: 22000
        },
        {
            id: 3,
            eventName: "Event 3",
            eventStart: " 9 Sept 2023",
            ticketPrice: 27000
        }
    ]

    return (
        <>
          {eventList.map((item, index) =>(
              <Box
              maxW={{ base: '200px', md: '370px'}}
              maxH={{ base: '304px', md: '350px', lg: '405px' }}
              // maxH={'220px'}
              w={'full'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue('white', 'gray.900')}
              shadow={'lg'}
              rounded={'md'}
              p={6}
              flex="0 0 auto" // Allow flex item to shrink if needed
              mx={'13px'}>
              <Box overflow={'hidden'} h={{ base: "75px", md: "130px", lg: "180px" }} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'
                  }
                  fill
                  alt="Example"
                />
              </Box>
              <Stack>
                <Heading
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={'rgb(16, 69, 181)'}
                  fontSize={['xs', 'md', '2xl']}
                  fontFamily={'body'}>
                  {item.eventName}
                </Heading>
                <Text
                  color={'black'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={['xs','sm']}
                  letterSpacing={1.1}>
                  {item.eventStart}
                </Text>
                <Text color={'gray.500'} fontSize={['xs','sm']}>
                  {item.ticketPrice}
                </Text>                
              </Stack>
              <Button onClick={() => handleBeliTiket(item.id)}>Beli tiket</Button>
            </Box>
          ))} 
        </>
    )
}