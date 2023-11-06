import { useToast } from "@chakra-ui/react";
import Carousel from "../components/carousel";
import EventContentPopular from "../components/eventContentPopular";
import EventContentRecent from "../components/eventContentRecent";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { useSelector } from "react-redux";

function Home() {
    const fr_login = localStorage.getItem("fr-login");
    const toast = useToast()
    const user = useSelector((state) => state.user.value);

    if(fr_login){
        toast({
            title: 'Hai!',
            description: `Selamat datang ${user.name}`,
            status: 'success',
            position: 'top',
            duration: 6000,
            isClosable: true,
          })
        localStorage.removeItem('fr-login');
    }

    return(
        <>
        <NavBar></NavBar>
        <Carousel></Carousel>
        <EventContentRecent></EventContentRecent>
        {/* <EventContentPopular></EventContentPopular> */}
        <Footer></Footer>
        </>
    )
}

export default Home;