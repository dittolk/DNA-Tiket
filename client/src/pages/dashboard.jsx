import { Button, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar";
import Profile from "../components/profile";
import Footer from "../components/footer";

function Dashboard() {
    const user = useSelector((state) => state.user.value);
    console.log("Ini data redux", user);

    return(
        <>
            <NavBar></NavBar>
            <Profile></Profile>
        </>
    )
}

export default Dashboard;