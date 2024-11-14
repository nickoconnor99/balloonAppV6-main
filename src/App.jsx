import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './pages/Products'

import './App.css'
import SingleProduct from './pages/SingleProduct'
import Home from './pages/Home'
import data from './data'
import SingleProductPage from './pages/SingleProductPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Products></Products>,
  },
  {
    path: '/product/:id',
    element: <SingleProductPage></SingleProductPage>,
  },
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
