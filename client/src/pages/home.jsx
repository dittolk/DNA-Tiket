import Carousel from "../components/carousel";
import EventContentPopular from "../components/eventContentPopular";
import EventContentRecent from "../components/eventContentRecent";
import EventContent from "../components/eventContentRecent";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

function Home() {
    return(
        <>
        <NavBar></NavBar>
        <Carousel></Carousel>
        <EventContentRecent></EventContentRecent>
        <EventContentPopular></EventContentPopular>
        <Footer></Footer>
        </>
    )
}

export default Home;