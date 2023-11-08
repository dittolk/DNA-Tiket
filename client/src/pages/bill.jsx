import { Box, Center, Flex, Heading, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/navbar";
import axios from "axios";

function Bill() {

    const handleLoadTransaction = async () =>{
        try{
            const result = await axios.get('htt')
        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
        <NavBar></NavBar>
        <Flex alignItems={'center'} justifyContent={'center'} h={'100vh'}>
            <Box w={'50%'} h={'50%'} boxShadow={'lg'} justifyContent={'center'}>
                <VStack justifyContent={'center'} spacing={6} p={8} divider={<StackDivider borderColor='gray.400' />}>
                <Heading>DNA Tiket</Heading>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                </VStack>
            </Box>
        </Flex>
        </>
    )
}

export default Bill;