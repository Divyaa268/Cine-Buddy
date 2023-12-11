import { useState } from "react"
import Header from "./Header"

const Login = () =>
{
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);

    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'
                     alt='Background' />
            </div>


      <form className="w-3/12 absolute p-16 bg-black bg-opacity-60 my-36 mx-auto right-0 left-0 text-white rounded-lg">

        {/* Sign In form */}
        <h1 className="font-bold text-3xl my-2 p-3">{isSignInForm ? "Sign In": "Sign Up" }</h1>

        {!isSignInForm && (
        <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-slate-700 rounded-lg" />
        )}
        
        <input type="text" placeholder="Email-address" className="p-4 my-4 w-full bg-slate-700 rounded-lg" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-700 rounded-lg" />

        <button className="p-4 my-6 bg-rose-700 rounded-lg font-semibold w-full hover:bg-rose-500">{isSignInForm ? "Sign In": "Sign Up" }</button>

        {/* SIGN UP FORM  */}

        <p className="font-semibold cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Cine Buddy? Sign Up Now!": "Already registered? Sign In now!" }</p>
      </form>
        </div>
        
    )
}

export default Login
