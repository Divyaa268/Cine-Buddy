import { useState, useRef } from "react"
import Header from "./Header"
import validate from "../utils/validate";

const Login = () =>
{
    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);

    }


    const handleButtonClick = () => {
        // validate the data of the form

        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = validate(email.current.value, password.current.value, name.current.value);
        // console.log(message);

        setErrorMessage(message);

    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'
                     alt='Background' />
            </div>


      <form onSubmit={(e) => e.preventDefault()}
      className="w-3/12 absolute p-16 bg-black bg-opacity-60 my-36 mx-auto right-0 left-0 text-white rounded-lg">

        {/* Sign In form */}
        <h1 className="font-bold text-3xl my-2 p-3">{isSignInForm ? "Sign In": "Sign Up" }</h1>

        {!isSignInForm && (
        <input
        ref = {name}
        type="text" placeholder="Name" className="p-4 my-4 w-full bg-slate-700 rounded-lg" />
        )}

        <input 
        ref = {email}
        type="text" placeholder="Email-address" className="p-4 my-4 w-full bg-slate-700 rounded-lg" />
        
        <input
        ref = {password}
         type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-700 rounded-lg" />

        
        <p className="text-red-500 font-semibold py-3 ">{errorMessage}</p>


        <button className="p-4 my-6 bg-rose-700 rounded-lg font-semibold w-full hover:bg-rose-500"
            onClick={handleButtonClick}>
             {isSignInForm ? "Sign In": "Sign Up" }</button>

        {/* SIGN UP FORM  */}

        <p className="font-semibold cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Cine Buddy? Sign Up Now!": "Already registered? Sign In now!" }</p>
      </form>
        </div>
        
    )
}

export default Login
