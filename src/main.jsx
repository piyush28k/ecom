import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Products from './components/Products.jsx'
import UploadProduct from './components/AddProduct.jsx'
import Home from './components/home/Home.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/Store.js'
import ProductDetail from './components/ProductDetail.jsx'
import Cart from './components/Cart.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path='products' element={<Products/>}/>
      <Route path="uploadProduct" element={<UploadProduct/>}/>
      <Route path= "products/productDetail/:id" element={<ProductDetail/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
