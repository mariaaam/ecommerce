import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Footer from './Component/Footer/Footer'

import Cart from './Component/Cart/Cart'
import Brands from './Component/Brands/Brands'
import Categories from './Component/Categories/Categories'
import Home from './Component/Home/Home'

import NotFound from './Component/NotFound/NotFound'

import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import AuthContextProvider from './Context/AuthContext'
import ProductRout from './Component/ProductRoute/ProductRout'
import { QueryClient, QueryClientProvider } from 'react-query'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import Payment from './Component/Payment/Payment'
import AllOrder from './Component/AllOrder/AllOrder'


export default function App() {

  const MyRouter =createBrowserRouter([
    {path :'/' , element :<Layout/> ,children:[
      {path:'footer' ,element:<Footer/>},
      
      {path:'cart',element:<ProductRout> <Cart/></ProductRout> },
      {path:'ProductDetails/:id',element:<ProductRout> <ProductDetails/></ProductRout> },
      {path:'brands',element:<Brands/>},
      {path:'categories',element:<Categories/>},
      {path:'Home',element:<Home/>},
      {path:'payment',element:<ProductRout> <Payment/></ProductRout> },
      {path:'allorders',element:<ProductRout> <AllOrder/></ProductRout> },
      
      {path:'*',element:<NotFound/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      
    ]}
  ])
  const MyClient=new QueryClient();
  return (
    <>
    <QueryClientProvider client={MyClient}>
       <AuthContextProvider>
      <CartContextProvider>
            

      <RouterProvider router={MyRouter}></RouterProvider>

      </CartContextProvider>
 </AuthContextProvider>
    </QueryClientProvider>


<Toaster/>
    
    
    
    </>
  )
}

