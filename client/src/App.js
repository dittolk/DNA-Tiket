import Home from "./pages/home";
import Required from "./components/required";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Dashboard from "./pages/dashboard";
import RegisterEvent from "./pages/registerEvent";
import RegisterUser from "./pages/registerUser";
import LoginUser from "./pages/loginUser";
import DiscoverEvent from "./pages/discoverEvent";
import { useEffect } from "react";
import { setData } from "./redux/userSlice";
import { setDataEvent } from "./redux/eventSlice";
import Profile from "./components/profile";
import { TransaksiPage } from "./pages/TransaksiPage";
import { PersonalPage } from "./pages/PersonalPage";
import { PromoPage } from "./pages/PromotionPage";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "/register_user", element: <RegisterUser></RegisterUser> },
  { path: "/login_user", element: <LoginUser></LoginUser> },
  { path: "/discover_event", element: <DiscoverEvent></DiscoverEvent> },

  {
    element: <Required></Required>,
    children: [
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      { path: "/profile", element: <Profile></Profile> },
      { path: "/register_event", element: <RegisterEvent></RegisterEvent> },
      { path: "/transaksi/:id", element: <TransaksiPage></TransaksiPage> },
      { path: "/personal", element: <PersonalPage></PersonalPage> },
      { path: "/promo", element: <PromoPage /> },
    ],
  },
]);

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const keepLogin = async () => {
    try {
      const response = await axios.get("http://localhost:2000/user/keep-login", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setData(response.data.user));
    } catch (err) {
      console.log(err);
    }
  };

  const getEvent = async () =>{
    try{
      const response = await axios.get("http://localhost:2000/event/get-event");
      dispatch(setDataEvent(response.data.result));
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    keepLogin();
    getEvent();
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
