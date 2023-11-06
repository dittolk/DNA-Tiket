import { Button, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar";
import Profile from "../components/profile";
import Footer from "../components/footer";

function Dashboard() {
    const user = useSelector((state) => state.user.value);

    return(
        <>  
            <NavBar></NavBar>
            <Flex direction={'row'} w={'100%'} justifyContent={'center'} p={6}>
                <Profile></Profile>
            </Flex>
        </>
    )
}

export default Dashboard;