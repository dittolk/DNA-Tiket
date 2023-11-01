import { Text } from "@chakra-ui/react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import RegisterEventForm from "../components/registerEventForm/registerEventForm";

function RegisterEvent() {
    return(
        <>
            <NavBar></NavBar>
            <RegisterEventForm ></RegisterEventForm>
            <Footer></Footer>
        </>
    )
}

export default RegisterEvent;