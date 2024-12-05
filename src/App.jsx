
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Blog from './components/Blog/Blog';
import Career from './components/Career/Career';
import Footer from './components/Footer/Footer';
import AboutDtails from './components/AboutDtails/AboutDtails';


function App() {

// const router = createBrowserRouter([
// {
//   path:'/',
//   element: <Home />
// },
// {
//   path:'/about',
//   element: <About />
// },
// {
//   path:'/service',
//   element: <div>This is from Service component</div>
// }
// ]);
const router = createBrowserRouter([
{
  path:'/',
  element: <Home />,
  children:[
    {
      path:'/about',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
      element: <About />
    },
    {
      path:'/service',
      element: <Service />
    },
    {
      path:'/blog',
      element: <Blog />
    },
    {
      path:'/career',
      element: <Career />
    },
    {
      path:'/footer',
      element: <Footer />
    },
    {
      path:'/about/:userId',
      loder:({params})=>fetch`https://jsonplaceholder.typicode.com/users/${params.userId}`,
      element:<AboutDtails />
    }
  ]
},

]);

  return <div>
    <RouterProvider router ={router} />

      </div>
}

export default App
