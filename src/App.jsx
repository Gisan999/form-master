// import { data } from 'autoprefixer';
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/Hooks/HookForm'
// import StateFulForm from './StateFulForm/StateFulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

//   const handleSignUpSubmit = data => {
// console.log('sign up data', data);
//   }

//   const handleUpdateProfile = data => {
//     console.log('update profile', data)
//   }


  return (
    <>
      <h1 className='text-5xl font-bold text-center mt-6'>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
      formBtn={'Submit'} 
      formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2 className='text-4xl font-semibold'> Sign Up</h2>
          <br />
          <p>please sign up right now</p>
        </div>
      </ReusableForm> */}
      <br />
      {/* <ReusableForm 
      formBtn='Update'
       handleSubmit={handleUpdateProfile} 
       formTitle={'Log In'}>
        <div>
          <h2 className='text-4xl font-semibold'>update profile</h2>
          <br />
          <p>LAlways keep your profile update.</p>
        </div>
       </ReusableForm> */}
    </>
  )
}

export default App
