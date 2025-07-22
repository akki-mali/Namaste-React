import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router';
import About from './components/About';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}

const approuter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout />,
    children: [
      { path:'/',
        element: <Body />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/restaurant/:resId',
        element: <RestaurantMenu/>
      }

    ],
    errorElement: <Error />
  }, 
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={approuter} />);