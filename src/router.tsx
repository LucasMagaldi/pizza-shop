import { createBrowserRouter } from "react-router-dom"
import { Dashboard } from "./pages/app/Dashboard"
import { HeaderApp } from "./layouts/defaultLayout/app/Header"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HeaderApp />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/',
                element: <Dashboard />
            },
        ]
    },
])