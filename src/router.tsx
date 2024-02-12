import { createBrowserRouter } from "react-router-dom"
import { Dashboard } from "./pages/app/Dashboard"
import { AppLayout } from "./layouts/defaultLayout/app/appLayout"
import { HeaderAuth } from "./layouts/defaultLayout/auth/Header"
import { SignIn } from "./pages/auth/signIn"
import { SignUp } from "./pages/auth/signUp"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
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