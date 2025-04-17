import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from "../App"
export default function Routes() {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <App />,
        }
    ])
    return {
        router
    }
}
