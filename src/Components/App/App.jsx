import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from '../MasterLayout/MasterLayout';
import Home from '../Home/Home';
import All from '../All/All';
import Platforms from '../Platforms/Platforms';
import Sortby from '../Sortby/Sortby';
import Categories from '../Categories/Categories';
import Login from '../Login/Login';
import Browser from '../Browser/Browser';
import Pc from '../Pc/Pc';

import Register from '../Register/Register';
import Notfound from '../Notfound/Notfound';

import './App.css';
import { PureComponent } from 'react';


function App() {
let routes = createBrowserRouter([
  {path:'/', element:<MasterLayout/>,errorElement:<Notfound/>, children:[
    {index:true,element:<Home/>},
    {path:'all',element:<All/>},
    {path:'plat',element:<Platforms/>},
    {path:'sort',element:<Sortby/>},
    {path:'cat',element:<Categories/>},
    {path:'log',element:<Login/>},
    {path:'reg',element:<Register/>},
    {path:'pc',element:<Pc/>},
    {path:'browser',element:<Browser/>},
  ]}
])

  return (
    <>
    <RouterProvider router={routes}/>
    </>
    
  )
}

export default App;
