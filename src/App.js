//@ts-ignore

import COVER_IMAGE from './Beach.jpg'
import GOOGLE_ICON from './téléchargement.png'
const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disbaled: "#D9D9D9"
}

const Login = () => {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top=[25%] left=[10%] flex flex-col'>
          <h1 className='text-4xl text-white font-bold my-4'>Turn Your Dreams into reality</h1>
          <p className='text-xl text-white font-normal'> Start for free and get attractive offers from the community</p>
        </div>
        <img src={COVER_IMAGE} className='w-full h-full object-cover' />
      </div>

      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
        <h1 className='text-xl text-[#060606] font-semibold mr-auto'>Interactive Brand</h1>

        <div className='w-full flex flex-col max-w-[400px]'>
          <div className='w-full flex flex-col mb-5'>
            <h3 className='text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-base mb-2'>Welcome Back! Please enter your details.</p>
          </div>
        </div>

        <div className='w-full flex flex-col max-w-[550px]'>
          <input
            type='email'
            placeholder='Email'
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          <input
            type='password'
            placeholder='Password'
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
        </div>

        <div className='w-full flex items-center justify-between'>
          <div className='w-full flex items-center'>
            <input type='checkbox' className='w-4 h-4 mr-2'/>
            <p className='text-sm'>Remember Me for 30 days</p>
          </div>

          <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password</p>
        </div>



        <div className='w-full flex flex-col my-4'>
          <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
Log In
          </button>
          <button className='w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
Register
          </button>
        </div>

        <div className='w-full flex items-center justify-center relative py-2'>
<div className='w-full h-[1px] bg-black'></div>
<p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
        </div>

        <div className='w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
    <img src={GOOGLE_ICON} className='h-6 mr-2'/>
Sign in with Google
          </div>

          <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text=[#060606]'>Don't have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span></p>
        </div>

      </div>
    </div>
  )
}
// function App() {
//   return (
//     <div className="App">
// Hello World!
//     </div>
//   );
// }

export default Login;
