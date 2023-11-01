import { Box, Button, Flex, Image, Input, useMediaQuery, HStack, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import navimg from "../asset/tugas2.jpg" 
import { Search2Icon } from '@chakra-ui/icons'
import { RxDashboard } from 'react-icons/rx';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { BsCalendar2Plus } from 'react-icons/bs';

function NavBar(){
    const token = localStorage.getItem("token");
    const [isSmallerScreen] = useMediaQuery("(max-width: 30em)");
    const handleLogout = () =>{
        localStorage.removeItem('token');
        window.location.reload();
    }
    return(
        <Flex w={'100%'}>
            <Box bg={'#020091'} w={'100%'} color='white' padding="1.2rem" borderBottom="1px solid black" boxShadow='lg' alignItems={'center'}>
                <Flex justifyContent="space-between" alignItems={'center'}>
                <Link to={'/'}><Image src={navimg} w="200px" h="30px" alt="Logo DNA Tiket"/></Link>
                    {isSmallerScreen ? (                        
                        <></>
                    ) : (
                        <HStack w={'50vw'} justifyContent={'center'} alignItems={'center'}>
                            <InputGroup ml={'100px'}>
                                <InputLeftElement pointerEvents='none'>
                                <Search2Icon color='gray.400' />
                                </InputLeftElement>
                                <Input rounded={'lg'} size={{ base: "sm", lg: "md" }} bg={"gray.200"} color={'black'} placeholder="Jelajahi event" 
                                _hover={{
                                    shadow: 'xl',
                                  }} />
                            </InputGroup>        
                        </HStack>
                    )}
                    <Flex flexDirection={'row'}>
                        {token ? 
                        <>
                            <Link to="/register_event"><Button mr={"2"} variant='outline'color={"white"} _hover={{}}><BsCalendar2Plus/><Text ml={2}>Buat event</Text></Button></Link>
                            <Link to="/discover_event"><Button mr={"2"} variant='outline'color={"white"} _hover={{}}><RiCompassDiscoverLine/><Text ml={2}>Cari event</Text></Button></Link>
                            <Link to="/dashboard"><Button mr={"2"} variant='outline'color={"white"} _hover={{}}><RxDashboard/><Text ml={2}>Dashboard</Text></Button></Link>
                            <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
                        </> 
                        : 
                        <>
                            <Link to="/discover_event"><Button mr={"2"} variant='outline'color={"white"} _hover={{}}><RiCompassDiscoverLine/><Text ml={2}>Cari event</Text></Button></Link>
                            <Link to="/register_user"><Button mr={"2"} variant='outline'color={"white"} _hover={{}}>Daftar</Button></Link>
                            <Link to="/login_user"><Button>Masuk</Button></Link>
                        </>}
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default NavBar;