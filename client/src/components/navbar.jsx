import { Box, Button, Flex, Image, Input, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

function NavBar(){
    
    const [coba, setCoba] = useState(0);
    const [isSmallerScreen] = useMediaQuery("(max-width: 30em)");

    const handleLogout = () => {

    }

    const handleProfile = () => {
        
    }

    const handleDashboard = () => {
        
    }

    const handleLogin = () => {

    }

    const handleRegister = () =>{

    }

    return(
        <Flex w={'100%'}>
            <Box bg={'rgb(16, 69, 181)'} w={'100%'} color='white' padding="1.2rem" borderBottom="1px solid black" boxShadow='0px 4px 2px -2px rgba(0, 0, 0, 0.2)' alignItems={'center'}>
                <Flex justifyContent="space-between" alignItems={'center'}>
                    <Text fontSize={{ base: "xs", lg: "md" }}>DNA Tickets</Text>
                    {/* <Button bg={'rgb(67, 204, 246)'} _hover={{bg: 'blue.500',}} color={'white'} onClick={handleDashboard}>Dashboard</Button> */}
                    {isSmallerScreen ? (
                        <Button bg="rgb(255, 150, 45)" size={{ base: "sm", lg: "md" }} _hover={{ bg: "blue.500" }} color={"white"}>
                            Search Event
                        </Button>
                    ) : (
                        <Input size={{ base: "sm", lg: "md" }} bg={"gray.100"} placeholder="Search events" w={"50%"} />
                    )}
                    <Flex flexDirection={'row'}>
                            <Button
                            bg="rgb(255, 150, 45)"
                            ms={2}
                            _hover={{ bg: "blue.500" }}
                            color="white"
                            onClick={handleLogin}
                            size={{ base: "sm", lg: "md" }}
                            >
                            Login
                            </Button>
                            <Button
                            bg="rgb(255, 150, 45)"
                            ms={2}
                            _hover={{ bg: "blue.500" }}
                            color="white"
                            onClick={handleRegister}
                            size={{ base: "sm", lg: "md" }}
                            >
                            Register
                            </Button>
                         </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default NavBar;