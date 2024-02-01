import { createBrowserRouter } from "react-router-dom"
import { Dashboard } from "./pages/app/Dashboard"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
])