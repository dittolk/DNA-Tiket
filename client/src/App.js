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
import Profile from "./components/profile";


const router = createBrowserRouter([
  {path: '/', element: <Home></Home>},
  {path: '/register_user', element:<RegisterUser></RegisterUser>},
  {path: '/login_user', element:<LoginUser></LoginUser>},
  {path: '/discover_event', element:<DiscoverEvent></DiscoverEvent>},
  {element: <Required></Required>, children: [
    {path: '/dashboard', element:<Dashboard></Dashboard>},
    {path: '/profile', element:<Profile></Profile>},
    {path: '/register_event', element:<RegisterEvent></RegisterEvent>},
  ]}
]);

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  console.log(token);
  const keepLogin = async () => {
    try{
        const response = await axios.get("http://localhost:2000/user/keep-login", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        console.log("ini response", response);
        dispatch(setData(response.data.user));
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    keepLogin();
  }, [])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
