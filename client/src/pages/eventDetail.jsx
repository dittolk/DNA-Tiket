import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navbar";

function EventDetail() {
    const params = useParams();
    
    return(
        <>
        <NavBar></NavBar>
            <VStack h={'auto'} w={'100%'} p={5}>
                <Box w={'800px'} h={'500px'} boxShadow={'lg'}>INI GAMBAR</Box>
                <HStack w={'100%'} h={'auto'} justifyContent={'space-between'}>
                    <VStack w={'70%'} p={5} boxShadow={'lg'}>
                        <Text>Ini id event {params.id}</Text>
                        <Box bgColor={'red'}></Box>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Incidunt dolorum, deserunt magnam rem blanditiis eligendi alias! Sint accusamus, 
                            quibusdam ipsa voluptatem laudantium porro, quia ea, ab voluptates commodi cupiditate nobis?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Incidunt dolorum, deserunt magnam rem blanditiis eligendi alias! Sint accusamus, 
                            quibusdam ipsa voluptatem laudantium porro, quia ea, ab voluptates commodi cupiditate nobis?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Incidunt dolorum, deserunt magnam rem blanditiis eligendi alias! Sint accusamus, 
                            quibusdam ipsa voluptatem laudantium porro, quia ea, ab voluptates commodi cupiditate nobis?
                            </Text>
                    </VStack>
                    <VStack p={5} boxShadow={'lg'}>
                        <Text>Ini id event {params.id}</Text>
                        <Box bgColor={'blue'}></Box>
                    </VStack>
                </HStack>
            </VStack>
        </>
    )
}

export default EventDetail;