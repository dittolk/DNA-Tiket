import DiscoverEventComponent from "../components/discoverEvent/discoverEventComponent";
import EventContentPopular from "../components/eventContentPopular";
import EventContentRecent from "../components/eventContentRecent";
import NavBar from "../components/navbar";

export default function DiscoverEvent(){
    return(
        <>
            <NavBar></NavBar>
            <DiscoverEventComponent></DiscoverEventComponent>
        </>
    )
}