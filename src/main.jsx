import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import VolunteerForm from './components/VolunteerForm.jsx';
import Github, { githubInfoLoader } from './components/Github.jsx';

const router=createBrowserRouter([
  {path:"/" ,
    element:<App/>,
    children:[
      {
        index: true, 
        element:<Home/>
      },

      {
        path:"/about",
        element:<About/>
      },

      {
        path:"/form",
        element:<VolunteerForm/>
      },

      {
        path:"/contact",
        element:<Contact/>
      },

      
      {
        loader: githubInfoLoader,
        path:"/github",
        element:<Github/>,
      },

    ]
  },
])


createRoot(document.getElementById('root')).render(
   <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
