import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
   <>
   <div className='center'>
   <UserContextProvider>
    <h1>hi</h1>
    <Login />
    <profile />
   </UserContextProvider>
   </div>
  
   </>
  )
}

export default App
