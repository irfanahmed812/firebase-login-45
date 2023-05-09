import './App.css';
import { NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    },
    {
      path: '*',
      element: <div className='container mt-5 text-center'>404 error this page not found go to <NavLink to="/">Home page</NavLink></div>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
