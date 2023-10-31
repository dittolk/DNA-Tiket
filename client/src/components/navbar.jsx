import { Box, Button, Flex, Image, Img, Input, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { Login } from "./login";
import Register from "./register";
import { Link, Navigate, useNavigate } from "react-router-dom";
import navimg from "../asset/tugas2.jpg" 

function NavBar(){
    
    const [coba, setCoba] = useState(0);
    const [isSmallerScreen] = useMediaQuery("(max-width: 30em)");
    const navigate = useNavigate()

    const handleLogout = () => {

    }

    const handleProfile = () => {
        
    }

    const handleDashboard = () => {
        
    }

    const handleLogin = () => {
        navigate("/registerUser");
    }

    const handleRegister = () =>{

    }

    return(
        <Flex w={'100%'}>
            <Box bg={'#020091'} w={'100%'} color='white' padding="1.2rem" borderBottom="1px solid black" boxShadow='0px 4px 2px -2px rgba(0, 0, 0, 0.2)' alignItems={'center'}>
                <Flex justifyContent="space-between" alignItems={'center'}>
                <Image src={navimg} w="200px" h="30px" alt="Logo DNA Tiket"/>
                    {/* <Text fontSize={{ base: "xs", lg: "md" }}>DNA Tickets</Text> */}
                    {/* <Button bg={'rgb(67, 204, 246)'} _hover={{bg: 'blue.500',}} color={'white'} onClick={handleDashboard}>Dashboard</Button> */}
                    {isSmallerScreen ? (
                        <Button bg="rgb(255, 150, 45)" size={{ base: "sm", lg: "md" }} _hover={{ bg: "blue.500" }} color={"white"}>
                            Search Event
                        </Button>
                    ) : (
                        <Input size={{ base: "sm", lg: "md" }} bg={"gray.100"} placeholder="Search events" w={"50%"} />
                    )}
                    <Flex flexDirection={'row'}>
                        <Button mr={"2"} variant='outline'color={"white"} _hover={{}}><Link to="/registerUser">Daftar</Link></Button>
                        <Button><Link to="/loginUser">Masuk</Link></Button>
                         </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default NavBar;