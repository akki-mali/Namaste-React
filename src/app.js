import { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router';
import About from './components/About';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import AppStore from './utils/AppStore';
import { Provider } from 'react-redux';
import Cart from './components/Cart';

const Grocery = lazy(() => import ('./components/Grocery'));

const AppLayout = () => {
const  [userName, setUserName] = useState('');

  return (
    <div>
      <Provider store={AppStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
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
      },
      {
        path:'/grocery',
        element: <Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>
      },
      {
        path:'/cart',
        element: <Cart />
      }

    ],
    errorElement: <Error />
  }, 
  
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={approuter} />);