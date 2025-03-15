import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ProjectPage from "../pages/ProjectPage";



export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:  [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/porject/:id',
                element: <ProjectPage/>
            }
        ]
    }
])
