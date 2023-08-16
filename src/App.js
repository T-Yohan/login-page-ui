//@ts-ignore

import COVER_IMAGE from './Beach.jpg'

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


        <img src={COVER_IMAGE} className='w-full h-full object-cover'/>
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
