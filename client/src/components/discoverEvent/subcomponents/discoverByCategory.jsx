import { Button, SimpleGrid,Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DiscoverCategory({setEventFilter}){
    const [category, setCategory] = useState();
    const [activeCategory, setActiveCategory] = useState(null);
    const [tabIndex, setTabIndex] = useState(0)
    const [query, setQuery] = useState("")

    if(tabIndex == 0){
        setEventFilter(null)
    }
    
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

      const indonesianCities = [
        'Jakarta',
        'Surabaya',
        'Bandung',
        'Medan',
        'Semarang',
        'Makassar',
        'Tangerang',
        'Bekasi',
        'Depok',
        'Palembang',
        'Padang',
        'Bandar Lampung',
        'Bogor',
        'Malang',
        'Yogyakarta',
        'Batam',
        'Pekanbaru',
        'Banjarmasin',
        'Samarinda',
        'Denpasar',
        'Manado',
        'Balikpapan',
        'Purwokerto',
        'Cirebon',
        'Purwakarta',
        'Sukabumi',
        'Tasikmalaya',
        'Cimahi',
        'Salatiga',
        'Magelang',
        'Probolinggo',
        'Pontianak',
        'Jambi',
        'Mataram',
        'Kupang',
        'Palu',
        'Cilegon',
        'Sorong',
        'Ambon',
        'Lhokseumawe',
        'Banda Aceh',
        'Pangkal Pinang',
        'Jayapura',
        'Nabire',
        'Manokwari',
        'Sorong',
        'Bau-Bau',
      ];

      const setActive = (item) => {
        setCategory(item)
        setActiveCategory(item);
        if(tabIndex == 1){
            getEventByFormatEvent("format_event", item);
        }else if(tabIndex == 2){
            getEventByFormatEvent("topik_event", item);
        }else if(tabIndex == 3){
            getEventByFormatEvent("kota", item);
        }
      };
      
      const getEventByFormatEvent = async (format, item) =>{
        try{
            const response = await axios.get(`http://localhost:2000/event/get-event-format?${format}=${item}`);
            setEventFilter(response.data.result)
          }catch(err){
            console.log(err);
          }
    }

    return(
        <>
        <VStack p={8} bgColor={'#020091'} boxShadow={'xl'}>
            <Tabs onChange={(index) => setTabIndex(index)} variant='soft-rounded' colorScheme='green' size={'lg'}>
                <TabList>
                    <Tab color={'white'}>Semua</Tab>
                    <Tab color={'white'}>Format</Tab>
                    <Tab color={'white'}>Topik</Tab>
                    <Tab color={'white'}>Kota</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={[4, null, 8]} w={'100%'} spacing={5}>
                            {eventCategory.map((item, index) => (
                            <Button p={3} key={index} onClick={() => setActive(item)} variant={'outline'} 
                            bgColor={activeCategory === item ? "white" : null} 
                            color={activeCategory === item ? "black" : "white"}
                            _hover={{
                                bgColor: "white",
                                color: "black"
                              }}>
                                <Text fontSize={{ base: "sm", md: "md"}}>{item}</Text>
                            </Button>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={[3, null, 7]} w={'100%'} spacing={5}>
                        {eventTopic.map((item, index) => (
                            <Button p={3} key={index} onClick={() => setActive(item)} variant={'outline'} 
                            bgColor={activeCategory === item ? "white" : null} 
                            color={activeCategory === item ? "black" : "white"}
                            _hover={{
                                bgColor: "white",
                                color: "black"
                              }}>
                                <Text fontSize={{ base: "sm", md: "md"}}>{item}</Text>
                            </Button>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={[4, null, 10]} w={'100%'} spacing={5}>
                        {indonesianCities.map((item, index) => (
                            <Button p={3} key={index} onClick={() => setActive(item)} variant={'outline'} 
                            bgColor={activeCategory === item ? "white" : null} 
                            color={activeCategory === item ? "black" : "white"}
                            _hover={{
                                bgColor: "white",
                                color: "black"
                              }}>
                                <Text fontSize={{ base: "sm", md: "md"}}>{item}</Text>
                            </Button>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
        </>
    )

}