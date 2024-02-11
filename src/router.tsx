import { createBrowserRouter } from "react-router-dom"
import { Dashboard } from "./pages/app/Dashboard"
import { HeaderApp } from "./layouts/defaultLayout/app/Header"
import { HeaderAuth } from "./layouts/defaultLayout/auth/Header"
import { SignIn } from "./pages/auth/signIn"
import { SignUp } from "./pages/auth/signUp"


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
    {
        path:'/',
        element: <HeaderAuth />,
        children: [
            {
                path: '/sign-in',
                element: <SignIn /> 
            },
            {
                path: '/sign-up',
                element: <SignUp />
            }
        ]
    }
])