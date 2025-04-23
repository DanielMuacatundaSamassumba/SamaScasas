import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from "../App"
import ForgetPassword from '../modules/Auth/pages/ForgetPassword'
import OTP from '../modules/Auth/pages/OTP'
import SignUp from '../modules/Auth/pages/SignUp'
import Home from '../modules/Home/pages/Home'
export default function Routes() {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <App />,
        },
        {
            path: "/forget-password",
            element: <ForgetPassword />,
        },
        {
            path: "/forget-password/otp",
            element: <OTP />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/",
            element: <Home />,
        }
    ])
    return {
        router
    }
}
