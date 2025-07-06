import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, /*createRoutesFromElements,Route*/ } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import User from './components/User.jsx'
import Github, {githubInfoLoader} from './components/Github.jsx';

const router = createBrowserRouter([
  {
    path: '/', //top level element jiske andr nesting hori hai
    element: <Layout />, // hun apa '/' nu dsage ki ohnu kehri chiz render krni ve
    children: [
      {
        path : "",
        element : <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path : "contact-us",
        element : <ContactUs />
      },
      {
        path : "user/:userid",
        element : <User />
      },
      {
        loader:githubInfoLoader ,
        path : "github",
        element : <Github />
      }
    ]
  }
])

//OTHER SYNTAX FOR ROUTING
/*const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
       <Route path='contact-us' element={<ContactUs />} />  
    </Route>
   
  )
)*/


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
