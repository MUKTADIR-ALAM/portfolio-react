import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";



export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:  [
            {
                path:'/',
                element: <Home/>,
            }
        ]
    }
])
