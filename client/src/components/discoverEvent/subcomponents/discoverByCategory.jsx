import { Button, SimpleGrid,Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import EventCard from "../../card";

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
                <EventCard></EventCard>
            </SimpleGrid>
        </VStack>
        </>
    )

}