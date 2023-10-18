import Home from "./pages/home";
import Required from "./components/required";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RegisterEvent from "./pages/registerEvent";

const router = createBrowserRouter([
  {path: '/', element: <Home></Home>},
  {path: '/registerEvent', element:<RegisterEvent></RegisterEvent>},
  {path: '/dashboard', element: <Required></Required>, children: [
    {path: '/dashboard', element:<Dashboard></Dashboard>}
    // {path: '/registerEvent', element:<RegisterEvent></RegisterEvent>}
  ]}
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
