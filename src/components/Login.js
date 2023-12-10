import Header from "./Header"

const Login = () =>
{
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'
                     alt='Background' />
            </div>

      <form className="relative p-16 bg-transparent">
        <input type="text" placeholder="Email-address" className="p-2 m-2" />
        <input type="password" placeholder="Password" className="p-2 m-2" />

        <button className="p-4 m-4 bg-rose-700"> Sign Up</button>
      </form>
        </div>
        
    )
}

export default Login
