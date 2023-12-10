import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter(
        [
            {
                path: "/", 
                element: <Login />
            },
            {
                path: "/browse",
                element: <Browse />
            }
        ]
    )
  return (
    <div>
        <div className="text-4xl font-bold text-fuchsia-300">
      Namaste Everyone, Let's build Netflix GPT! 
    </div>
    <div>
        <RouterProvider router={appRouter} />
    </div>
      
    </div>
  )
}

export default Body
