import { Box, Button, Center, Flex, Grid, HStack, Heading, Image, SimpleGrid, Stack, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, useColorModeValue } from "@chakra-ui/react";

export default function DiscoverCategory(){
    const eventCategory = [
        'Pertunjukan',
        'Turnamen/Kompetisi',
        'Seminar/Talkshow',
        'Konser',
        'Pameran',
        'Pertemuan/Konferensi',
        'Pesta',
        'Pertandingan Olahraga',
        'Lomba',
        'Festival',
        'Pelatihan/Workshop',
        'Pendakian',
        'Bazaar/Pasar Malam',
        'Film Screening',
        'Lainnya',
      ];

      const eventList = [
        {
            id: "1",
            eventName: "Event 1",
            eventStart: "27 Dec 2023",
            ticketPrice: 50000
        },
        {
            id: "2",
            eventName: "Event 2",
            eventStart: "22 Nov 2023",
            ticketPrice: 22000
        },
        {
            id: "3",
            eventName: "Event 3",
            eventStart: " 9 Sept 2023",
            ticketPrice: 27000
        },
        {
            id: "4",
            eventName: "Event 4",
            eventStart: " 9 Sept 2023",
            ticketPrice: 27000
        },
        {
            id: "5",
            eventName: "Event 5",
            eventStart: " 9 Sept 2023",
            ticketPrice: 27000
        },
        {
            id: "6",
            eventName: "Event 6",
            eventStart: " 9 Sept 2023",
            ticketPrice: 27000
        }
    ];

    const eventTopic = [
        'Anak, Keluarga',
        'Bisnis',
        'Desain, Foto, Video',
        'Fashion, Kecantikan',
        'Film, Sinema',
        'Game, E-Sports',
        'Hobi, Kerajinan Tangan',
        'Investasi, Saham',
        'Karir, Pengembangan Diri',
        'Keagamaan',
        'Kesehatan, Kebugaran',
        'Keuangan, Finansial',
        'Lingkungan Hidup',
        'Makanan, Minuman',
        'Marketing',
        'Musik',
        'Olahraga',
        'Otomotif',
        'Sains, Teknologi',
        'Seni, Budaya',
        'Sosial, Hukum, Politik',
        'Standup Comedy',
        'Pendidikan, Beasiswa',
        'Tech, Start-Up',
        'Wisata & Liburan',
        'Lainnya',
      ];

    return(
        <>
        <VStack p={8}>
            <Tabs variant='soft-rounded' colorScheme='green' size={'lg'}>
                <TabList>
                    <Tab>Format</Tab>
                    <Tab>Topik</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel border={'1px solid grey'} mt={3} rounded={'md'}>
                        <SimpleGrid columns={[4, null, 8]} w={'100%'} spacing={5}>
                            {eventCategory.map((item, index) => (
                            <Button p={3} key={index}>
                                <Text fontSize={{ base: "sm", md: "md"}}>{item}</Text>
                            </Button>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={[4, null, 8]} w={'100%'} spacing={5}>
                            {eventTopic.map((item, index) => (
                            <Button p={3} key={index}>
                                <Text fontSize={{ base: "sm", md: "md"}}>{item}</Text>
                            </Button>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <SimpleGrid columns={[2, null, 4]} spacing={5} mt={5}>
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
                        m={'13px'}>
                        <Box overflow={'hidden'} h={{ base: "75px", md: "130px", lg: "180px" }} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} rounded={'lg'}>
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
                        <HStack justifyContent={'space-between'} divider={<StackDivider borderColor='gray.400' />}>
                            <Text>Organizer</Text>
                            <Button>Beli tiket</Button>
                        </HStack>
                        
                    </Box>
                ))} 
            </SimpleGrid>
        </VStack>
        </>
    )

}