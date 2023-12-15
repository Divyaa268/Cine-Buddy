import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'

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
    );

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }, 
    [] )

  return (
    <div>
        <div className="text-4xl font-bold text-fuchsia-300">
      {/* Namaste Everyone, Let's build Netflix GPT!  */}
    </div>
    <div>
        <RouterProvider router={appRouter} />
    </div>
      
    </div>
  )
}

export default Body
